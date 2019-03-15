'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id_user: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};