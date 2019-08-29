const { Storage } = require("@google-cloud/storage");

module.exports = class GC {
  static instance() {
    return this._instance || (this._instance = new this());
  }

  constructor() {
    const config = {
      projectId: "fs-bnb",
      keyFilename: "C:Users/toast/Downloads/fs-bnb-2ec1e2f35716.json"
    };

    const gc = new Storage(config);

    // Test
    /* gc.getBuckets().then(res => {
      console.log(res);
    }); */

    const bucketName = "fs-bnb";
    this.bucket = gc.bucket(bucketName);
    console.log("GC bucket instance created");
  }
};
