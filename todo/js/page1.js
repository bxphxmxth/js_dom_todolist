let title = document.createElement("h1");
let titleText = document.createTextNode("ðð¢ð° ð®ð²Ãªð±ð¢ð° ");
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


//Event Listeners


toDoButton.addEventListener("click", (e) =>{
    //Console log 2 see if ca fonctionne
    // console.log(e.target);
    // Ajouter div Ã  chaque clic
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    document.body.appendChild(todoDiv)
    // Pour crÃ©er les LI Ã  chaque clic
    let newTodo = document.createElement("li");
    newTodo.innerText = toDoInput.value
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)
    console.log(newTodo);
    //Check bouton
    let completedButton = document.createElement("button");
    completedButton.innerText = "V";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)
    // Delete bouton
    let trashButton = document.createElement("button");
    trashButton.innerText = `D`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Pour clear la valeur de l'input 
    toDoInput.value = "";
    // rename Button
    let renameButton = document.createElement("button");
    renameButton.innerText = `R`;
    renameButton.classList.add("rename-btn");
    todoDiv.appendChild(renameButton)



})
// Meme code pour la touche "enter"
document.body.addEventListener("keyup", (event) =>{
    let name = event.key;
  if (name === 'Enter') {
     //Console log 2 see if ca fonctionne
    // console.log(e.target);
    // Ajouter div Ã  chaque clic
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    document.body.appendChild(todoDiv)
    // Pour crÃ©er les LI Ã  chaque clic
    let newTodo = document.createElement("li");
    newTodo.innerText = toDoInput.value
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)
    console.log(newTodo);
    //Check bouton
    let completedButton = document.createElement("button");
    completedButton.innerText = "V";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)
    // Delete bouton
    let trashButton = document.createElement("button");
    trashButton.innerText = `D`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)
    // Pour clear la valeur de l'input 
    toDoInput.value = "";
    // rename boutton
    let renameButton = document.createElement("button");
    renameButton.innerText = `R`;
    renameButton.classList.add("rename-btn");
    todoDiv.appendChild(renameButton)

  }
}, false);

// Supprimer TODO

document.body.addEventListener("click",(e) =>{

    let item = e.target;
    if(item.classList[0] === "trash-btn"){
        let todo = item.parentElement;

        // Animation
        
        todo.classList.add("fall");
        todo.addEventListener("transitionend", ()=>{
            
            todo.remove()
        })
       
    }
})
    
// rename fonction 

let todoDiv =document.getElementsByTagName("div")[1];
// console.log(todoDiv);



document.body.addEventListener("click", (e)=>{
    console.log(e.target);
    if(e.target.innerText === "R"){

       let modif = prompt("ðð¬ð¡ð¦ð£ð¦ð¢ ð©ð¢ ð ð¬ð«ð±ð¢ð«ð²");
       let newLi = e.target.parentElement.firstElementChild;
       console.log(newLi);
        newLi.innerText = modif;

    }
})


//TODO done
let todo;


document.body.addEventListener("click",(e) =>{

    let item = e.target;
    if(item.classList[0] === "complete-btn"){
        todo = item.parentElement;
        
        console.log(todo);
        todo.classList.toggle("completed");
        todo.classList.toggle("test");

        
    }
})
    


// creation 3 btn 

let div3btn = document.createElement("div");
div3btn.setAttribute("class","div3btn");
document.body.append(div3btn)


let btnAll = document.createElement("button");
btnAll.innerText ="All";
btnAll.setAttribute("class","button1")
div3btn.appendChild(btnAll)


let btnDone = document.createElement("button");
btnDone.innerText ="Done";
btnDone.setAttribute("class","button1")

div3btn.appendChild(btnDone)

let btnToDo = document.createElement("button");
btnToDo.innerText ="To Do";
btnToDo.setAttribute("class","button1")

btnAll.setAttribute("class","button1")

div3btn.appendChild(btnToDo)

// fonction Ã  faire TO DO

let tabComplete;
let tabTest;

btnToDo.addEventListener("click", () =>{
        tabComplete = Array.from(document.getElementsByClassName("completed"));
        tabComplete.forEach(element => {
            element.style.display = "flex"
        });
        tabTest = Array.from(document.getElementsByClassName("test"));
        tabTest.forEach(element => {
            element.style.display = "none"
        });
        
 })

// fonction all 

btnAll.addEventListener("click", () =>{
    tabComplete = Array.from(document.getElementsByClassName("completed"));
    tabComplete.forEach(element => {
        element.style.display = "flex"
    });
    tabTest = Array.from(document.getElementsByClassName("test"));
    tabTest.forEach(element => {
        element.style.display = "flex"
    });
    
})


// fonction done  A REFAIRE

btnDone.addEventListener("click", () =>{
    tabComplete = Array.from(document.getElementsByClassName("completed"));
    tabComplete.forEach(element => {
        element.style.display = "none"
    });
    tabTest = Array.from(document.getElementsByClassName("test"));
    tabTest.forEach(element => {
        element.style.display = "flex"
    });
    
})

let btnClear = document.createElement("button");
btnClear.innerText = "Clear";
btnClear.setAttribute("class","button1");
div3btn.appendChild(btnClear);
console.log(btnClear);

btnClear.addEventListener("click", () =>{

    tabComplete.forEach(element => {
        element.remove();
    });
    
    

    let tabtoDo = Array.from(document.getElementsByClassName("todo"));
    tabtoDo.forEach(element => {
        element.remove();
        
        
    });

    alert("ðð¶ð¢ð· ð¤ð¢ð«ð±ð¢ ð¡ððªð¬ð¦ð°ð¢ð©ð©ð¢, ð¤ð¢ð«ð±ð¢ ð¡ððªð¬ð¦ð°ð¢ðð²ðµ. ðð¬ð²ð° ðð³ð¢ð· ðð ð ð¬ðªð­ð©ð¦ð¢ ð±ð¬ð²ð±ð¢ ð³ð¬ð° ð®ð²Ãªð±ð¢ð° ðð³ð¢ð  ð­ð¯ð¢ð°ð±ð¦ð¤ð¢. ðð¢ ð³ð¬ð²ð° ðð ð ð¬ð¯ð¡ð¢ ðªð ðÃ©ð«Ã©ð¡ð¦ð ð±ð¦ð¬ð« ð­ð¬ð²ð¯ ð¯ð¢ð±ð¬ð²ð¯ð«ð¢ð¯ ð³ðð®ð²ð¢ð¯ Ã  ð³ð¬ð° ð¬ð ð ð²ð­ðð±ð¦ð¬ð«ð°")
    
});


// Creation select 


// let divSelect = document.createElement("div");
// let select = document.createElement("select");
// select.setAttribute("name","todos");
// select.setAttribute("class", "filter-todo")
// console.log(select);
// //all
// let option1 = document.createElement("option");
// option1.setAttribute('value',"all")
// option1.innerText ="All";
// //Commplet
// let option2 = document.createElement("option");
// option2.setAttribute('value',"completed")
// option2.innerText ="Completed";
// //uncompleted
// let option3 = document.createElement("option");
// option3.setAttribute('value',"uncompleted")
// option3.innerText ="Uncompleted";




// divSelect.appendChild(select);
// select.appendChild(option1);
// select.appendChild(option2);
// select.appendChild(option3);
// console.log(select);
// console.log(divSelect);

// document.body.appendChild(divSelect)




// let renameButton = document.createElement("button");
//     renameButton.innerText = `R`;
//     renameButton.classList.add("rename-btn");
//     todoDiv.appendChild(renameButton)




// fonction du select

// let filterOption = document.querySelector(".filter-todo")

// console.log(filterOption);


// filterOption.addEventListener("click",(e) =>{
//     console.log(e.target.value);
//     if (e.target.value =="all"){
//         let todos = todoList.childNodes;

//         todos.style.display= 'flex'
//     }else if (e.target.value =="completed"){
//         // alert("sgggg");

//         filterOption.value == "completed";
//     }

    
// })

// console.log(toDoList);

// filterOption.addEventListener("click", filterTodo)


// function filterTodo(e) {
//     let todos = toDoList.childNodes;
//     console.log(todos);
//     todos.forEach(function(todo){
//         switch(e.target.value){
//             case "all":
//                 todo.style.display ="flex";
//                 break;
//             case "completed":
//                 if(todo.classList.contains("completed")){
//                     todo.style.display ="flex";
//                 }else{
//                     todo.style.display = "none";
//                 }    
//         }
//     })
// }



// document.body.addEventListener("click",(e) =>{

//     let item = e.target;
//     if(item.classList[0] === "complete-btn"){
//         let todo = item.parentElement;
//         console.log(todo);
//         todo.classList.toggle("completed")
        
//     }
// })
 

