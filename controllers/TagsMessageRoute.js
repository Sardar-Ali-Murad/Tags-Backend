import TagsMessageModel from "../models/TagsContact.js";
import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const createMessage = async (req, res) => {
  let { name, email, website, message } = req.body;
  if (!name || !email || !website || !message) {
    throw new BadRequestError("Provide all the values");
  }
  await TagsMessageModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "Message created successfully" });
};

const getAllMessages = async (req, res) => {
  let Messages = await TagsMessageModel.find({});
  res.status(StatusCodes.OK).json({ data: Messages });
};

export { createMessage, getAllMessages };
