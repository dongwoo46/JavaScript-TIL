const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText ="X";
  button.addEventListener("click",(event)=>{
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id!==parseInt(li.id));
    saveToDos();
    
  })
  li.appendChild(span);
  li.appendChild(button);
  span.innerText= newTodo.text;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
  
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

