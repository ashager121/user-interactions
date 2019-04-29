import "./styles.css";
let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon"
  },
  {
    completed: false,
    description: "Drop off wedding invitation at mailbox"
  }
];

renderTodoApp();

function renderTodoApp() {
  let html = `<ul class='todolist'>`;
  if (todos.length > 0) {
    html += todos
      .map(todo => {
        return `
        <li>
          <input type="checkbox" ${todo.completed && "checked"}/>
          ${todo.description}
        </li>
      `;
      })
      .join("");
    html += `</ul>`;
  } else {
    html += `<p>You have nothing to do</p>`;
  }
  document.getElementById("app").innerHTML = html;
}
//your code here
let btn = document.querySelector("#btn");
let inputField = document.querySelector("#inputField");

btn.addEventListener("click", renderToDo);
function renderToDo() {
  let newToDo = { description: inputField.value };

  todos.push(newToDo);

  renderTodoApp();
  inputField.value = "";
}
// console.log(todos);
