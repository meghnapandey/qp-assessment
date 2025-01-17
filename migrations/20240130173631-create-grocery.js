"use strict";
const GroceryQuantityTypeEnum = require("../enums/grocery-quantity-type.enum");
const GroceryPriceTypeEnum = require("../enums/grocery-price-type.enum");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Groceries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      quantityInWareHouse: {
        type: Sequelize.INTEGER,
      },
      categoryId: {
        foreignKey: true,
        references: {
          model: "Categories",
          key: "id",
        },
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quantityType: {
        type: Sequelize.ENUM(Object.values(GroceryQuantityTypeEnum)),
      },
      priceType: {
        type: Sequelize.ENUM(Object.values(GroceryPriceTypeEnum)),
      },
      price: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Groceries");
  },
};
