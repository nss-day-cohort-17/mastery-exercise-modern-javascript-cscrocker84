// create variables for robot 1 & 2
// create variables for both robot names
console.log("hello")

let robot1;
let robot2;
let robot1name;
let robot2name;

//page navigation
// start with the home screen
showHomeScreen();

//all event listeners/activateEvents()
function activateEvents () {
// proceed to robot naming on click of link
   $('#enter').click(function() {
         showNameBots();
   });

   // proceed to robot selection on link click
   $('#selectBot').click(function() {
      robot1name = $('#bot1name').val();
      robot2name = $('#bot2name').val();
      // cannot continue without naming robots
      if ($('#bot1name').val() === "" || $('#bot2name').val() === "") {
         alert("You Will Identify Yourself or be Exterminated!")
      } else {
         selectBots();
      }
   });

   // generate robot1 to be displayed under the selection bar
   $('#select1').change( function(e) {
      let z = e.target.value
      robot1 = new Battledome[z](robot1name);
      $('#showBot1Type').html(z);
   });

    // generate robot2 to be displayed under the selection bar
      $('#select2').change( function(e) {
      let z = e.target.value
      robot2 = new Battledome[z](robot2name);
      $('#showBot2Type').html(z);
   });

 // proceed to battleField
   $('#battleFieldLink').click( function() {
      if ( robot1 === undefined || robot2 === undefined ) {
         alert("You Will Identify Your Type or be Exterminated!");
      } else {
         battleField();
      }
   });
}

// attack button
   $('#attack').click( function() {
      gamePlay();
   });

   // return to home screen on click
   $('#playAgain').click(function () {
      robot1 = undefined;
      robot2 = undefined;
      showHomeScreen();
   });



activateEvents();

//functions for each page to hide each one on the click and some timing to create an effect on page turn
// clear all HTML elements on each "page turn"
function reSet () {
  $('section').addClass('hidden');
}

// show just the elements and styling of each "page"
function showHomeScreen() {
   reSet();
   $('#homeScreen').fadeIn(3000).removeClass('hidden');
   $('body').addClass('homeScreen');
}

function showNameBots() {
   reSet();
   $('#nameBots').removeClass('hidden');
   $('body').addClass('nameBots');
}

function selectBots() {
   reSet();
   $('#selectBots').removeClass('hidden');
   $('body').addClass('selectBots');
   // populate given names above select tabs
   $('#selectBot1').text($('#bot1name').val());
   $('#selectBot2').text($('#bot2name').val());
}

function battleField() {
   reSet();
   $('#battleField').removeClass('hidden');
   $('body').addClass('battleField');
}

function gameOver() {
   reSet();
   $('#gameOver').removeClass('hidden');
   $('body').addClass('gameOver');
}



// ------- function for back-and-forth damage hits -------
function gamePlay() {
   damage1()
   if (robot2.health <= 0) {
      robot1wins();
   } else {
      setTimeout(damage2, 1000);
   }
   if (robot1.health <= 0) {
      robot2wins();
   }
}


// --------- functions for the two different outcomes ------
function robot1wins() {
   gameOver();
   $('#outcome').html(`
                  <h1>${robot1.name} defeated ${robot2.name} with ${robot1.weapon}</h1>
                  `)
}

function robot2wins() {
   gameOver();
   $('#outcome').html(`
                  <h1>${robot2.name} defeated ${robot1.name} with ${robot2.weapon}</h1>
                  `)
}




//effects on page change, maybe time delay or some type of card manipulation
//functions for each page
//functions for attack, registering damage, and determining the winner
