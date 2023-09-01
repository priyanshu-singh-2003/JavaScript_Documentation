const title = document.getElementById("title");
const description = document.getElementById("description");
const container = document.querySelector(".container");
const form = document.querySelector("form");

// const tasks = [];//array of objects[{},{}] initially empty
const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
showalltasks();
function showalltasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    const innerdiv = document.createElement("div");
    div.append(innerdiv);
    const p = document.createElement("p");
    p.innerText = value.title;
    innerdiv.append(p);
    const span = document.createElement("span");
    span.innerText = value.description;
    innerdiv.append(span);
    const btn = document.createElement("button");
    btn.innerText = '-';
    btn.setAttribute("id", "minus");
    btn.addEventListener("click", () => {
      removeTask();
      tasks.splice(index, 1);
      localStorage.setItem("tasks",JSON.stringify(tasks));
      showalltasks();
    });
    div.append(btn);
    console.log(div);
    container.append(div);
    console.log("container");
  })
}
function removeTask() {
  tasks.forEach((value) => {
    const div = document.querySelector(".task");
    div.remove();
  })
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTask();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  localStorage.setItem("tasks",JSON.stringify(tasks));
  showalltasks();
})