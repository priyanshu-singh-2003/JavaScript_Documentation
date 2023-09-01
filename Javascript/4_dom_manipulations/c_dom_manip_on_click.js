const mybtn = document.getElementById("idofb");


function display() {
  const newElement = document.createElement("h2");
  newElement.innerText = "clickeddd";
  document.body.prepend(newElement);
}
mybtn.onclick = display;
const del = document.getElementById("idofd");


function delrte() {
  const b = document.querySelector("h2");
  b.remove();
}
del.onclick=delrte;