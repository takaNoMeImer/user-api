import { encryptPassword } from "../libs/encrypt.js";
import User from "../models/User.model.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // creating a new User
    const user = new User({
      username,
      email,
      password: encryptPassword(password)
    });

    // saving the new user
    const savedUser = await user.save();

    return res.json(savedUser);

  } catch (error) {
    console.error(error);
  }
};

export const userTest = async (req, res) => {
  res.json("Test success")
}