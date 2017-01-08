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
      robot1 = new Battledome[z](robot1name);
      $('#showBot1Type').html(z);
   });

 // proceed to battleField
   $('#battleFieldLink').click( function() {
      if ( robot1 === undefined || robot2 === undefined ) {
         alert("mUsT sELecT rOboT tYpEs");
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

}

activateEvents();

//functions for each page to hide each one on the click and some timing to create an effect on page turn






//effects on page change, maybe time delay or some type of card manipulation
//functions for each page
//functions for attack, registering damage, and determining the winner
