var apiCall = function(){

  var artist = "Coldplay";
  var title = "Adventure of a Lifetime";

  var apiUrl = `https://api.lyrics.ovh/v1/${artist}/${title}`

  //var apiUrl = `https://api.ksoft.si/lyrics/search/`

  // var apiUrl = `https://api.ksoft.si/lyrics/artist/100/`
  
  fetch(apiUrl)
  //handles the data in json format. res = response
  .then(function(res){
      return res.json()
  })
  //info from api will be stored in Data
  .then(function(data){
      console.log(data);
  })
}
apiCall();