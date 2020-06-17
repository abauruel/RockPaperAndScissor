let score = 0;
const arrayOptions = ["rock", "paper", "scissors"];
let housePicked;

function rules(result, namechoisen) {
  const scoreElement = document
    .getElementsByClassName("header-game-score")[0]
    .getElementsByTagName("p")[0];
  let message;
  const myNumber = arrayOptions.findIndex((name) => name === namechoisen);
  const homeNumber = arrayOptions.findIndex((name) => name === result);
  if (myNumber == homeNumber) {
    message = "You Tie";
  } else if (
    (myNumber - homeNumber) % 3 == 1 ||
    (myNumber - homeNumber) % 3 == -2
  ) {
    message = "you win";
    score++;
    scoreElement.textContent = score;
  } else {
    message = "you lose";
  }

  document.getElementById("resultText").textContent = message;
  document.getElementById("result").style.display = "flex";
}

function Aleatory() {
  return arrayOptions[Math.floor(Math.random() * arrayOptions.length)];
}

function choice(e) {
  //check button close clicked
  if (this.id === "close") {
    console.log("close");
    document.getElementsByClassName("rules")[0].style.display = "none";
    return;
  }

  //check button playagain it was clicked
  if (this.id === "playagain") {
    //hide and show containers
    document.getElementById("selectors").style.display = "flex";
    document.getElementsByClassName("game")[0].style.display = "none";
    document.getElementById("result").style.display = "none";
    return;
  }

  //check button RULES it was clicked
  if (this.id === "rules") {
    //show modal
    document.getElementsByClassName("rules")[0].style.display = "flex";
    return;
  }

  //hide container chosen
  document.getElementsByClassName("game")[0].style.display = "flex";

  const containerselection = document.getElementById("selectors");
  const mychoice = document.getElementById("choice");

  //get data name
  const choisenName = this.dataset.namechoice;

  //close container choisen
  containerselection.style.display = "none";
  const sourceImage = mychoice.getElementsByTagName("img");
  sourceImage[0].src = this.getElementsByTagName("img")[0].src;

  function roulette() {
    const housePickedElement = document.getElementById("opponent"); //elemento do oponente

    //set image on choisen

    housePicked = Aleatory();
    if (!housePickedElement.className) {
      housePickedElement.classList.add("button-" + housePicked);
    } else {
      housePickedElement.classList.remove(housePickedElement.className);
      housePickedElement.classList.add("button-" + housePicked);
    }
    const srcImgHousePicked = sourceImage[0].src.replace(
      choisenName,
      housePicked
    );
    housePickedElement.getElementsByTagName("img")[0].src = srcImgHousePicked;
  }

  //random choice
  const startRoulette = setInterval(roulette, 200);
  setTimeout(() => {
    clearInterval(startRoulette);
    rules(housePicked, choisenName);
  }, 3000);
  console.log(choisenName);
  if (!mychoice.className) {
    mychoice.classList.add("button-" + choisenName);
  } else {
    mychoice.classList.remove(mychoice.className);
    mychoice.classList.add("button-" + choisenName);
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", choice));
