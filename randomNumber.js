
// function for generating a random number between arguments x and y
// function for generating an attack when button is pressed
// function to console the results of each hit

function randomNum(x, y) {
   let z = Math.floor((Math.random() * (y - x)) + x + 1);
   return z;
}
