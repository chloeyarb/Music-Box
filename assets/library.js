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