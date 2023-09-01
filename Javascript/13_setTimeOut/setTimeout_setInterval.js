// 1st way of setting timout
// const PrintName = ( name,age) =>{
//   console.log(`welcome, ${name}, Age= ${age}`);
// };

// setTimeout(PrintName , 5000,"Priyanshu",30);

// 2nd way of setting timeout
// setTimeout(( name,age) =>{
//   console.log(`welcome, ${name}, Age= ${age}`);
// } , 5000,"Priyanshu",30);

// when you reload and click on cancel it wont be 
// showing the print statmenet because the timeout would have gone
const btn = document.querySelector("button");
const id = setTimeout(( name,age) =>{
  console.log(`welcome, ${name}, Age= ${age}`);
} , 5000,"Priyanshu",30);

btn.addEventListener("click",()=>{
  clearTimeout(id);
});

// same syntax for setInterval