const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection.js');
// const Product = require('./Product');

class Category extends Model {}

Category.init(
  {
    // Defines Category ID
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //Defines Category Name
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);





module.exports = Category;