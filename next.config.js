const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

module.exports = {
  env: {
    secret: process.env.SECRET,
    client_id: process.env.CLIENT_ID,
  },
};
// console.log(module.exports);
