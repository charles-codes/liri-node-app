// Variable for requiring dotenv package //
require("dotenv").config();

// Variable for requiring keys file //
var keys = require("./keys.js");

// Variable for requiring node package to read and write files //
var fs = require("fs");

// Variables for requiring node packages for each API //
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
moment().format();

// Variable for Spotify API key and ids //
var spotify = new Spotify(keys.spotify);

// Variables for both the command and the command string query //
var commandType = process.argv[2];
var commandStr = process.argv.slice(3).join(" ");

// Input arguments logic //
switch(commandType) {
    case 'spotify-this-song':
        callSpotify(commandStr);
        break;

    case 'movie-this':
        callOMDB(commandStr);
        break;

    case 'concert-this':
        callBandsInTown(commandStr);
        break;
    
    case 'do-what-it-says':
        callWhatItSays();
        break;
};

// Function for Spotify //
function callSpotify(commandStr) {
    if(!commandStr){
        commandStr = "hello";
    }
    spotify
    .search({ type: 'track', query: commandStr })
    .then(function(response){
        for (var i = 0; i < 5; i++) {
            var songs = 
                "-------------------------------------------------------------" +
                "\nArtist(s): " + response.tracks.items[i].artists[0].name +
                "\nSong Name: " + response.tracks.items[i].name +
                "\nPreview Link: " + response.tracks.items[i].preview_url +
                "\nAlbum Name: " + response.tracks.items[i].album.name +
                "-------------------------------------------------------------";
            console.log(songs);
        }
    })
    .catch(function(err){
        console.log(err);
    });
}

// Function for OMDB //
function callOMDB(commandStr) {
    if (!commandStr){
        commandStr = "lost in space";
    }
    axios.get("https://omdbapi.com/?t=" + commandStr + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        var movies = 
            "-------------------------------------------------------------" +
            "\nMovie Title: " + response.data.Title +
            "\nYear of Release: " + response.data.Year +
            "\nIMDB Rating: " + response.data.imdbRating +
            "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
            "\nCountry of Production: " + response.data.Country +
            "\nLanguage: " + response.data.Language +
            "\nPlot: " + response.data.Plot +
            "\nActors: " + response.data.Actors +
            "-------------------------------------------------------------";

        console.log(movies);
    })
    .catch(function(error){
        console.log(error);
    });
}

// Function for Bands in Town //
function callBandsInTown(commandStr) {
    axios.get("https://rest.bandsintown.com/artists/" + commandStr + "/events?app_id=codingbootcamp")
    .then(function(response){
        for (var i = 0; i < response.data.length; i++) {
            var datetime = response.data[i].datetime;

            var concerts = 
                "-------------------------------------------------------------" +
                "\nVenue Name: " + response.data[i].venue.name +
                "\nVenue Location: " + response.data[i].venue.city +
                "\nDate of the Event: " + moment(datetime).format("MM-DD-YYYY") +
                "-------------------------------------------------------------";
        console.log(concerts);
        }
    })
    .catch(function(error){
        console.log(error);
    });
}

// Function for do this //
function callWhatItSays(commandStr) {
    fs.readFile("random.txt", "utf8", function (error, data){
        if (error) {
            return console.log(error);
        }
        callSpotify(data);
    })
}