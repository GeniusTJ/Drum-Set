var drumbuttonsHtml = document.querySelectorAll(".mainImages");
var drumbuttons = drumbuttonsHtml[0].getElementsByTagName("img");

for (var i = 0; i < drumbuttons.length; i++) {
  drumbuttons[i].addEventListener("click", function (x) {
    console.log(x);
    console.log(i);
    switch (x.target.className) {
      case "bass-drum":
        var audio1 = new Audio("js/audio/Bass-Drum.mp3");
        audio1.play();
        break;
      case "hi-hats":
        var audio2 = new Audio("js/audio/Hi-Hat-Closed.mp3");
        console.log("Key pressed");
        audio2.play();
        break;
      case "cymbal":
        var audio3 = new Audio("js/audio/Splash-Cymbal.mp3");
        audio3.play();
        break;
      case "snare-drum":
        var audio4 = new Audio("js/audio/Snare-Drum.mp3");
        audio4.play();
        break;
      case "tom-toms-bass-drum":
        var audio5 = new Audio("js/audio/Floor-Tom-Drum.mp3");
        audio5.play();
        break;
      case "drum_sticks":
        var audio6 = new Audio("js/audio/Drum-Sticks.mp3");
        audio6.play();
        break;
      default:
        var audio1 = new Audio("js/audio/Bass-Drum.mp3");
        audio1.play();
        console.log("Hi");
        break;
    }
  });
}


// Here we use document because we are adding listeners to the whole page
document.addEventListener("keypress", function (y) {
  console.log(y);
  switch (y.key) {
    case "a" /*a*/:
      var audio1 = new Audio("js/audio/Bass-Drum.mp3");
      audio1.play();
      console.log("pressed");
      break;
    case "s" /*s*/:
      var audio2 = new Audio("js/audio/Hi-Hat-Closed.mp3");
      console.log("Key pressed");
      audio2.play();
      break;
    case "d" /*d*/:
      var audio3 = new Audio("js/audio/Splash-Cymbal.mp3");
      audio3.play();
      break;
    case "z" /*z*/:
      var audio4 = new Audio("js/audio/Snare-Drum.mp3");
      audio4.play();
      break;
    case "x" /*x*/:
      var audio5 = new Audio("js/audio/Floor-Tom-Drum.mp3");
      audio5.play();
      break;
    case "c" /*c*/:
      var audio6 = new Audio("js/audio/Drum-Sticks.mp3");
      audio6.play();
      break;
    default:
      var audio1 = new Audio("js/audio/Bass-Drum.mp3");
      audio1.play();
      console.log("Hi");
      break;
  }
});
