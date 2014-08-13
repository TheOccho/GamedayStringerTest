define(function(require, module, exports) {
  var rivets = require("rivets");

  rivets.binders.color = function(el, value) {
    el.style.color = value;
  }
});