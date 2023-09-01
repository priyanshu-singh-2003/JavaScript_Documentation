console.log(document.head);
console.log(document.body);
console.log(document.body.firstChild);
console.log(document.body.childNodes);
console.log(document.body.children);//NOT AN ARRAY
//to make this an array
const a = document.body.children;
const arr = Array.from(a);
console.log(arr);
console.log(document.documentElement);//full html tag
console.log(thisone);
// console.log(document.getElementById("thisone"));
console.log(document.getElementsByClassName("okay"));
console.log(document.getElementsByClassName("okay"));
console.log(document.getElementsByName("email"));
const span = document.getElementsByTagName("span");
span[0].innerText="here";
span[0].innerHTML="<span>hereee</span>";
span[0].innerHTML=`<span class="my class">hereee</span>`;
span[0].textContent="here";
span[0].style.backgroundColor="navy";
span[0].style.color="pink";
console.log(span[0]);
const mybtn = document.getElementById("idofb");
mybtn.style.backgroundColor = "blue";
mybtn.style.color = "#fff";
mybtn.style.border = "none";
mybtn.style.display = "block";
mybtn.style.padding = "50px 10px 20px 30px";
mybtn.style.cursor = "pointer";
console.log(document.querySelector(".okay"));//dot because okay is a class and classes are slected like that
console.log(document.querySelector("#idofb"));//hash char selects id
mybtn.setAttribute("class","sample with");
console.log(mybtn);
console.log(mybtn.getAttribute("class"));
const newElement = document.createElement("h2");
newElement.innerText="he is not nice";
document.body.append(newElement);//last mei
document.body.prepend(newElement);//top pe
const newElement2 = document.createElement("div");
const newElement2text = document.createTextNode("h2");
document.body.append(newElement2);//last mei
newElement2.append(newElement2text);
