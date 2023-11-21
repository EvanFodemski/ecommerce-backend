// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    //DEfines Product ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
   //Defines Product name
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //Defines Product Price
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal:true
      }
    },
   //Defines stock of product
    stock: {
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10,
      validate: {
        isNumeric: true
      }
    },
    //What category the product is in
    category: {
      type: DataTypes.INTEGER,
      references: {
        model:"category",
        key: "id"
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;