describe('crazyCarrey', function() {

  var crazyCarreyDancer, clock;
  var timeBetweenSteps = 100;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crazyCarreyDancer = new makeCrazyCarrey(10, 20, timeBetweenSteps);
  });

  it('should have a step function that makes its node move horizontally', function() {

    sinon.spy(crazyCarreyDancer.$node, 'animate');
    crazyCarreyDancer.step();
    expect(crazyCarreyDancer.$node.animate.called).to.be.true;
  });

});
