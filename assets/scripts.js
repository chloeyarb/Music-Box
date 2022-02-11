// Variables do var
var inputEl = document.querySelector("#form")
var searchButton = document.querySelector("#btn")
var songs = document.querySelector("#songs")

var buttonClickHandler = function (event){
event.preventDefault();
//value needed form api search
var songName = songs.value.trim();
getLyrics();

};
  
var getLyrics = function (user) {
  var apiUrl = "https://api.lyrics.ovh/v1/";

  fetch(apiUrl)
  .then(function(response) {
    if(response.ok) {
      console.log(response);
      response.json().then(function(data) {
        //function call to display
        //create modals
      });
    

    }
  })
}




apiUrl = "https//api.lyrics.ovh";