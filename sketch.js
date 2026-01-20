let names = ['John', 'David', 'Mary'] //Shows all names
console.log(names);

names[1]='Brian'; //changes David to Brian
console.log(names);

names.push('Michael'); //Adds Michael TO THE END of the array 
console.log(names);
console.log(names.length); //Shows length and how many in the array

//Finding Items
console.log(names.indexOf('John')); //Finds where Johns name is

let colours = ['red', 'purple', 'cyan']
console.log(colours);

//Loop
let fruits = ['strawberry', 'blueberry', 'banana' ,'apple'];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]) //Keeps looping the array until it reaches 2
}

//Another Way to loop
for (let fruit1 of fruits) {
      console.log(fruit1);
}

//splice
let citrus = fruits.splice(0, 3); 
console.log(citrus);

//shift
let fruit = ['strawberry', 'blueberry', 'orange' ,'apple'];
fruit.shift(); //This will remove strawberry from the array the first one
console.log(fruit); 

//pop
fruit.pop(); //This will remove apple from the array the last one
console.log(fruit);





function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
