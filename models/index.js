const {Sequelize,DataTypes} = require('sequelize');
const dbConfigs = require("../config/dbconfigs");


const sequelize = new Sequelize(dbConfigs.DB, dbConfigs.USER, dbConfigs.PASSWORD, {
    host: dbConfigs.HOST,
    dialect: dbConfigs.dialect,

    pool: {
        max: dbConfigs.pool.max,
        min: dbConfigs.pool.min,
        acquire: dbConfigs.pool.acquire,
        idle: dbConfigs.pool.idle
  }
});


const User = require('./user')(sequelize,DataTypes);
const Team = require('./team')(sequelize,DataTypes);
User.belongsToMany(Team, { through: 'UserTeamMaps', foreignKey: 'userId' });
Team.belongsToMany(User, { through: 'UserTeamMaps', foreignKey: 'teamId' });

module.exports={
  User,
  Team
}