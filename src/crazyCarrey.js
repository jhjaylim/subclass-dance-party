var makeCrazyCarrey = function(top, left, timeBetweenSteps) {
  debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="crazyCarrey"><img class = "crazyCarrey" src = "crazy carrey.gif" ></span>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeCrazyCarrey.prototype = Object.create(makeDancer.prototype);
makeCrazyCarrey.prototype.constructor = makeCrazyCarrey;

makeCrazyCarrey.prototype.oldStep = makeDancer.prototype.step;

makeCrazyCarrey.prototype.step = function() {
  // BlinkyDancer
  // call the old version of step at the beginning of any call to this new version of step
  // this is blinky dancer
  // console.log(this.oldStep);
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};
