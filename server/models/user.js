const { DataTypes }  = require('sequelize');
const sequelize = require('../db/sequelize');

const User = sequelize.afterDefine('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;
