import { db } from "../utils/db.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await db.query(
      `SELECT b.blog_id,u.first_name,u.last_name,b.title,b.content,t.tag_name,b.created_date,b.updated_date 
      FROM blogs as b 
      LEFT JOIN users as u ON b.user_id = u.user_id 
      LEFT JOIN blog_tags as bt on b.blog_id = bt.blog_id
      LEFT JOIN tags as t on bt.tag_id = t.tag_id
      ORDER BY created_date DESC`
    );

    const blogsArr = [];
    blogs.rows.forEach((row) => {
      const {
        blog_id,
        first_name,
        last_name,
        title,
        content,
        tag_name,
        created_date,
        updated_date,
      } = row;
      // Find the blog in the blogs array
      let blog = blogsArr.find((blog) => blog.id === blog_id);
      if (!blog) {
        // If the blog is not found, create a new blog object
        blog = {
          id: blog_id,
          user_firstName: first_name,
          user_lastName: last_name,
          title,
          content,
          created_date,
          updated_date,
          tags: [],
        };
        // Add the new blog object to the blogs array
        blogsArr.push(blog);
      }
      if (tag_name) {
        blog.tags.push(tag_name);
      }
    });

    res.status(200).json({
      data: blogsArr,
      message: "Successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
};
export const createBlog = async (req, res) => {
  try {
    const { title, content, user_id } = req.body;

    //Validate the request body
    if (!title || !content || !user_id) {
      return res
        .status(400)
        .json({ message: "Title, content, and userId are required" });
    }

    const user = await db.query("SELECT * FROM users WHERE user_id=$1", [
      user_id,
    ]);

    //Validate if user exits or not
    if (user.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const newBlog = await db.query(
      "INSERT INTO blogs (title,content,user_id) VALUES ($1,$2,$3) RETURNING *",
      [title, content, user_id]
    );

    const data = {
      id: newBlog.rows[0].blog_id,
      title: newBlog.rows[0].title,
      content: newBlog.rows[0].content,
      user_id: newBlog.rows[0].user_id,
      created_at: newBlog.rows[0].created_date,
      updated_at: newBlog.rows[0].updated_date,
    };

    res.status(201).json({ data, message: "Blog created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
};
export const getBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    const blog = await db.query(
      `SELECT b.blog_id, u.first_name, u.last_name, b.title, b.content,t.tag_name, b.created_date, b.updated_date 
      FROM blogs as b
      LEFT JOIN users as u ON b.user_id = u.user_id
      LEFT JOIN blog_tags as bt ON b.blog_id = bt.blog_id
      LEFT JOIN tags as t ON bt.tag_id = t.tag_id
      WHERE b.blog_id = $1`,
      [blogId]
    );

    // Check if blog exists
    if (blog.rows.length === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const blogArr = [];
    blog.rows.forEach((row) => {
      const {
        blog_id,
        first_name,
        last_name,
        title,
        content,
        tag_name,
        created_date,
        updated_date,
      } = row;
      // Find the blog in the blogs array
      let blog = blogArr.find((blog) => blog.id === blog_id);
      if (!blog) {
        // If the blog is not found, create a new blog object
        blog = {
          id: blog_id,
          user_firstName: first_name,
          user_lastName: last_name,
          title,
          content,
          created_date,
          updated_date,
          tags: [],
        };
        // Add the new blog object to the blogs array
        blogArr.push(blog);
      }
      if (tag_name) {
        blog.tags.push(tag_name);
      }
    });

    res.status(200).json({
      data: blogArr,
      message: "Successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
};
export const updateBlog = async (req, res) => {
  try {
    const payload = req.body;
    const blogId = req.params.id;

    const fieldsToUpdate = [];
    const queryParameters = [];
    let parameterIndex = 1;

    for (const key in payload) {
      if (
        payload.hasOwnProperty(key) &&
        key !== "blog_id" &&
        key !== "user_id" &&
        key !== "updated_date"
      ) {
        fieldsToUpdate.push(`${key} = $${parameterIndex}`);
        queryParameters.push(payload[key]);
        parameterIndex++;
      }
    }

    // Include updated_at with the current timestamp in the fields to update
    fieldsToUpdate.push("updated_date = CURRENT_TIMESTAMP");

    // Construct the complete SQL UPDATE query
    const setClause = fieldsToUpdate.join(", ");
    const query = `
      UPDATE blogs
      SET ${setClause}
      WHERE blog_id = ${blogId}
    `;

    // Execute the query
    const result = await db.query(query, queryParameters);

    // Check if any rows were affected by the update
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Send a success response
    res.json({ message: "Blog Updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
};
export const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    await db.query("DELETE FROM blogs WHERE blog_id = $1", [blogId]);

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
};
