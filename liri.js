require("dotenv").config();

var keys = require("./keys.js");

// variables for API keys and ids //
var spotify = new spotify(keys.spotify);
var omdb = new omdb(keys.omdb);
var bandsInTown = new bandsInTown(keys.bandsInTown);

// Variables for both the command and the search query //
var command = process.argv[2];
var search = process.argv[3];

// Variables for search query URLS for the different APIS //
var querySpotify = "https://api.spotify.com/v1/search?q" + search + "&type=track" + spotify; 
var queryOMDB = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
var queryBIT = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";

// Function for Spotify API search and data return //
spotify.spotify(search)
.then(function(spotifyRes){
    console.log(spotifyRes)
})
.catch(function(err){
    console.log(err);
});

// Function for OMDB API search and data return //
omdb.omdb(search)
.then(function(omdbRes){
    console.log(omdbRes)
})
.catch(function(err){
    console.log(err)
});

// Function for Bands in Town API search and data return //
bandsInTown.bandsInTown(search)
.then(function(bitRes){
    console.log(bitRes)
})
.catch(function(err){
    console.log(err)
});
