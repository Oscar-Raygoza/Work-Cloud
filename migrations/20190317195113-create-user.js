'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: { 
          isEmail: true
        }    
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      lastname: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      number: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      nickname: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      password_hash: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};