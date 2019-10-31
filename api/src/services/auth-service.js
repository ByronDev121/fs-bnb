// Services
const ValidationService = require("../services/validation-service");
const validationService = new ValidationService();

// DB models:
const User = require("../models/user-model");

// Hash:
const bcrypt = require("bcryptjs");

// JWT:
var jwt = require("jsonwebtoken");

module.exports = class AuthService {
  constructor() {}

  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async getJwtToken(user, rememberUser) {
    let jwtObject = {};

    jwtObject.id = user.id;
    jwtObject.name = user.firstName;
    jwtObject.surname = user.lastName;
    jwtObject.cellPhone = user.cellPhone;
    jwtObject.email = user.email;
    jwtObject.imgUrl = user.imgUrl;
    jwtObject.role = user.role;
    jwtObject.remember = rememberUser;

    return await jwt.sign(Object.assign({}, jwtObject), "secret-key", {
      expiresIn: "1d"
    });
  }

  async verifyToken(token) {
    return await jwt.verify(token, "secret-key");
  }

  register(user) {
    return new Promise((resolve, reject) => {
      /*  if (!validationService.isValidRegisterBody(user)) {
        reject("Invalid payload");
      } */

      User.getAll(async (err, data) => {
        if (err) reject(err);

        data.forEach(existingUser => {
          if (existingUser.email === user.email) {
            reject("This email address already been used");
          }
        });

        const passwordHash = await this.hashPassword(user.password);

        const userObj = {
          firstName: user.firstName,
          lastName: user.lastName,
          cellPhone: user.cellPhone,
          email: user.email,
          password: passwordHash,
          imgUrl: "https://storage.cloud.google.com/fs-bnb/new-acount.png",
          role: user.role
        };

        const newUser = new User(userObj);
        User.create(newUser, async (err, res) => {
          if (err) reject(err);
          else {
            const jwt = await this.getJwtToken(userObj, true);
            userObj.id = res;
            const authRes = {
              user: userObj,
              jwt: jwt
            };
            resolve(authRes);
          }
        });
      });

      // Potential feature
      /*
      this.emailService.sendRegistrationEmail(newUser);
      */
    });
  }

  async login(user, platform) {
    return new Promise((resolve, reject) => {
      /* if (!validationService.isValidRegisterBody(user)) {
        reject("Invalid payload");
      } */
      User.getAll(async (err, dbUsers) => {
        if (err) reject(err);
        let dbUser = dbUsers.filter(dbUser => {
          return dbUser.email === user.email;
        });
        if (dbUser.length) {
          if (dbUser[0].role != platform) {
            reject("Not " + platform);
          } else {
            const macth = await bcrypt.compare(
              user.password,
              dbUser[0].password
            );
            if (macth) {
              const jwt = await this.getJwtToken(dbUser[0], true);
              const authRes = {
                user: dbUser[0],
                jwt: jwt
              };
              resolve(authRes);
            } else {
              reject("Incorrect password");
            }
          }
        } else {
          reject("User not found");
        }
      });
    });
  }
};
