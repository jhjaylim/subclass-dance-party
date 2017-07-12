var makeDancingSpiderMan = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class = "dancingSpiderMan"><img class = "dancingSpiderMan" src = "dancing spiderman.gif" ></span>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeDancingSpiderMan.prototype = Object.create(makeDancer.prototype);
makeDancingSpiderMan.prototype.constructor = makeDancingSpiderMan;

makeDancingSpiderMan.prototype.oldStep = makeDancer.prototype.step;

makeDancingSpiderMan.prototype.step = function() {
  // BlinkyDancer
  // call the old version of step at the beginning of any call to this new version of step
  // this is blinky dancer
  // console.log(this.oldStep);
  this.$node.animate({opacity: "0.5"});
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.animate({opacity: "1"});

  //this.$node.slideToggle();
};
// makeDancingSpiderMan.prototype.setPosition = function(top, left) {
//
//   var distFromTop = top;
//   var distFromBottom = $('body').height()-top;
//   var distFromLeft = left;
//   var distFromRight = $('body').width()-left;
//
//   var distanceArray = [distFromTop, distFromBottom, distFromLeft, distFromRight];
//
//
//   var minimum = Math.min(distanceArray[0], distanceArray[1], distanceArray[2], distanceArray[3]);
//   var index = distanceArray.indexOf(minimum);
//   debugger;
//   if (index===0) {
//     this.styleSettings.top = 0;
//   } else if (index===1) {
//     this.styleSettings.top = $('body').height()-top-200;
//   } else if (index===2) {
//     this.styleSettings.left = 0;
//   } else if (index===3) {
//     this.styleSettings.left = $('body').width()-left-200;
//   }
//   debugger;
//   var stype = this.styleSettings;
//
//   this.$node.css(this.styleSettings);
//
//
//   // if found minimum,
//     // fromtop override top 0
//     // from bot
//     //from left
//     //from right
//
//
// };
