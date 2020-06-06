const Sequelize = require('sequelize')

// const LOCAL_URL = 'mysql://root:rootroot@localhost:3306/artistaday_db'

// const sequelize = new Sequelize(process.env.JAWSDB_URL || process.env.LOCAL_URL)


const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/artistaday_db')

module.exports = sequelize

