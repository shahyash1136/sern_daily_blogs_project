import Sequelize from "sequelize";
import sequelize from "../util/database.js";

export const User = sequelize.define(
  "users",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email_id: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
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
    tableName: "users",
    timestamps: false,
  }
);
