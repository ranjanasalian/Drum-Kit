var numberofDrumButtons = document.querySelectorAll(".drum").length; //total 7

for (i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handledClick);
  // giving sound to this.id
  function handledClick() {
    var audio = new Audio("sounds/" + this.id + ".mp3");
    audio.play();

    buttonanimation(this.id);

    handleKeyPress(keyPressed.this.id);
  }
}
//animation to the buttons when clicked
function buttonanimation(currentkey) {
  var activebutton = document.getElementById(currentkey);
  activebutton.classList.add("pressed");

  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 100);
}

//giving sound to the keys when pressed in the keyboard.

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  // Get the key that was pressed

  var keyPressed = event.key; //anykey from a-z

  // Check if the pressed key matches a drum button ID
  if (
    keyPressed === "w" ||
    keyPressed === "a" ||
    keyPressed === "s" ||
    keyPressed === "d" ||
    keyPressed === "j" ||
    keyPressed === "k" ||
    keyPressed === "l"
  ) {
    switch (keyPressed) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log(keyPressed);
    }
  }
}
