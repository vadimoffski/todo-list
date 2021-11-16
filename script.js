// get start
const btnStart = document.querySelector(".space-title");
const todo = document.querySelector(".todos-wrapper");
const closeTodoBtn = document.querySelector(".closeTodo");

btnStart.addEventListener("click", startFunc);
function startFunc() {
  btnStart.classList.add("remove");
  todo.classList.remove("remove");
}
closeTodoBtn.addEventListener("click", closeList);
function closeList() {
  btnStart.classList.remove("remove");
  todo.classList.add("remove");
}

//todo
const addTaskBtn = document.querySelector(".add-task-btn");
const inputTask = document.querySelector(".todos-input");
const todosTasks = document.querySelector(".todos-tasks");
let tasks;
tasks = !localStorage.tasks
  ? (tasks = [])
  : JSON.parse(localStorage.getItem("tasks"));

let todoItemElems = [];

function Task(desc) {
  this.desc = desc;
  this.completed = false;
}

const createTemplate = (task, index) => {
  return `<div class="todo-item ${task.completed ? "checked" : ""}">
            <div class="desc ">${task.desc}</div>
                <div class="buttons">
                    <input onClick="completeTask(${index})" type="checkbox" class="btn-complete" ${
    task.completed ? "checked" : ""
  }/>
                    <button onClick="deleteTask(${index})" class="btn-delete">X</button>
                </div>
            </div>`;
};

const filterTasks = () => {
  const activeTasks =
    tasks.length && tasks.filter((item) => item.completed === false);
  const completedTasks =
    tasks.length && tasks.filter((item) => item.completed === true);
  tasks = [...activeTasks, ...completedTasks];
};

const fillHtmlList = () => {
  todosTasks.innerHTML = "";
  if (tasks.length > 0) {
    filterTasks();
    tasks.forEach((item, index) => {
      todosTasks.innerHTML += createTemplate(item, index);
    });
    todoItemElems = document.querySelectorAll(".todo-item");
  }
};
fillHtmlList();

const updateLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const completeTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  if (tasks[index].completed) {
    todoItemElems[index].classList.add("checked");
  } else {
    todoItemElems[index].classList.remove("checked");
  }
  updateLocal();
  fillHtmlList();
};

const deleteTask = (index) => {
  todoItemElems[index].classList.add("delition");
  setTimeout(() => {
    tasks.splice(index, 1);
    updateLocal();
    fillHtmlList();
  }, 500);
};

addTaskBtn.addEventListener("click", () => {
  if (inputTask.value) {
    tasks.push(new Task(inputTask.value));
    updateLocal();
    fillHtmlList();
    inputTask.value = "";
  } else {
    alert("Enter your task pls...");
  }
});
