import mongoose from "mongoose";
import validator from "validator";

let TagsMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name"],
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      unique: true,
    },
    website: {
      type: String,
      required: [true, "Please provide the webiste"],
      minlength: 3,
      maxlength: 20,
    },
    message: {
      type: String,
      required: [true, "Please provide the message"],
      minlength: 3,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TagsMessageSchema", TagsMessageSchema);
