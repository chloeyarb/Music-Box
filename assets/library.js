// Variable for displaying lyrics
var lyricsDisplay = document.querySelector("#lyrics-display");

// Local Storage
var savedFavoriteSongs = function () {

    var localStorageSongs = JSON.parse(window.localStorage.getItem('allSearch')) || [];
    console.log(localStorageSongs[0].songName)

    for (let i = 0; i < localStorageSongs.length; i++) {
        var artistH2 = document.createElement("h2");
        var songP = document.createElement("p");

        artistH2.textContent = localStorageSongs[i].artistName
        songP.textContent = localStorageSongs[i].songName

        lyricsDisplay.append(artistH2, songP);
    }

}

savedFavoriteSongs();

// Modal
var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('cBtn')[0];



modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);


window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display = 'block';
}


function closeModal() {
    modal.style.display = 'none';
}


function clickOutside(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}