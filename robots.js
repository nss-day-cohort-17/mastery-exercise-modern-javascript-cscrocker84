// A base Robot function

// Each type must have a unique property, for example, if it is aerial or ground based.
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health.
//--- For example, one model can have health range of 50-80,
//--- and another one will have a range of 60-120.
//--- To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// Give each robot model a different range of damage they do using the same technique.

let Battledome = {}

// A base Robot function

function Robot() {
   this.name = null;
   this.health = 80;
   this.attack = 50;
};
// Define three robot type functions ( Dalek, cybermen, imperial).
// <!-- Daleks will always win because they are of course supreme, cybermen next, droids last in health and damage -->

function Dalek() {
   this.class = "Dalek";
   this.health += 50;
   this.attack += 40;
};

Dalek.prototype = new Robot();


function Cybermen() {
   this.class = "Cybermen";
   this.health += 25;
   this.attack += 20;
};
Cybermen.prototype = new Robot();


function Droid() {
   this.class = "Droid";
   this.health += 10;
   this.attack += 10;
};
Droid.prototype = new Robot();
