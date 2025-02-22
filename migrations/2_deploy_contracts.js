const StockTransaction = artifacts.require("StockTransaction");

module.exports = function (deployer) {
  deployer.deploy(StockTransaction);
};
