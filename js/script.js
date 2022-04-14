var loaded = false;
var audioPlayer = document.getElementById('audioPlayer');
var playBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');

pauseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    audioPlayer.pause();
    return false;
});

playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    audioPlayer.play();
    return false;
});

const playSong = (file) => {
    if(loaded == false) {
        loaded = true;
    }
    audioPlayer.load();
    audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mp3">`;
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    progressBar();
}

function progressBar() {
    setInterval(timer,1000);
    function timer() {
        var audioLength = audioPlayer.duration;
        let barActual = audioPlayer.currentTime;
        let barPosition = barActual / audioLength * 100;
        let progressBarComponent = document.getElementsByClassName('player_control_progress');
        progressBarComponent[0].innerHTML = `<div style="width: `+barPosition+`%" class="player_control_progress_2">`;
    }
}

document.querySelectorAll('.main_col').forEach(item => {
    item.addEventListener('click', event=> {
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');
        playBtn.style.display = "none";
        pauseBtn.style.display = "inline";
        let playerArtistComponent = document.getElementsByClassName('player_artist');
        playerArtistComponent[0].innerHTML = 
           `<img src="`+image+`">
            <h3>`+artist+`<br><span>`+song+`</span></h3>`;
        playSong(file);
    });
});