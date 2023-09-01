let arr= [1,2,3,4,"pr",6,7,8,9];
function total(arr) {
  let sum = 0;
    for(let i = 0 ; i < arr.length ;i++){
      sum+=arr[i];
    }
    return sum;
}
let s =total(arr);
console.log(s);