
// A base Robot function

// Each type must have a unique property, for example, if it is aerial or ground based.
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health.
//--- For example, one model can have health range of 50-80,
//--- and another one will have a range of 60-120.
//--- To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// Give each robot model a different range of damage they do using the same technique.
console.log("hello")
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

// <!-- Each has 2 classes; dalek- cult of skaro or supreme council
//      					cybermen; cyber leader or cyber soldier
//      					probe droid; weak or even weaker -->
// Each type must have a unique property/weapon using the math.random() function


Battledome.Scarro = function (x) {
	this.name = x;
	this.type = "Scarro";
	this.health = this.health += randomNum(20, 30);
	this.attack = this.attack += randomNum(30, 50);
	this.weapon = "Main Dalek Cannon";
}
Battledome.Scarro.prototype = new Dalek();

Battledome.Council = function (x) {
	this.name = x;
	this.type = "Council";
	this.health = this.health += randomNum(30, 60);
	this.attack = this.attack += randomNum(40, 60);
	this.weapon = "Superior Dalek Intellect";
}
Battledome.Council.prototype = new Dalek();

Battledome.Soldier = function (x) {
	this.name = x;
	this.type = "Soldier";
	this.health = this.health += randomNum(15, 20);
	this.attack = this.attack += randomNum(15, 20);
	this.weapon = "Hand Blaster";
}
Battledome.Soldier.prototype = new Cybermen();

Battledome.Leader = function (x) {
	this.name = x;
	this.type = "Leader";
	this.health = this.health += randomNum(15, 25);
	this.attack = this.attack += randomNum(20, 28);
	this.weapon = "Hand Flamethrower";
}
Battledome.Leader.prototype = new Cybermen();

Battledome.Weak = function (x) {
	this.name = x;
	this.type = "Weak";
	this.health = this.health += randomNum(10, 15);
	this.attack = this.attack += randomNum(10, 20);
	this.weapon = "Jedi Fodder";
}
Battledome.Weak.prototype = new Droid();

Battledome.Weaker = function (x) {
	this.name = x;
	this.type = "Weaker";
	this.health = this.health += randomNum(5, 10);
	this.attack = this.attack += randomNum(5, 10);
	this.weapon = "";
}
Battledome.Weaker.prototype = new Droid();
