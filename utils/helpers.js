const Handlebars = require('handlebars');

Handlebars.registerHelper('subtract', function(a, b) {
  const result = a - b;
  return result >= 0 ? result : 0;
});

module.exports = {
  capitalizeFirstLetter: function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};

Handlebars.registerHelper('toFixed', function(value, decimals) {
  return parseFloat(value).toFixed(decimals);
});

