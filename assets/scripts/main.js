// main.js

// TODO

let vol = 100;

var myHonk = document.getElementById('honk-btn');
myHonk.onclick = function(e) {
    e.preventDefault();
    console.log("honk");
    play();
}

var myAirHonk = document.getElementById('radio-air-horn');
let airAudio = new Audio("./assets/media/audio/air-horn.mp3");
myAirHonk.onclick = function(e) {
    console.log("airhonk");
    pictureRelatedTotheItem(airAudio);
}


var mypartyHonk = document.getElementById('radio-party-horn');
let partyAudio = new Audio("./assets/media/audio/party-horn.mp3");
mypartyHonk.onclick = function(e) {
    console.log("partyhonk");
    pictureRelatedTotheItem(partyAudio);
}


var myCarHonk = document.getElementById('radio-car-horn');
let carAudio = new Audio("./assets/media/audio/car-horn.mp3");
myCarHonk.onclick = function(e) {
    console.log("carhonk");
    pictureRelatedTotheItem(carAudio);
}

let currentHorn = airAudio;

function pictureRelatedTotheItem(hornItem) {
    currentHorn = hornItem;
    let image;
    if(currentHorn == carAudio){
        image = "car-horn.svg";
    }
    else if(hornItem == partyAudio){
        image = "party-horn.svg"
    }
    else{
        image = "air-horn.svg"
    }
    document.getElementById("sound-image").src = `./assets/media/images/${image}`;
}

function volumeImage(vol) {
    var imageVolume = document.getElementById('volume-image');
    let level;
    if(vol >= 67){
        level = 3;
    }
    else if(vol >= 34){
        level = 2;
    }

    else if(vol >= 1){
        level = 1;
    }

    else{
        level = 0;
    }
    imageVolume.src = `./assets/media/icons/volume-level-${level}.svg`;
}
//helper function
function checkVol(vol){
    if(vol >= 100){
        vol = 100;
    }

    else if(vol <= 0){
        vol = 0;
    }
    return vol/100;
}

function play() {
    currentHorn.volume = checkVol(vol);
    currentHorn.play(); 
  }
 
document.getElementById("volume-number").addEventListener("input", volumeNumber);
function volumeNumber(e){
    vol = e.target.value;
   document.getElementById("volume-slider").value = vol;
   volumeImage(vol);
}


document.getElementById("volume-slider").addEventListener("input", barSlider);
function barSlider(e){
    vol = e.target.value;
    document.getElementById("volume-number").value = vol;
    volumeImage(vol);
    
}








