define(function(require, exports, module) {
  var Stapes = require("stapes");

  return new Stapes.subclass({
    colors: ['red','blue','green','yellow','orange','black','grey','purple'],
    constructor : function() {
      /*setInterval(function() {
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      }.bind(this), 500);*/
    }
  });
});