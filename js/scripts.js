let score = 0;
function choose(e) {
  let housePicked;
  const arrayOptions = ["rock", "paper", "scissors"];

  //check button close clicked
  if (this.id === "close") {
    console.log("close");
    document.getElementsByClassName("rules")[0].style.display = "none";
    return;
  }

  //check button playagain clicked
  if (this.id === "playagain") {
    document.getElementById("selectors").style.display = "flex";
    document.getElementsByClassName("game")[0].style.display = "none";
    document.getElementById("result").style.display = "none";
    return;
  }
  if (this.id === "rules") {
    console.log("rules");
    console.log(
      (document.getElementsByClassName("rules")[0].style.display = "flex")
    );
    return;
  }
  document.getElementsByClassName("game")[0].style.display = "flex";
  const containerselection = document.getElementById("selectors"); //container de selecao
  const mychoose = document.getElementById("choose"); //elemento escolhido
  const housePickedElement = document.getElementById("opponent"); //elemento do oponente
  const scoreElement = document
    .getElementsByClassName("header-game-score")[0]
    .getElementsByTagName("p")[0];

  const namechoose = this.dataset.namechoose;
  function rules(result) {
    let message;
    const myNumber = arrayOptions.findIndex((name) => name === namechoose);
    const homeNumber = arrayOptions.findIndex((name) => name === result);
    if (myNumber == homeNumber) {
      message = "You Tie";
    } else if ((myNumber - homeNumber) % 3 == 1) {
      message = "you win";
      score++;
      scoreElement.textContent = score;
    } else {
      message = "you lose";
    }
    document.getElementById("resultText").textContent = message;
    document.getElementById("result").style.display = "flex";
  }
  //elemento escolhido
  const choosedName = this.dataset.namechoose;

  //set image on choosed
  const sourceImage = mychoose.getElementsByTagName("img");
  sourceImage[0].src = this.getElementsByTagName("img")[0].src;

  //close container choosed
  containerselection.style.display = "none";
  function Aleatory() {
    return arrayOptions[Math.floor(Math.random() * arrayOptions.length)];
  }
  console.log(housePickedElement);
  function roleta() {
    housePicked = Aleatory();
    if (!housePickedElement.className) {
      housePickedElement.classList.add("button-" + housePicked);
    } else {
      housePickedElement.classList.remove(housePickedElement.className);
      housePickedElement.classList.add("button-" + housePicked);
    }
    const srcImgHousePicked = sourceImage[0].src.replace(
      choosedName,
      housePicked
    );
    housePickedElement.getElementsByTagName("img")[0].src = srcImgHousePicked;
  }

  //escolha aleatoria
  var startRoleta = setInterval(roleta, 200);
  setTimeout(() => {
    clearInterval(startRoleta);
    rules(housePicked);
  }, 3000);

  if (!mychoose.className) {
    mychoose.classList.add("button-" + this.dataset.namechoose);
  } else {
    mychoose.classList.remove(mychoose.className);
    mychoose.classList.add("button-" + choosedName);
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", choose));
