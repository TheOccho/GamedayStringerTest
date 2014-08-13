define(function(require, module, exports) {
  var rivets = require("rivets");

  rivets.formatters.currency = {
    read: function(value) {
      return "$"+(value / 100).toFixed(2);
    },
    publish: function(value) {
      return Math.round(parseFloat(value.substr(1)) * 100);
    }
  }
});