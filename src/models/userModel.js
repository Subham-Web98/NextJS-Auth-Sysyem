import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: [true, "Please enter a username"],
      unique: true,
      trim: true,
    },
    email: {
      type: "string",
      required: [true, "Please enter a email address"],
      unique: true,
    },
    password: {
      type: "string",
      required: [true, "Please enter a password "],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    },
  //! Reminds 
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
