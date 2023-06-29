const { DataTypes } = require('sequelize');

//es una funcion, recibe la instancia de sequelize
module.exports = (sequelize) => {
   sequelize.define('User', {  //define es un metodo para definir la tabla, user es el nombre de la tabla. En el objeto se definnen los atributos
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      }, 
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, 
   { timestamps: false });
};
  