var makeCrazyCarrey = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class = "crazyCarrey"><img class = "crazyCarrey" src = "crazy carrey.gif" ></span>');
  this.setPosition(top, left);

};

makeCrazyCarrey.prototype = Object.create(makeDancer.prototype);
makeCrazyCarrey.prototype.constructor = makeCrazyCarrey;
makeCrazyCarrey.prototype.oldStep = makeDancer.prototype.step;

makeCrazyCarrey.prototype.step = function() {

  this.$node.animate({left: "-=100"});
  this.oldStep();
  this.$node.animate({left: "+=100"});

};
