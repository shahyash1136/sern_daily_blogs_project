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

    // Check if payload is undefined or empty
    if (!payload || Object.keys(payload).length === 0) {
      return res.status(400).json({ error: "Invalid or empty payload" });
    }

    // Attempt to update the User based on the payload
    const [affectedRowsCount] = await User.update(payload, {
      where: { user_id },
    });

    if (affectedRowsCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

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
