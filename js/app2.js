class Kittens {
    constructor(name, img, count){
        this.name = name;
        this.img = img;
        this.count = count;
    }

    addClick() {
        this.count++;
        clickCounter.innerHTML = `You have clicked ${this.name} ${this.count} time(s).`;

        // Every 20 clicks on the cat the meow.wav file will play
        if (this.count % 25 === 0) {
          meow.play();
        }
    }
}

// Creats each Kitten class
var cat1 = new Kittens('Xeno', "images/cat01.jpg", 0);
var cat2 = new Kittens('Kitty', "images/cat02.jpg", 0);
var cat3 = new Kittens('Mr. Meowth', "images/cat03.jpg", 0);
var cat4 = new Kittens('Sadie', "images/cat04.jpg", 0);
var cat5 = new Kittens('Wanheda', "images/cat05.jpg", 0);

// Takes the Kitten classes and puts them into an array
var cats = [cat1, cat2, cat3, cat4, cat5];

// Creates button node list then makes it into an array
const catList = document.querySelectorAll('.catList');
var list = [...catList];

// Sets the kitty variable to be used at current kitten for click event
var kitty = null;

// Just a fun sound effect to be used every 25 clicks
var meow = new Audio("sounds/meow2.wav");

// Sets the initial cat on load up
currentCat(cats[0]);

// Function used to changed the stats of and img of cat being used
function currentCat(current){
    catPic.src = current.img;
    clickCounter.innerHTML = `You have clicked ${current.name} ${current.count} time(s).`;
    kitty = current;
}

// Adds click event on the picture and uses the kitty(current cat) variable to add click count
catPic.addEventListener('click', (function(){
    kitty.addClick();
}), false);

// Changes the source of the cat image depending on button pressed
function changeCat() {
  cat = this;

  if (cat === list[0]) {
    currentCat(cats[0]);
  }

  if (cat === list[1]) {
    currentCat(cats[1]);
  }

  if (cat === list[2]) {
    currentCat(cats[2]);
  }

  if (cat === list[3]) {
    currentCat(cats[3]);
  }

  if (cat === list[4]) {
    currentCat(cats[4]);
  }
}

// Adds a click even to each of the buttons for the cats
list.forEach(cat => cat.addEventListener('click', changeCat));
