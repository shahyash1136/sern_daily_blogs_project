import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { db } from "../utils/db.js";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });

const signup = async (req, res) => {
  try {
    const { first_name, last_name, email_id, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.query(
      "SELECT * FROM users WHERE email_id = $1",
      [email_id]
    );

    if (existingUser.rows.length !== 0) {
      return res.status(409).json({ message: "Email ID already exists" });
    }

    const newUser = await db.query(
      "INSERT INTO users (first_name,last_name,email_id,password) VALUES ($1,$2,$3,$4) RETURNING *",
      [first_name, last_name, email_id, hashPassword]
    );

    // Generate JWT token
    const token = await jwt.sign(
      { userId: newUser.rows[0].id },
      process.env.JWT_SECRET_KEY
    );

    const data = {
      id: newUser.rows[0].user_id,
      first_name: newUser.rows[0].first_name,
      last_name: newUser.rows[0].last_name,
      email: newUser.rows[0].email_id,
      token: token,
    };

    res.status(201).json({ data, message: "Successful" });
  } catch (error) {
    console.log("Error during signup", error);
    res.status(500).json({
      error: "Error during signup",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email_id, password } = req.body;

    //select query to get the user
    const user = await db.query("SELECT * FROM users WHERE email_id = $1", [
      email_id,
    ]);

    //check if user has any data or not in row
    if (user.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    //compare the password given by user with the encrypted password stored in database.
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    //checks if validPassword value is true or false
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = await jwt.sign(
      { userId: user.rows[0].id },
      process.env.JWT_SECRET_KEY
    );

    const data = {
      id: user.rows[0].user_id,
      first_name: user.rows[0].first_name,
      last_name: user.rows[0].last_name,
      email: user.rows[0].email_id,
      token: token,
    };

    res.status(200).json({ data, message: "Successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Error during login" });
  }
};

export { signup, login };
