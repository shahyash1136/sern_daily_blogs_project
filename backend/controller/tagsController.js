import { tags } from "../models/tagsModel.js";

export const getAllTags = async (req, res) => {
  try {
    const data = await tags.findAll(); // Use Sequelize methods as needed
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
