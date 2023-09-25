import { User } from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: [
        "user_id",
        "first_name",
        "last_name",
        ["email_id", "email"],
        ["created_at", "joinedAt"],
      ],
    });
    res.status(200).send({ data, message: "Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export const getUser = async (req, res) => {
  const user_id = req.params.id;
  try {
    const user = await User.findOne({
      attributes: [
        "user_id",
        "first_name",
        "last_name",
        ["email_id", "email"],
        ["created_at", "joinedAt"],
      ],
      where: { user_id },
    });
    res.status(200).send({ data: user, message: "Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const payload = req.body;
    await User.update(payload, { where: { user_id } });
    res.status(200).send({ message: "User Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    await User.destroy({
      where: { user_id },
    });
    res.status(200).send({ message: "Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};
