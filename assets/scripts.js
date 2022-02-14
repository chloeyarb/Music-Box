var inputEl = document.querySelector("#form");
var searchButton = document.querySelector("#btn");
var songs = document.querySelector("#songs");
var artists = document.querySelector("#artist");
var showLyrics = document.querySelector("#results");
var showCharts = document.querySelector("#chart-results");
var songName;
var artistName;



var buttonClickHandler = function (event) {
  event.preventDefault();
  //value needed form api search
  songName = songs.value.trim();
  artistName = artists.value.trim();
  getLyrics();
  artistsCharts();

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

var artistsCharts = function(){
  var gifApi = "https://api.giphy.com/v1/gifs/search?q=" + artistName + "&limit=5&api_key=PG8eCoEPPQI1vv1ejnkKITTC5ZvzG1EU";

  fetch(gifApi)
    .then(function (response) {
      console.log(response)

      return response.json();
  })
    .then(function (data) {
      console.log(data.data)
    })
  .catch(function(error){

  });
}


searchButton.addEventListener("click", buttonClickHandler);


// var spotifyPlaylist = function () {

//   $.ajax({
//     url: 'https://api.spotify.com/v1/me/playlists',
//     method: "GET",
//     data: {
//       name: JSON.stringify({name: "test", public: false})
//     },
//     headers: {
//       'Authorization': 'Bearer ' + "BQBP3zgJ2inTK1i7uXnvMiYRsW25lwDE9czeVNoEeFb_9yE9INkH66RBZ7RppWqGXdLlnPK-va5UpLp2c34jSl9kZyJBSukKJvetl-3UsohATJYBPnPVxHhV8Dc_FssHnPtXMkM6YBtX8vpF0R9v7CXZrY424BDHQQJw47ciRpFLLNVm",
//       'Content-Type': 'application/json'
//     },
//     success: function(response) {
//       console.log(response);
//     }
//   });
  
// }
// spotifyPlaylist();


