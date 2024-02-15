
var x = document.getElementsByTagName("button").length;
var i = 0;
var audiosound = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];


while (i < x) {
    let j = i;
    document.getElementsByTagName("button")[i].addEventListener("click", function () {
        var audio = new Audio(audiosound[j]);
        audio.play();
        // console.log(this);

        // alert(this.innerHTML);
    })
    i++;
}
