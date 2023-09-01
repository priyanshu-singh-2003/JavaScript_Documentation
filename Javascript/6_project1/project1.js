const container = document.querySelector(".container");
const inputElement = document.getElementById("nwords");
const generateWord = (input) => {
  const possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let word = "";
  for (let i = 0; i < input; i++) {
    const randIndex = (Math.random() * (possibleChar.length - 1)).toFixed(0);
    word += possibleChar[randIndex]; 
  }
  return word;
};
const generatePara = () => {
  let input = Number(inputElement.value);
  let data = "";
  for (let i = 0; i < input; i++) {
    data += generateWord(Math.random() * 15);
    data += " ";
  }
  const para = document.createElement("p");
  para.setAttribute("class", "paras");
  para.innerText=data;
  container.append(para);

;}
