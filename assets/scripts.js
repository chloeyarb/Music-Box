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

var spotifyPlaylist = function () {

  $.ajax({
    url: 'https://api.spotify.com/v1/me/playlists',
    method: "GET",
    data: {
      name: JSON.stringify({name: "test", public: false})
    },
    headers: {
      'Authorization': 'Bearer ' + "BQAB3JdZIWCIgyPB5GbyRs2Vpt3kIsCBBnwg0TTkCzpMfzgc5XMipDe3EigXW70cNCWBp48M_wwUP2_OC8xqvtxGfCi3KpLf-xHwc5saPd4dxviPWEBJW8gChZL4rr5VqwXDlAOUinCEer79icbVMZKF8n0a6kKBy59r4a20yAMmXlPb",
      'Content-Type': 'application/json'
    },
    success: function(response) {
      console.log(response);
    }
  });
  
}
spotifyPlaylist();

searchButton.addEventListener("click", buttonClickHandler);

