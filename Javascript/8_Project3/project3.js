const name = document.getElementById("name");
const tagsContainer = document.querySelector(".tags");
const add = () => {
  if (name.value === "") {
    return null;
  }

  const tag = document.createElement("p");

  tag.innerText = `Hey, I am ${name.value}`;

  tagsContainer.append(tag);
};