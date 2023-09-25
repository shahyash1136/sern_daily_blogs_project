import bCrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { first_name, last_name, email_id, password } = req.body;

    const hashPassword = await bCrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email_id,
      password: hashPassword,
    });

    const token = jwt.sign({ userId: email_id }, process.env.ACCESS_TOKEN_KEY);

    const data = {
      id: user.user_id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email_id,
      joinedAt: user.created_at,
      token: token,
    };

    res.status(201).json({ data, message: "Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "This route is not yet defined",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email_id, password } = req.body;

    const user = await User.findOne({
      where: { email_id },
    });

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "Authentication failed",
      });
    }

    const isPasswordValid = await bCrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: "error",
        message: "Authentication failed",
      });
    }
    const token = jwt.sign(
      { userId: user.email_id },
      process.env.ACCESS_TOKEN_KEY
    );

    const data = {
      id: user.user_id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email_id,
      joinedAt: user.created_at,
      token: token,
    };

    res.status(200).json({ data, message: "Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "This route is not yet defined",
    });
  }
};
