$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node.mouseover(function(event) {

      var myParse = parseInt(dancer.$node.css('border'));
      dancer.$node.css('border-width', (myParse+20).toString()+"px" );
      dancer.$node.css('border-radius', (myParse+20).toString()+"px" );

    });

    dancer.$node.mouseleave(function(event) {

      var myParse = parseInt(dancer.$node.css('border'));
      dancer.$node.css('border-width', (myParse-20).toString()+"px" );
      dancer.$node.css('border-radius', (myParse-20).toString()+"px" );

    });

    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    var distBtwnDancers = $("body").width() / window.dancers.length;
    var startPosition = 0;
    window.dancers.forEach(function (dancer) {
      startPosition += distBtwnDancers;
      dancer.lineUp($("body").height() / 2, startPosition );
    });
  });

  $('.addCrazyCarrey').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node.mouseover(function(event) {
      $(dancer.$node[0].firstChild).css('width', "+=100" );
    });

    dancer.$node.mouseleave(function(event) {
      $(dancer.$node[0].firstChild).css('width', "-=100" );
    });

    window.dancers.push(dancer);

  });


  $('.addDancingSpiderMan').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    dancer.$node.mouseover(function(event) {
      $(dancer.$node[0].firstChild).css('width', "+=100" );
    });

    dancer.$node.mouseleave(function(event) {
      $(dancer.$node[0].firstChild).css('width', "-=100" );
    });

    window.dancers.push(dancer);

  });

});
