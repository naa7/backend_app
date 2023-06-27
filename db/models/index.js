const Shoes = require('./shoes');
const Shopper = require('./shopper');

// Associations go here

// Many To Many
// We set a through table "ShopperShoes" that handles many to many relationship
Shopper.belongsToMany(Shoes, {through: 'ShopperShoes'});
Shoes.belongsToMany(Shopper, {through: 'ShopperShoes'});

module.exports = {
    Shoes,
    Shopper,
};