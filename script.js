// var movies = [
// 		{
// 			name:"Dark Knight", 
// 			rating: 4.5, 
// 			hasWatched: true
// 		},	
// 		{
// 			name:"Fantastic Mr. Fox", 
// 			rating: 5, 
// 			hasWatched: true
// 		},	
// 		{
// 			name:"Matrix 2", 
// 			rating: 3, 
// 			hasWatched: false
// 		},	
// 		{
// 			name:"Dark Knight", 
// 			rating: 4.5, 
// 			hasWatched: true
// 		},
// ];

// movies.forEach(function(movie) {
// 	var result = "You have ";
// 	if(movie.hasWatched === true){
// 		result += "watched ";
// 	}
// 	else if(movie.hasWatched === false){
// 		result += "not seen ";
// 	}

// 	result+= movie.name + " - " + movie.rating + " stars";

// 	console.log(result);
// });

var hOne = document.querySelector("h1");
var paragraph = document.querySelector("p");

paragraph.addEventListener("click", function() {
	hOne.textContent = "booger";
});

