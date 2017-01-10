
// function for generating a random number between arguments x and y
// function for generating an attack when button is pressed
// function to console the results of each hit

function randomNum(x, y) {
   let z = Math.floor((Math.random() * (y - x)) + x + 1);
   return z;
}

function damage1() {
   $('#robot1stats').html(`
            <h2>${robot1.name}</h2>
            <h3>Baddie Type: ${robot1.type}</h3>
            <h2>Health: ${robot1.health}</h2>
      `);
   let p = randomNum( (robot1.attack/8), (robot1.attack/4) );
   robot2.health -= p
   $('#update').append(`
            <p class="text-left">${robot1.name} hit ${robot2.name} for a loss of ${p} damage points</p>
      `);
   console.log("robot2 health: ", robot2.health);
};

function damage2() {
   $('#robot2stats').html(`
            <h2>${robot2.name}</h2>
            <h3>Baddie Type: ${robot2.type}</h3>
            <h2>Health: ${robot2.health}</h2>
      `);
   let q = randomNum( (robot2.attack/8), (robot2.attack/4) );
   robot1.health -= q
   $('#update').append( `
            <p class="text-right">${robot2.name} hit ${robot1.name} for a loss of ${q} damage points</p>
      `);
   console.log("robot1 health: ", robot1.health);
};
