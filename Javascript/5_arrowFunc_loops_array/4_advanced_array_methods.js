const arr = [2, 4, 73, 4];

// 1.
// myfunc = (value, index) => {
//   if (value == 6) {
//     console.log("6 exists");
//   }
// }
// arr.find(myfunc);

// 2.
// arr.find((value, index)=> {
//   if (value == 2) {
//     console.log("2 exists");
//   }
// });

// 3.
// const result = arr.find((value, index)=> {
//   if (value == 2) {
//     return value;
//   }
// });
// console.log(result);
//find method can return only a single value and it traverses the array with two variables in consideration value and index

// 4.
// const result = arr.filter((value, index) => {
//   if (value > 4) {
//     return value;
//   }
// });
// console.log(result);
//filter method returns an array

// 5.
// const res = arr.every((value,index)=>{
//   return value>10;
// });
// console.log(res);

// 6.
// const res = arr.some((value,index)=>{
//   return value>10;
// });
// console.log(res);

// 7.
// let total = 0;
// arr.forEach((value,index)=>{
//   total+=value;
// });
// console.log(total)

// 8.
// arr.forEach((val,i)=>{
//   val=val+20;
//   console.log(val);
// });
// console.log(arr);//no change in actual array due to these methods

// // 9.
// const res = arr.forEach((val, i) => {
// return val;
// });
//   console.log(res);
// does not return

// 9.
// const res = arr.map((val, i) => {
// return val+2;
// });
//   console.log(res);
// does return and creates a new array

// 10.
// const res = arr.reduce((prev,curr,currind) => {
//   return prev +curr;
// });
// console.log(res) ;
// returns single value