var inputEl = document.querySelector("#form");
var searchButton = document.querySelector("#btn");
var songs = document.querySelector("#songs");
var artists = document.querySelector("#artist");
var showLyrics = document.querySelector("#results");
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




var repoEl = document.createElement("a");
repoEl.classList = "list-item flex-row justify-space-between align-center";
repoEl.setAttribute("href", "./single-repo.html?repo=" + repoName);

// create a span element to hold repository name
var titleEl = document.createElement("span");
titleEl.textContent = repoName;

// append to container
repoEl.appendChild(titleEl);