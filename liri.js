require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require ('node-spotify-api');
var axios = require ('axios');
var moment = require ('moment');

var fs = require ('fs');



var spotify = new Spotify(keys.spotify);




var nodeArgs = process.argv;
var command = process.argv[2];
var MovieSongBand = "";
for (var i=3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        MovieSongBand = MovieSongBand + "+" + nodeArgs[i];
    }else {
        MovieSongBand += nodeArgs[i];
    }
}

console.log(command);
console.log(process.argv);
askLiri();


askLiri = function () {

switch (command) {
    case ('concert-this'):
    getConcert();
    break;

    case ('spotify-this-song'):
        if (nodeArgs[i]) {
            spotifySong(nodeArgs[i]);
         } else {
                spotifySong("The Sign");   
            }
        break;
    
    case ('movie-this'):
         if (nodeArgs[i]) {
             getMovie(nodeArgs[i]);
         }  else {
             getMovie("Mr. Nobody");
         } 
        break;
   
   
    case ('do-what-it-says'):
    liriSays();
    break;          
};
}





getMovie = function (movieName) {

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

axios.get(queryUrl).then(
  function(response, body) {

    var data = JSON.parse(body); 

    for(i=0; i < data.length; i++)
    console.log("Release Year: " + response.data.Year);
  })
  .catch(function(error) {
    if (error.response) {
      
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      
      console.log(error.request);
    } else {
      
      console.log("Error", error.message);
    }
    console.log(error.config);
  

});
}

spotifySong = function (song) {

}



getConcert = function (artist) {

    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
   
    console.log(queryUrl);
    
    axios.get(queryUrl).then(
      function(response) {
        console.log("Release Year: " + response.data.Year);
      })
      .catch(function(error) {
        if (error.response) {
          
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
         
          console.log(error.request);
        } else {
          
          console.log("Error", error.message);
        }
        console.log(error.config);
      
    
    });
};

liriSays = function () {

}


