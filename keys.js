console.log("Keys are loaded");

//var keys = {
  //  id: process.env.SPOTIFY_ID,
    //secret: process.env.SPOTIFY_SECRET
//};

//module.exports = {
//    keys: keys
//};

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
}