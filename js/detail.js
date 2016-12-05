$(document).ready(function() {
	
	var movieId, title, info, poster;
	
	
	movieId = sessionStorage.getItem("movieId");
	console.log(movieId);
	
	//open de data API voor het weergeven van films op movieId
	$.getJSON("https://api.themoviedb.org/3/movie/"+ movieId +"?api_key=f32e0e7660d450db58d253702535beb2&language=en-US", function(data){
		title = data.original_title;
		info = data.overview;
		poster = data.poster_path;
		
		document.getElementById("title").innerHTML += "<h1 class='white'>"+title+"</h1>";
		document.getElementById("info").innerHTML += "<p class='white'>"+info+"</p>";
		document.getElementById("poster").innerHTML += "<img src='https://image.tmdb.org/t/p/w500"+poster+"' class='posterSize'/>";
		});
	
});