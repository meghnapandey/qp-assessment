"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GroceryOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Grocery, { foreignKey: "groceryId" });
      this.belongsTo(models.Order, { foreignKey: "orderId" });
    }
  }
  GroceryOrder.init(
    {
      groceryId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "GroceryOrder",
    },
  );
  return GroceryOrder;
};
