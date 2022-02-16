var lyricsDisplay = document.querySelector("#lyrics-display");

var savedFavoriteSongs = function (){

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
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
// get close button
var closeBtn = document.getElementsByClassName('cBtn')[0];


//Listen for open  click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);
// funtion to open modal
function openModal(){
    modal.style.display = 'block';
}

// function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// function to close modal if outside it clicked
function clickOutside(event){
 if (event.target === modal){
    modal.style.display = 'none';
 }
}