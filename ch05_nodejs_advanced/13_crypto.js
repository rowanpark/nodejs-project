const crypto = require("crypto");
console.log(crypto.createHash("sha512").update("pw1234").digest("base64"));
console.log(crypto.createHash("sha512").update("pw1234").digest("hex"));

const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(arr);
      resolve(buf.toString("base64"));
    });
  });
};
