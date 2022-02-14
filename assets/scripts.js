var inputEl = document.querySelector("#form");
var searchButton = document.querySelector("#btn");
var songs = document.querySelector("#songs");
var artists = document.querySelector("#artist");
var showLyrics = document.querySelector("#results");
var showGif = document.querySelector("#gif")
var songName;
var artistName;
var gif; 


var buttonClickHandler = function (event) {
  event.preventDefault();
  //value needed form api search
  songName = songs.value.trim();
  artistName = artists.value.trim();
  gif = showGif.value;
  getLyrics();
  getGifs();
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
      // may need to  be more specific with this search
      alert("No lyrics found!");
      console.log(error)
    })
}




var getGifs = function (user) {
  var apiUrl = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=5&api_key=PG8eCoEPPQI1vv1ejnkKITTC5ZvzG1EU";

  fetch(apiUrl)
    .then(function (response) {


      return response.json();

    })
    .then(function (data) {
      console.log(data.data)

      var div = document.createElement("div")
      var p = document.createElement("p");

      div.textContent = artistName;
      p.textContent = data;

      showGif.appendChild(div);
      showGif.appendChild(p);
    })
    .catch(function (error) {
    });
}



// // may need to  be more specific with this search
//       alert("No lyrics found!");
//       console.log(error)




searchButton.addEventListener("click", buttonClickHandler);
