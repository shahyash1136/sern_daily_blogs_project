import Sequelize from "sequelize";
import sequelize from "../util/database.js";

export const tags = sequelize.define(
  "tags",
  {
    tag_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tag_name: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: "tags",
    timestamps: false,
  }
);
