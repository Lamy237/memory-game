const cardArray = [
    {
        name: "fries",
        img: '../img/fries.png'
    },
    {
        name: "cheeseburger",
        img: '../img/cheeseburger.png'
    },
    {
        name: "hotdog",
        img: '../img/hotdog.png'
    },
    {
        name: "ice-cream",
        img: '../img/ice-cream.png'
    },
    {
        name: "milkshake",
        img: '../img/milkshake.png'
    },
    {
        name: "pizza",
        img: '../img/pizza.png'
    },
    {
        name: "fries",
        img: '../img/fries.png'
    },
    {
        name: "cheeseburger",
        img: '../img/cheeseburger.png'
    },
    {
        name: "hotdog",
        img: '../img/hotdog.png'
    },
    {
        name: "ice-cream",
        img: '../img/ice-cream.png'
    },
    {
        name: "milkshake",
        img: '../img/milkshake.png'
    },
    {
        name: "pizza",
        img: '../img/pizza.png'
    },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute('src', '../img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener("click", flipCard);
        gridDisplay.append(card);
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);

    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}


function checkMatch() {
    const cards = document.querySelectorAll("img");

    if (cardsChosenIds[0] === cardsChosenIds[1]) {
        cards[cardsChosenIds[0]].setAttribute('src', '../img/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', '../img/blank.png');
        alert("You have clicked the same image");
    }

    if (cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match!");
        cards[cardsChosenIds[0]].setAttribute('src', '../img/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', '../img/white.png');

        cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
        cards[cardsChosenIds[1]].removeEventListener("click", flipCard);

        cardsWon.push(cardsChosen);
        console.log(cardsWon);
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', '../img/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', '../img/blank.png');
        // alert("Sorry, try again!");
    }
    resultDisplay.textContent = `Score: ${cardsWon.length}`;

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === (cardArray.length / 2)) {
        resultDisplay.textContent = "Congratulations you found them all! 🎉";
    }
}

createBoard();