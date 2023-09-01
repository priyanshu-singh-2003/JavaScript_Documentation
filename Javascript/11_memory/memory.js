const input = document.getElementById("inp");
const add = document.getElementById("add");
const del = document.getElementById("delete");
//how are these stored == array of object
// const arr = [{"key1",priyanshu},{"key2",blah},{"key3",hi}]

//storing item in storage
const click_add_btn = () => {
  // alert(input.value); 
  sessionStorage.setItem("key1", input.value);
}

add.addEventListener("click", click_add_btn);
// checking and retriving value to a key

if (sessionStorage.getItem("key1")){
  alert(sessionStorage.getItem("key1"));
}
// to  retrive the length  sessionstorage.length
// removing stoed item
del.addEventListener("click",()=>{
  if (sessionStorage.getItem("key1")){
    sessionStorage.removeItem("key1");
  }  
})
//acessing through index
sessionStorage.keu(0);//0th index key is returned



// object to string ==> json.stringify({name:"priyanhsu",surname:"singh"});
// string to object ==> json.parse(sessionstorage.getitem("key1"));

/*sessional storage == 5 mb
local storage = 10 mb*/