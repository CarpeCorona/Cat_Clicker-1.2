// Creates picture node list then makes it into an array
const catPictures = document.querySelectorAll('.catList');
var cats = [...catPictures];
var catName = "Xeno";

// Sets var for cat meow that buffers automatically when created
var meow = new Audio("sounds/meow2.wav");

// This adds the click event to the cat image and tracks click count
catPic.addEventListener('click', (function(clickCount){

  var clickCount = 0;
  console.log(clickCount);

  return function() {
    clickCount++;
    clickCounter.innerHTML = `You have clicked ${catName} ${clickCount} time(s).`;
    console.log(clickCount);
  };
})(catName));

// Changes the source of the cat image depending on button pressed
function changeCat() {
  cat = this;

  if (cat === cats[0]) {
    catPic.src = "images/cat01.jpg";
    catName = "Xeno";
  }

  if (cat === cats[1]) {
    catPic.src = "images/cat02.jpg";
    catName = "Kitty";
  }

  if (cat === cats[2]) {
    catPic.src = "images/cat03.jpg";
    catName = "Mr. Meowth";
  }

  if (cat === cats[3]) {
    catPic.src = "images/cat04.jpg";
    catName = "Sadie";
  }

  if (cat === cats[4]) {
    catPic.src = "images/cat05.jpg";
    catName = "Wanheda";
  }
}

// Adds a click even to each of the buttons for the cats
cats.forEach(cat => cat.addEventListener('click', changeCat));
