import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import TagsEmailModel from "../models/TagsEmail.js";

const createEmail = async (req, res) => {
  let { email } = req.body;
  if (!email) {
    throw new BadRequestError("Please provide an email to proceed");
  }

  let alreadyExists = await TagsEmailModel.findOne({ email: email });
  if (alreadyExists) {
    throw new BadRequestError("You already have subscribed to the newsletter");
  }

  await TagsEmailModel.create({ email });
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "You have Subscribed Successfully" });
};

export { createEmail };
