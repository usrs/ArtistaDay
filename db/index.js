const Sequelize = require('sequelize')

// const sequelize = new Sequelize("mysql://by0u4tt1ofjlcql6:pbkcojf3iq4mqeke@sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mkebp7xudb9ubut5", {
//     dialect: "postgres",
//     protocol: "postgres",
//     logging: true //false
//   });


const sequelize = new Sequelize(process.env.JAWSDB_URL || process.env.LOCAL_URL)


module.exports = sequelize

