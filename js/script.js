'use strict'
//function
//1
function showName () {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');

//2
showMessage();
function showMessage() {
	console.log('message');
}

//3
let showMessageThree = function () {
	console.log('message');
}
showMessageThree();

//4
if (2 > 1) {
	function showMessageFour() {
		console.log('message');
	}
	showMessageFour();
}


//масиви
//1
let arr = ['Ваня', 'Іштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);

//2
let users = ['Ваня', 'Іштван',];
users.push('Оля');
console.log(users);

let user = users.indexOf('Іштван');
console.log(user);

users.splice(user, 1, 'Петя');
console.log(users);

let removeEl = users.splice(0, 1);
console.log(removeEl);

users.splice(0, 0, 'Маша', 'Паша');
console.log(users);

//3
let arrTwo = ['Ваня', 'Іштван', 'Оля',];
let arrTwoUser = arrTwo.indexOf('Іштван');
console.log(arrTwoUser);
let removeElTwo = arrTwo.splice(1, 1);
console.log(removeElTwo);

//4
let str = 'Ваня,Іштван,Оля';
let arrThree = str.split(',');
console.log(arrThree);


//DOM
//1
const elementOne = document.querySelector('[data-say-hi]');
const dataOne = elementOne.getAttribute('data-say-hi');
console.log(dataOne);

//2
const elementTwo = document.querySelectorAll('.name');
console.log(elementTwo[1]);

//3
const elementThree = document.querySelectorAll('.like');
console.log(elementThree);

//4
const list = document.querySelector('.name-list');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Text</li>'
);

//scroll
//1
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);

const windowWidth = window.innerWidth;
console.log(windowWidth);
//дізнаємось доступну ширину вікна, ширину разом зі скролом, 
//віднімаємо і дізнаємось ширину скролу 
let scrollWidth = windowWidth - mainElementWidth;
console.log(scrollWidth);

//2
const myScroll = document.documentElement;
function scrollTop() {
	myScroll.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	});
}
setTimeout(scrollTop, 1000);

//3
//1-й елемент
const itemOne = document.querySelector('.answer-box__two');
const getItemOneLeft = itemOne.getBoundingClientRect().left;

console.log(getItemOneLeft);

const getItemOneTop = itemOne.getBoundingClientRect().top;
const getItemOneTopCoord = getItemOneTop + window.pageYOffset;

console.log(getItemOneTopCoord);

//2-й елемент

const itemTwo = document.querySelector('.page');
const getItemTwoLeft = itemTwo.getBoundingClientRect().left;

console.log(getItemTwoLeft);

const getItemTwoTop = itemTwo.getBoundingClientRect().top;
const getItemTwoTopCoord = getItemTwoTop + window.pageYOffset;

console.log(getItemTwoTopCoord);

//3-й елемент
const itemThree = document.querySelector('.name-list');
const getItemThreeLeft = itemThree.getBoundingClientRect().left;

console.log(getItemThreeLeft);

const getItemThreeTop = itemTwo.getBoundingClientRect().top;
const getItemThreeTopCoord = getItemThreeTop + window.pageYOffset;

console.log(getItemThreeTopCoord);

