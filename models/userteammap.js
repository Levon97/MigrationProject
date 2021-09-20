'use strict';
const User = require("./user");
const Team = require("./team");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTeamMap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  UserTeamMap.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER 
    },
    userId:  {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'userId'
      }
    },
    teamId:   {
      type: DataTypes.INTEGER,
      references: {
        model: Team,
        key: 'teamId'
      }
    }
  }, {
    sequelize,
    modelName: 'UserTeamMap',
  });
  return UserTeamMap;
};