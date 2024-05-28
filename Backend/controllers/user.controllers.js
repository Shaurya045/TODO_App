import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  console.log(req.query.keyword);
  res.json({
    success: true,
    users,
  });
};

export const createUsers = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({ name, email, password });
  res.json({
    success: true,
    message: "Registered Successfully",
  });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  // console.log(req.params,req.query);
  res.json({
    success: true,
    user,
  });
};
