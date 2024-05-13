import { db } from "../utils/db.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM users");

    res.status(200).send({ data: users.rows, message: "Successful" });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user_id = req.params.id;

    const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
      user_id,
    ]);

    // Check if any rows are there or not
    if (user.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).send({ data: user.rows[0], message: "Successful" });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const payload = req.body;

    // Construct dynamic SET clause and query parameters
    const fieldsToUpdate = [];
    const queryParameters = [];
    let parameterIndex = 1;

    for (const key in payload) {
      if (payload.hasOwnProperty(key) && key !== "user_id") {
        fieldsToUpdate.push(`${key} = $${parameterIndex}`);
        queryParameters.push(payload[key]);
        parameterIndex++;
      }
    }

    // Construct the complete SQL UPDATE query
    const setClause = fieldsToUpdate.join(", ");
    const query = `
      UPDATE users
      SET ${setClause}
      WHERE user_id = ${userId}
    `;

    // Execute the query
    const result = await db.query(query, queryParameters);
    // Check if any rows are there or not
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User Updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const user_id = req.params.id;

  try {
    const result = await db.query("DELETE FROM users WHERE user_id=$1", [
      user_id,
    ]);
    // Check if any rows are there or not
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};
