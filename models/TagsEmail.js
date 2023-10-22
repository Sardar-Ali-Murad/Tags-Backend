import mongoose from "mongoose";
import validator from "validator";
let TagsEmail = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TagsEmail", TagsEmail);
