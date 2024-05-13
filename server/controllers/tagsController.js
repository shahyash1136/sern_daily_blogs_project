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

export const addTag = async (req, res) => {
  const { tag_name } = req.body;
  try {
    const newTag = await db.query(
      "INSERT INTO tags (tag_name) VALUES ($1) RETURNING *",
      [tag_name]
    );
    res
      .status(201)
      .json({ data: newTag.rows[0], message: "Tag added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
