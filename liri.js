require("dotenv").config();

console.log(require('dotenv').config())

var keys = require("./keys.js");

var Spotify = require ('node-spotify-api');
var axios = require ('axios');
var moment = require ('moment');

var fs = require ('fs');



var spotify = new Spotify(keys.spotify);




var nodeArgs = process.argv;

var MovieSongBand = process.argv[3];


console.log(command);
console.log(process.argv);


var command = process.argv[2];



switch (command) {
    case ('concert-this'):
    getConcert(MovieSongBand);
    break;

    case ('spotify-this-song'):
       spotifySong(MovieSongBand);
        break;
    
    case ('movie-this'):
        getMovie(MovieSongBand);
        break;
   
   
    case ('do-what-it-says'):
    liriSays();
    break;          
};





 function getMovie(MovieSongBand) {
  
  var movie;

 
if (MovieSongBand == null) {
    movie = "Mr. Nobody";
  }else {
    movie = MovieSongBand;
  };

var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

axios.get(queryUrl).then(
  function(response,) {

    

    for(i=0; i < response.length; i++)
    console.log("The movie's rating is: " + response.data.imdbRating);
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

function spotifySong (MovieSongBand) {
  var song;
  
  if (MovieSongBand == null) {
    song = "The Sign";
  }else {
    song = MovieSongBand;
  }

  spotify.search({ type: 'track', query: song,})
    .then(function(response) {
      var response = response.tracks.items[0];
     if (response) {
      var songData = [
        "Artists: " + response.artists[0].name,
        "Song Name: " + response.name,
        "Preview: " + response.preview_url,
        "Album: " + response.album.name
      ].join("\n")
      console.log(songData);

     } else {
       console.log("could not find match for song");

     }})
       .catch(function(err) {
        console.log(err);
       
       })

      };
   
  
    
    
    
    
    
    

     






  function getConcert (MovieSongBand) {
  var artist;

  if (MovieSongBand == null) {
    console.log ("you didn't search for anything!");
  }else {
    artist = MovieSongBand;
  };


  
  

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


