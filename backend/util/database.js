import Sequelize from "sequelize";

const sequelize = new Sequelize("daily_blogs", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
