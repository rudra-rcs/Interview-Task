const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  contact_no: {
    type: Number,
    length: 10,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "email is already in use"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("enter valid email.");
      }
    },
  },
  password: {
    type: String,
    required: true,

  },
  gender: {
    type: String,
    required: true,
    trim: true,

  },
  address: {
    type: String,
    required: true,
    trim: true,
 
  },


  village_pincode: {
    type: Number,
    required: true,
    trim: true,

  },

});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});



const user = new mongoose.model("user", userSchema);
module.exports = user;
