const AuthService = require("../../services/auth-service");
const authService = new AuthService();

module.exports = async (req, res, next) => {
  const path = req.originalUrl;
  if (path.includes("api")) {
    if (path.includes("api/auth")) {
      next();
      return;
    } else {
      let authHeader = await req.get("Authorization");
      if (!authHeader) {
        console.log("No header");
        authHeader = "";
      }

      authHeader = authHeader.replace("Bearer ", "");
      authService
        .verifyToken(authHeader)
        .then(jwt => {
          res.locals.jwt = jwt;
          next();
        })
        .catch(err => {
          res.status(401).json("unauthorized");
        });
    }
  } else {
    next();
    return;
  }
};
