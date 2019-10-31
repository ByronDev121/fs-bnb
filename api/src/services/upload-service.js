// Dependecies:
const fs = require("fs");
const path = require("path");

// Google CLoud
const GC = require("../firebase/firebase");
const gc = GC.instance();

module.exports = class UploadService {
  constructor() {}

  getUniqueName(fileName) {
    return Date.now() + "_" + fileName;
  }

  delete(fileName) {
    const filePath = path.join(__dirname, "../../../uploads", fileName);
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      throw err;
    }
  }

  upload(req) {
    return new Promise(async (resolve, reject) => {
      const filePath = path.join(__dirname, "../../", req.files.file.path);
      if (filePath) {
        let name = await gc.bucket.upload(filePath, {
          gzip: true,
          metadata: {
            cacheControl: "public, max-age=31536000"
          }
        });
        if (name) {
          resolve("https://storage.cloud.google.com/fs-bnb/" + name[0].name);
        } else {
          reject("Failed to upload to fire base");
        }
      } else {
        reject("Failed to upload");
      }
    });
  }
};
