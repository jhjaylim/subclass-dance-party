var makeDancingSpiderMan = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class = "dancingSpiderMan"><img class = "dancingSpiderMan" src = "dancing spiderman.gif" ></span>');
  this.setPosition(top, left);

};

makeDancingSpiderMan.prototype = Object.create(makeDancer.prototype);
makeDancingSpiderMan.prototype.constructor = makeDancingSpiderMan;
makeDancingSpiderMan.prototype.oldStep = makeDancer.prototype.step;

makeDancingSpiderMan.prototype.step = function() {

  this.$node.animate({opacity: "0.5"});
  this.oldStep();
  this.$node.animate({opacity: "1"});

};
