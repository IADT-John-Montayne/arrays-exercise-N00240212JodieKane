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



//Excercise Fruit Basket Manager Tasks 
let basket = ['apple', 'banana', 'orange', 'pear'];

//Read from the array

//log the first fruit
console.log(basket[0]);

//log the last fruit use length
console.log(basket.length); 
console.log(basket.indexOf('pear'));
console.log('The last fruit in the console/basket is '  +basket[3]);

//Modify the basket

//replace banana with kiwi
basket[1] = 'kiwi';
console.log(basket)

//remove the last fruit
basket.pop();
console.log(basket);

//add mango to the start of the array
basket.unshift('mango');
console.log(basket);

//loop through the basket
for (let i = 0; i < basket.length; i++) {
	console.log('Fruit ' + i + ': ' + basket[i]) // + i + gives the number of which number belongs to which fruit
}

//Search for a fruit
console.log(basket.indexOf('orange')); //Orange is 3

//If it exists or does not exist
if (basket.indexOf('orange' === 3)) { //Since its 3 it will be orange if not it will not exist 
	console.log('There is an orange in the basket');} else {
		console.log ('There is no existing orange unfortunately')
	} //The if else statement

//Copy part of any basket
let citrus1 = basket.splice(0, 3);
console.log(citrus1);

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
