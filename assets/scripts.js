var inputEl = document.querySelector("#form");
var searchButton = document.querySelector("#btn");
var songs = document.querySelector("#songs");
var artists = document.querySelector("#artist");
var showLyrics = document.querySelector("#results");
var songName;
var artistName;



var buttonClickHandler = function (event) {
  event.preventDefault();
  //value needed form api search
  songName = songs.value.trim();
  artistName = artists.value.trim();
  getLyrics();

};


var getLyrics = function (user) {
  var apiUrl = "https://api.lyrics.ovh/v1/" + artistName + "/" + songName;

  fetch(apiUrl)
    .then(function (response) {
      console.log(response)

      return response.json();
    })

    .then(function (data) {
      console.log("data", data);
      console.log(data.lyrics);

      //function call to display
      //create modals
      var h3 = document.createElement("h3")
      var p = document.createElement("p");

      h3.textContent = songName;
      p.textContent = data.lyrics;

      showLyrics.appendChild(h3);
      showLyrics.appendChild(p);

    })


    .catch(function (error) {
      alert("No lyrics found!");
      console.log(error)
    })


}



searchButton.addEventListener("click", buttonClickHandler);
