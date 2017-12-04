// JS Scope Homework
//
// Go through each sample code and work out what the output will be and explain what happened.
//
// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//My name is Keith, a function has been defined and a variable has been defined, the function prints
//a string + the variable.


// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

//A variable has been defined with a number and a function has been defined
//The function changes the value of the variable to 3 and prints this result.
//Result = 3

// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//An array of animals has been defined and a function has been created
//the function loops through  the array and each time it prints a hash with the index as a key
//and the animal as a value.
//0:Ducks
//1:Dogs
//2:Lions

// Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//Four variables with  four names have been declared and the function 'allSuspets' changes
// suspectThree to Harvey prints
//all the suspects by accessing the variables.
//The last log prints the third suspect.

// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//An object detective has been created with a name and a pet.
//There's a printName function that doesn't log anything but return the name of the detective.
//The function detectiveInfo is changing the name of the detective to Poirot.
//The log takes what the function detectiveInfo returns which is the new name
// of the detective which will always be Poriot.

// Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// A variable murder with the name 'rick' has been created and a function sets its name to 'marc'
//But then it has another function inside that changes its name once again to 'valerie'.
//The log will print ''the murderer is valerie''.

// Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var police = 'woop woop'
var arrested = []
var murderer = 'rick';

var arrest = function() {
 arrested.push(murderer);
 console.log(police);

 var showArrested = function () {
   for (var person of arrested) {
    console.log(person);
   }
 }
}
