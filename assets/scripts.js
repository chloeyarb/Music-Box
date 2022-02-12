var inputEl = document.querySelector("#form");
var searchButton = document.querySelector("#btn");
var songs = document.querySelector("#songs");
var artists = document.querySelector("#artist");

var songName;
var artistName;

var buttonClickHandler = function (event){
event.preventDefault();
//value needed form api search
songName = songs.value.trim();
artistName = artists.value.trim();
getLyrics();

};


var getLyrics = function (user) {
  var apiUrl = "https://api.lyrics.ovh/v1/" + artistName + "/" + songName ;

  fetch(apiUrl)
  .then(function(response) {
    console.log(response)
    if(response.ok) {
      console.log(response);
      response.json().then(function(data) {
        //function call to display
        //create modals
      });
    

    } else if (response.status === 404){
      alert("No lyrics found!");

    }


  }).catch(function(error) {
    console.log(error)
  })
}



searchButton.addEventListener("click", buttonClickHandler);