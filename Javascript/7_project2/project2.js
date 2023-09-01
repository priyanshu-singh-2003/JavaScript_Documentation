const body = document.querySelector(".container");
const option = document.getElementById("Zodiac");
const changeBackground = () => {
  switch (option.value) {
    case "Aries":
      body.style.backgroundColor = "#3C0D0D";
      break;
    case "Taurus":
      body.style.backgroundColor = "#4D3E50";
      break;
    case "Gemini":
      body.style.backgroundColor = "#3E5044";
      break;
    case "Cancer":
      body.style.backgroundColor = "#3E4050";
      break;
    case "Leo":
      body.style.backgroundColor = "#DEB928";
      break;
    case "Virgo":
      body.style.backgroundColor = "#D1BD87";
      break;
    case "Libra":
      body.style.backgroundColor = "#87D1B1";
      break;
    case "Scorpio":
      body.style.backgroundColor = "#87D1CC";
      break;
    case "Sagittarius":
      body.style.backgroundColor = "#87A7D1";
      break;
    case "Capricorn":
      body.style.backgroundColor = "#A087D1";
      break;
    case "Aquarius":
      body.style.backgroundColor = "#D187B1";
      break;
    case "Pisces":
      body.style.backgroundColor = "#B63737";
      break;
    default:
      body.color = "white";
  }
}