define(function(require, exports, module) {

  var $ = require("jquery"),
      rivets = require("rivets"),
      Stapes = require("stapes"),
      AuctionController = require("../src/controller/AuctionController"),
      AuctionModel = require("../src/model/AuctionModel"),
      hogan = require("hogan"),
      template = hogan.compile(require("text!../src/tpl/template.mustache")),
      _container;

  //init our rivets binders/formatters
  require("../src/rivets/binders");
  require("../src/rivets/formatters");

  exports.init = function(containerID) {
    _container = $(containerID);
    _container.append(template.render());

    var auctionModel = new AuctionModel();
    AuctionModel.proto({title : "Cool Gear For Sale", color: "orange", image: {url:"http://i184.photobucket.com/albums/x98/salturfootwear/air%20max%201%20qs%20-%20white%20blue%20grey/airmax1qswhitebluegrey1.jpg"}});
    var controllerObject = new AuctionController();

    auctionModel.on({
      "change" : function(key) {
        this[key] = this.get(key);
        console.log('Something happened with ' + key);
      },
      "create" : function(key) {
        console.log("New attribute " + key + " added!");
      },
      "update" : function(key) {
        console.log("Attribute " + key + " was updated!");
      }
    });

    auctionModel.set({"amount": 500, "remaining": 10});

    rivets.bind($('#auction'), {
      auction: auctionModel,
      controller: controllerObject
    });
  };
});