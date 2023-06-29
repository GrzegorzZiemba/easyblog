const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require("dotenv").config();

const auth = async (req, res, next) => {
  console.log("auth");
  try {
    const token = req.header("Authorization");
    console.log(token + " ----");
    const tokenToVerify = JSON.parse(token);
    console.log(tokenToVerify);
    const decodedToken = jwt.verify(tokenToVerify, process.env.SECRET_JWT);
    console.log(decodedToken._id + "DECODED");
    const user = await userModel.find({
      _id: decodedToken._id,
    });
    console.log(user);
    if (!user) {
      throw new Error("msg");
    }

    req.user = user;
    next();
  } catch (error) {
    res.send({ error: "Please authenticate" });
  }
};

module.exports = auth;