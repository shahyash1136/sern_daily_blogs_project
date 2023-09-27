import Sequelize from "sequelize";
import sequelize from "../util/database.js";
import { User } from "./userModel.js";

export const blog = sequelize.define(
  "blogs",
  {
    blog_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    user_id: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to another model
        model: User,
        // This is the column name of the referenced model
        key: "user_id",
        // This is to specify ON DELETE CASCADE
        onDelete: "CASCADE",
        // This is to specify ON UPDATE CASCADE
        onUpdate: "CASCADE",
      },
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW, // Use Sequelize's NOW to set the default value to CURRENT_TIMESTAMP
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW, // Use Sequelize's NOW to set the default value to CURRENT_TIMESTAMP
      allowNull: false,
      onUpdate: Sequelize.NOW, // Use Sequelize's NOW to set the onUpdate behavior to ON UPDATE CURRENT_TIMESTAMP
    },
  },
  {
    tableName: "blogs",
    timestamps: false,
  }
);

blog.belongsTo(User, { foreignKey: "user_id" });
