'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.TEXT,
    name:  DataTypes.TEXT,
    lastname:  DataTypes.TEXT,
    number: DataTypes.TEXT,
    nickname: DataTypes.TEXT,
    password_hash: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};