const db = require('./db');
const { Shoes, Shopper } = require('./db/models');

const seedShoes = [
    {company:"Nike", type: "Jordan 5's", laces: true, size:10},
    {company:"Adidas", type: "Yeezy 350", laces: true, size:7},
    {company:"Crocs", type: "Crocodillio's", laces: false, size:12},
    {company:"New Balance", type: "550's", laces: true, size:6},
    {company:"BirkenStock", type: "sandals", laces: false, size:13},
];

const seedShoppers = [
    {firstName: "Deepak", lastName: "Borhora", size: 13},
    {firstName: "Abi", lastName: "Scholz", size: 8},
    {firstName: "Rahima", lastName: "Khabibulllaeva", size: 7},
    {firstName: "Sabina", lastName: "Ismailova", size: 8},
    {firstName: "Elaine", lastName: "Luzung", size: 10},
    {firstName: "Miranda", lastName: "Karecho", size: 5},

];

const seed = async () => {
    await Shoes.bulkCreate(seedShoes);
    await Shopper.bulkCreate(seedShoppers);
};

seed().then(() => {
    process.exit();
});
