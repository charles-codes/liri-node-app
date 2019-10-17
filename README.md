# liri-node-app

LIRI Overview:

A command line interface app called LIRI for pulling data from Spotify, OMDB, and Bands in Town.

LIRI allows a user to access information on music, movies, and concert tour dates quickly and seamlessly. As a command line interface (CLI) app, LIRI streamlines the search process by reducing the search functions to several quick commands. It also unclutters the display so any outputs are easily read and digested. 

LIRI App Organization:

LIRI uses the terminal and a short series of two simple commands to access one of four functions which make API requests and return the appropriate information based on the user's search query.

LIRI Instructions:

1. Open the terminal.
2. Proceed to the correct directory which holds the LIRI app and all accessory files and components.
3. Run the following command: 

    node liri.js 'command type' 'command string'

    Here 'command type' refers to one of four different command types which trigger the appropriate function for the app to run. The four different command types are: 'spotify-this-song', 'movie-this', 'concert-this', and 'do-what-it-says'.

    Furthermore, 'command string' is the parameter which will include the search value, e.g., 'taylor swift', 'the princess bride', 'another one bites the dust'.

    Command Types:

    'spotify-this-song' will call the function which requests information from the Spotify API and will return the artist(s) name, the song name, the preview link, and the album name of the song which the user searched for.

    'movie-this' will call the function which requests information from the Online Movie Database (OMDB) API and will return the movie title, year of release, IMDB rating, Rotten Tomatoes rating, country of production, language, short plot summary, and the prominent actors and actresses of the film which the user searched for.

    'concert-this will call the function which requests information from the Bands in Town API and will return the concert venue, the venue location, and the date of event for whichever artist the user searched for. 

    'do-what-this-says' will call the function which reads an included text file titled 'random.txt' and will read the included command type and command string and proceed accordingly. 

    Search example:

    'node liri.js movie-this jaws'

    The aformentioned search example will trigger the 'movie-this' function and include the search value of 'jaws', which will return the appropriate data from the film 'Jaws'. 

LIRI Demonstration:

At the following link you can access a video demo of the LIRI app functionality: 



LIRI Technologies:

LIRI utilizes JavaScript, Node, Axios, Moment, and the following APIs: Spotify, OMDB, and Bands in Town. 

LIRI Authorship:

Charles Tuggle made this app. It would have been difficult to impossible to make the app without the tutelage of the staff at George Washington University's Full Stack Web Development Program. Charles would like to offer special thanks to his peers, instructor, and teaching assistants. Thanks!

