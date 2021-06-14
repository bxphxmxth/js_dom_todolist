let title = document.createElement("h1");
let titleText = document.createTextNode("My Todo-List");
title.appendChild(titleText)

document.body.appendChild(title)

let myInput = document.createElement("input");
myInput.setAttribute("class", "todo-input");
document.body.appendChild(myInput);

let btnSubmit = document.createElement("button");
btnSubmit.setAttribute("class", "todo-button fas fa-plus-square");
document.body.appendChild(btnSubmit);

let todoContainer = document.createElement("div");
todoContainer.setAttribute("class", "todo-container");
document.body.appendChild(todoContainer);
console.log(todoContainer);

let todoList = document.createElement("ul");
todoList.setAttribute("class","todo-list");
todoContainer.appendChild(todoList);
console.log(todoList);

//selectors

let toDoInput = document.querySelector(".todo-input");
let toDoButton = document.querySelector(".todo-button");
let toDoList = document.querySelector(".todo-list");


