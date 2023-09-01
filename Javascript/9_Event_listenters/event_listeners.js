const heading= document.querySelector("#heading");
const myBtn= document.querySelector("#myBtn");
const box= document.querySelector("#box1");
const ip= document.querySelector("#ip");

// box.addEventListener("click",()=>{
//  console.log("clicked");  
// });     //type defined ,function defined


//using anonymous arrow function
box.addEventListener("click",()=>{
  box.style.backgroundColor="pink";
});


//making a function instad of anonymous function , to add a class to a certain element
const funct1 = ()=>{
  box.classList.add("classfordiv");
}
myBtn.addEventListener("click",funct1);

//mouseover
const funct2 = ()=>{
  myBtn.style.transform = "scale(1.1)";
  heading.style.backgroundColor="pink";
}
box.addEventListener("mouseover",funct2);

// removing, making null the properties given at the time of mouseover
const funct3 = ()=>{
  myBtn.style.transform = "";
  heading.style.backgroundColor="";
}
box.addEventListener("mouseout",funct3);


// removing event listners
// heading.addEventListener("mouseout",()=>{
//   box.removeEventListener("mouseover",funct2);
// });

//element , removing default behaviour , right click system
myBtn.addEventListener("contextmenu",(e)=>{
  e.preventDefault();
  myBtn.style.backgroundColor="purple";
});

// window Object
// window.addEventListener("click",()=>{
//   myBtn.style.backgroundColor="black";
// });
addEventListener("click",()=>{
  myBtn.style.backgroundColor="black";
});

//coordinates of the cursor
// addEventListener("click",(e)=>{
//   console.log(e.clientX);
//   console.log(e.clientY);
// });

ip.addEventListener("change",(e)=>{
  console.log(e.target.value);
});