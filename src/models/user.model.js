import mongoose from "mongoose";

const userDobSchema = new mongoose.Schema({
  type: Date,
  required: [true, "DOB is required!"],
  validate: {
    validator: function (value) {
      return value < new Date();
    },
    message: "Date must be in from the past",
  },
});

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Username is required"],
      trim: true, //Keeps space between words but remove all other whitespaces and newlines
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      minlength: [3, "Username must be atleast 3 characters long"],
      trim: true, //Keeps space between words but remove all other whitespaces and newlines
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "password must be atleast 8 characters long"],
    },
    dob: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userDobSchema",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
