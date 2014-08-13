define(function(require, module, exports) {
  var Stapes = require("stapes");

  return new Stapes.subclass({
    constructor : function() {},
    bid: function(e) {
      alert("i placed a bid");
    }
  });
});