const { Supplier } = require('./models');

const supplierData = [
  {
    name: 'Bakery and Dairy Supply Co.',
    supplying_category_id: [1, 4],
    cellphone: '+52 55 1234 5678',
    email: 'info@bakerysupply.com',
    location: 'Av. Insurgentes Sur #1234, Col. Condesa, CDMX',
    order_lead_time: '3 days',
  },
  {
    name: 'Green Fruity Leaf Produce',
    supplying_category_id: [2, 6],
    cellphone: '+52 55 5678 9012',
    email: 'info@greenleafproduce.com',
    location: 'Av. Toluca #567, Col. Roma, CDMX',
    order_lead_time: '2 days',
  },
  {
    name: 'Quality Meats Co.',
    supplying_category_id: 3,
    cellphone: '+52 55 2345 6789',
    email: 'info@qualitymeats.com',
    location: 'Av. Santa Fe #789, Col. Santa Fe, CDMX',
    order_lead_time: '5 days',
  },
  {
    name: 'Sauce Shop',
    supplying_category_id: 5,
    cellphone: '+52 55 7890 1234',
    email: 'info@sauceshop.com',
    location: 'Av. Patriotismo #456, Col. Escandón, CDMX',
    order_lead_time: '2 days',
  },
];

const seedSuppliers = () => Supplier.bulkCreate(supplierData);

module.exports = seedSuppliers;
