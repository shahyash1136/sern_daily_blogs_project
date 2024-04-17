import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { db } from "../utils/db.js";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });

const signup = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await db.query(
      "INSERT INTO users (first_name,last_name,email,password) VALUES ($1,$2,$3,$4) RETURNING *",
      [first_name, last_name, email, hashPassword]
    );

    console.log(newUser);

    // Generate JWT token
    const token = await jwt.sign(
      { userId: newUser.rows[0].id },
      process.env.JWT_SECRET_KEY
    );

    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    console.log("Error during signup", error);
    res.status(500).json({
      error: "Error during signup",
    });
  }
};

export { signup };
