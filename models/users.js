const User = sequelize.define('users', {
    id: {type: Sequelize.SMALLINT, primaryKey: true},
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    pass: Sequelize.STRING,
})