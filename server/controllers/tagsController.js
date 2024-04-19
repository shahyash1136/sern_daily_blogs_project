import { db } from "../utils/db.js";

export const getAllTags = async (req, res) => {
  try {
    const tags = await db.query("SELECT * FROM tags");
    res.status(200).json({ data: tags.rows, message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
