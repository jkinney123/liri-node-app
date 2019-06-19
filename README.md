# liri-node-app

Liri Bot similar to Iphone's Siri, however Siri interprets speech while Liri Bot interprets user-input. Liri is a command-line node app that takes in paramaters and gives the user back data. 


# ORGANIZATION 
- To get Liri running I created four different functions relative to each command Liri is able to give. To get those functions working I referenced them inside of a switch/command function. 

- Liri takes in 4 different commands. 

# TECHNOLOGY USED
- Javascript
- Node Js
- Node Packages
    - Node-Spotify-API
    - Axios
    - Moment
    - fs
    - DotEnv
- API's
    - OMDB 
    - BandsInTown
- Git Bash 

# INSTRUCTIONS
  
  -Follow the instructions under each command
  -there are no quotes surrounding user input 
 
 - Command 1 = "concert-this"
      - (User Input) = node liri.js concert-this <"Your Band or Artist">
      
      ![image](https://user-images.githubusercontent.com/48601772/59808117-7113a600-92c0-11e9-9623-a453531c61bc.png)
      
      What should display is the venue name, country, and start time and date. 
      Unfortunately I could only get the Time and Date of the venue for now. I had troubles retrieving the name and country.
                                                       
 
 - Command 2 = "spotify-this-song"
      - (User Input) = node liri.js spotify-this-song <"Your Song">
      
      ![image](https://user-images.githubusercontent.com/48601772/59808190-cc459880-92c0-11e9-9292-9652cde8e6e0.png)
      
      The Artist, Song name, and Preview Link will display
 
 
 - Command 3 = "movie-this" 
      - (User Input) = node liri.js movie-this <"Your Movie">
      
      ![image](https://user-images.githubusercontent.com/48601772/59808152-a4eecb80-92c0-11e9-9e67-6cea25097ba7.png)
      
      The Movie's title, release year, IMDB score, rottentomatoes score, country where filmed, language, plot, and actors will display
      
 - Command 4 = "do-what-it-says" 
      - (User Input) = node liri.js do-what-it-says  
      
      ![image](https://user-images.githubusercontent.com/48601772/59808209-e7b0a380-92c0-11e9-9483-0877be3e685c.png)
      
      liri will read user input in the random.txt file and run the command within
      
      
  https://jkinney123.github.io/liri-node-app/.


