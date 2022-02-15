
var inputEl = document.querySelector("#form");
var searchButton = document.querySelector("#btn");
var songs = document.querySelector("#songs");
var artists = document.querySelector("#artist");
var showLyrics = document.querySelector("#results");
var showGif = document.querySelector("#gif")
var songName;
var artistName;
var hiddenArea =document.querySelector("#container");
var gif; 

//get modal element
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

var buttonClickHandler = function (event) {
  event.preventDefault();
  //value needed form api search
  songName = songs.value.trim();
  artistName = artists.value.trim();
  gif = showGif.value;
  hiddenArea.style.display ='none';
  getLyrics();
  hiddenArea.style.display ='none';
  getGifs();
};


var getLyrics = function (user) {
  var apiUrl = "https://api.lyrics.ovh/v1/" + artistName + "/" + songName;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      // console.log("data", data);
      // console.log(data.lyrics);

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
      // console.log(data.data)
      console.log(data.data[0].images.preview_webp.url)

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


// // may need to  be more specific with this search
//       alert("No lyrics found!");
//       console.log(error)


searchButton.addEventListener("click", buttonClickHandler);


