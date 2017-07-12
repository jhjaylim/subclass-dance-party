
describe('dancingSpiderMan', function() {
  var spiderManDancer, clock;
  var timeBetweenSteps = 100;
  beforeEach(function() {
    console.log('hello');
    clock = sinon.useFakeTimers();
    spiderManDancer = new makeDancingSpiderMan(10, 20, timeBetweenSteps);
  });

  it('should have a step function that makes its opacity change', function() {
    sinon.spy(spiderManDancer.$node, 'animate');
    spiderManDancer.step();
    expect(spiderManDancer.$node.animate.called).to.be.true;
  });
});
