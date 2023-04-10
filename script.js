//Arrays Add Todo List
const todoList = [{
  name:'get food',
  dueDate: '2032-23-11'
}, {
  name: 'get water',
  dueDate: '2023-02-11'
}];
renderTodoList();
function renderTodoList() {

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  //const name = todoObject.name;
  //const dueDate = todoObject.dueDate;
          //alternative 
  const { name, dueDate } = todoObject;
  let html = `
  <div>${name} </div>
    <div>${dueDate}</div>
     <button onclick="
     todoList.splice(${i}, 1);
     renderTodoList();
    " class="delete-button">Delete</button>
    `;
  todoListHTML += html;
}
document.querySelector('.todos').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.todo-name');
  const name = inputElement.value;
  const dateSelected = document.querySelector('.date');
  const dueDate = dateSelected.value;
  todoList.push({
    //name: name,
    //dueDate: dueDate
        //alternative
    name,
    dueDate
  });
  console.log(todoList);
  inputElement.value = '';
  renderTodoList();
}
//DOM Projects

// subscribe button
const subscriber = () => {
const button = document.querySelector('.js-subscribe-button');
if ( button.innerText === 'Subscribe') {
button.innerText = 'Subscribed';
} else {
button.innerText = 'Subscribe';
}
}

// heads and tails game
function showResult() {
let randomNumber = Math.random();
const num = randomNumber < 0.5 ? 'heads' : 'tails'
let result = num;
document.querySelector('.show-result').innerHTML = num;
}

// greetings
const d = new Date();
let hour = d.getTime();
let name = "";

function clickMe() {
  name = prompt('What is your name: ')
  if(hour >= 6 && hour <= 12){
    document.querySelector('.greetings').innerHTML = `Goood morning ${name}! You are welcome!`
  } else if(hour >= 13 && hour <= 17) {
   document.querySelector('.greetings').innerHTML = `Good afternoon ${name}! You are welcome!`
  } else  {
    document.querySelector('.greetings').innerHTML = `Good evening ${name}! You are welcome!`
  }; 
}

// qaulify for discount
function getDiscount() {
  let getAge = document.querySelector('.get-age');
  let age = getAge.value;
const isHoliday = false;
if ((age <= 5 || age >= 66) && !isHoliday) {
 document.querySelector('.show-discount').innerHTML = 'You will get discount';
} else {
  document.querySelector('.show-discount').innerHTML = 'You will not get discount';
}
}

// greetings on 'condition' with functions   
/*   
const greet = (name) => {
  let condition = !name ?  console.log('Hi there') :  console.log(`Hello ${name}!`);
}
greet('John');


// convert to fahrenheit(celsius)
const convertToFahrenheit = (celsius, fahrenheit, unit1, unit2) => {
  console.log((celsius * 9/5) + 32 + unit1);
  console.log((fahrenheit - 32) * 5/9 + unit2);
}
convertToFahrenheit(25, 86, 'F', 'C');

// objects
const basketBall = {
  name: 'basketball',
  price: 2095
}
basketBall.price = 2095 + 500;
basketBall['delivery-time'] = '3 days';
console.log(basketBall);
const product1 = {
name: 'water',
price: 3.
}

const product2 = {
name: 'food',
price: 6
}
console.log(product1.price > product2.price);

const comparePrice = () => {
if (product1.price > product2.price) {
console.log('product2');
} else {
console.log('product1');
}
}
comparePrice();
*/