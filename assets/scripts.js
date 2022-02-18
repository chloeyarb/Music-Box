// Variables
var inputEl = document.querySelector("#form");
var searchButton = document.querySelector("#btn");
var songs = document.querySelector("#songs");
var artists = document.querySelector("#artist");
var showLyrics = document.querySelector("#results");
var showGif = document.querySelector("#gif")
var headphoneImg = document.querySelector("#headphone");
var songName;
var artistName;
var hiddenArea = document.querySelector("#container");
var lyricsDisplay = document.querySelector("#lyrics-display");
var gif;

// Modal Variables
var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('cBtn')[0];



modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);


window.addEventListener('click', clickOutside);

//Listening events to open and close modal
function openModal() {
  modal.style.display = 'block';
}


function closeModal() {
  modal.style.display = 'none';
}

//Listening event for outside click of modal
function clickOutside(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

var buttonClickHandler = function (event) {
  event.preventDefault();

  songName = songs.value.trim();
  artistName = artists.value.trim();
  hiddenArea.style.display = 'none';
  getLyrics();
  hiddenArea.style.display = 'none';
  headphoneImg.style.display = 'none';
  getGifs();
  console.log('Working')
  yourFavoriteSongs(songName, artistName);
  console.log('Still Working')
};


var getLyrics = function (user) {
  var apiUrl = "https://api.lyrics.ovh/v1/" + artistName + "/" + songName;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {

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


var getGifs = function (user) {
  var apiUrl = "https://api.giphy.com/v1/gifs/search?q=" + artistName + "&limit=5&api_key=PG8eCoEPPQI1vv1ejnkKITTC5ZvzG1EU";

  fetch(apiUrl)
    .then(function (response) {

      return response.json();
    })

    .then(function (data) {
      console.log(data.data)


      var div = document.createElement("div")
      var p = document.createElement("img");

      div.textContent = artistName;
      p.src = data.data[0].images.preview_webp.url;

      showGif.appendChild(div);
      showGif.appendChild(p);
    })
    .catch(function (error) {
    });
}


// /* LOCAL STORAGE */
var yourFavoriteSongs = function (songName, artistName) {

  var allSearch = JSON.parse(window.localStorage.getItem("allSearch")) || [];

  var newSong = {
    songName: songName,
    artistName: artistName
  }

  allSearch.push(newSong)


  window.localStorage.setItem('allSearch', JSON.stringify(allSearch));
}

searchButton.addEventListener("click", buttonClickHandler);


