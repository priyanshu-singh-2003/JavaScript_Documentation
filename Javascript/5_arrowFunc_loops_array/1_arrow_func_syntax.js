//arrow fucn k case mei calling can not happen before initialization
//while normal func k case mei it can happen
// syntax 1:
//  function my_func(){

// }
// syntax 2:
// const my_func = function () {

// }
// syntax 3: arrow function
const my_func = (/*arguments*/)=> {

}


const myfucnt =(a,b)=>{
  console.log(a+b);
}
myfucnt(9,3);
// calling after initalisation and defination