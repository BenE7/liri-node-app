// require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");

// var client = new twitter(keys.twitter);
// var spotify = new spotify(keys.spotify);




// TWITTER SECTION //
var Twitter = require("twitter");


var client = new Twitter ({
  consumer_key: "n47g63rdCYtoRI34wdJhVBgq5",
  consumer_secret: "lgu1FUtDhTcoo3VH8DfdhAtX62fzIGinzQOOn3BNS75ZyhWx6W",
  access_token_key: "114863502-8d10xMnNfi4sO2Z4P0VyaJmlgSjeRDKsg1psnd3m",
  access_token_secret: "YNvKHU7Rnx7kQc9iYFXKRb7d8xRnOgGucQwJxuZDv1g03"
});

if(process.argv[2] == "my-tweets"){
	twitterApi();
};


function twitterApi(){


var params = {Axiom_DJ: "nodejs"};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	var tweetArr = [];
  if (!error){
  	for (var i = 0; i< 20; i++){
  		tweetArr.push(tweets[i].text);
  		tweetArr.push(tweets[i].created_at);

  	}
  	console.log(tweetArr);
   }
  });
};

// SPOTIFY SECTION //

var Spotify = require("node-spotify-api");

var spotify = new Spotify ({
  id: "84629ea4aba14ac7af896a4f13325690" ,
  secret: "1051054204504bef9e49032238063097"

});

if (process.argv[2] == "spotify-this-song"){
	spotifyApi();

}

function spotifyApi(){
	spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
		var spotArr = [];
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    spotArr.push("Artist: " + data.tracks.items[0].artists[0].name);
    spotArr.push("Title: " + data.tracks.items[0].name);
    spotArr.push("Preview: " + data.tracks.items[0].preview_url);
    spotArr.push("Album Name: " + data.tracks.items[0].album.name);

    console.log(spotArr);
});
}


// OMDB SECTION //

if(process.argv[2] == "movie-this"){

   if(process.argv[3] === undefined){
    OMDB("Mr.Nobody");
      }
       else {
        OMDB();
      }

  



  };



function OMDB (movie){
	request("http://www.omdbapi.com/?apikey=trilogy&t=" + process.argv[3], function(error, response, body){
    nobodyArr = [];
		movieArr = [];
		if (error){
			return;
		}
		else{
      var data = JSON.parse(body);
			movieArr.push("Title: " + data.Title);
      movieArr.push("Release Date: " + data.Released);
      movieArr.push("imdbRating: " + data.imdbRating);
      movieArr.push("Rotten Tomatoes: " + data.Ratings[1]);
      movieArr.push("Countries: " + data.Country);
      movieArr.push("Language: " + data.Language);
      movieArr.push("Plot: " + data.Plot);
      movieArr.push("Actors :" + data.Actors);

      


      console.log(movieArr);

		}
	});
};























