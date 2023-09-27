import { blog } from "../models/blogModel.js";
import { User } from "../models/userModel.js";
export const getAllBlogs = async (req, res) => {
  try {
    const data = await blog.findAll({
      include: [
        {
          model: User,
          attributes: [
            ["first_name", "firstName"],
            ["last_name", "lastName"],
            ["email_id", "email"],
          ],
        },
      ],
    });
    res.status(200).send({
      data,
      message: "Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error,
    });
  }
};
export const createBlog = async (req, res) => {
  try {
    const { title, content, user_id } = req.body;

    const data = await blog.create({ title, content, user_id });
    res.status(201).send({
      data,
      message: "Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error,
    });
  }
};
export const getBlog = async (req, res) => {
  try {
    const blog_id = req.params.id;
    const data = await blog.findOne({
      where: { blog_id },
      include: [
        {
          model: User,
          attributes: [
            ["first_name", "firstName"],
            ["last_name", "lastName"],
            ["email_id", "email"],
          ],
        },
      ],
    });
    res.status(200).send({
      data,
      message: "Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error,
    });
  }
};
export const updateBlog = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error,
    });
  }
};
export const deleteBlog = async (req, res) => {
  try {
    const blog_id = req.params.id;
    blog.destroy({
      where: { blog_id },
    });
    res.status(200).send({
      message: "Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error,
    });
  }
};
