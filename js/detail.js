$(document).ready(function() {
	
	var movieId, title, info, poster, genre, i, homepage, imdbId, imdb, imdbRating, jaar, release, director, key, cinema, filmDag, filmUur, filmZaal;
	
	
	movieId = sessionStorage.getItem("movieId");
	console.log(movieId);
	
	//open de data API voor het weergeven van films op movieId
	$.getJSON("/js/uurregeling.json", function(data){
		movieId = sessionStorage.getItem("movieId");
		cinema = data[movieId].Cinema;
		filmDag = data[movieId].Dagen[i].Dag;
		filmUur = data[movieId].Dagen[i].Uren;
		filmZaal = data[movieId].Dagen[i].Zalen;
		
		console.log(cinema);
		
		document.getElementById("plaats").innerHTML += "<h3 class='white'>"+cinema+"</h3>";
		
		for (i = 0; i < data[movieId].Dagen.length; i++){
		document.getElementById("programmatie").innerHTML += "<tr><td>"+data[movieId].Dagen[i].Dag+"</td><td>"+data[movieId].Dagen[i].Uren+"</td><td>"+data[movieId].Dagen[i].Zalen+"</td></tr>";
		}
		
		});
	
	//open de data API voor het weergeven van films op movieId
	$.getJSON("https://api.themoviedb.org/3/movie/"+ movieId +"?api_key=f32e0e7660d450db58d253702535beb2&language=en-US", function(data){
		title = data.original_title;
		info = data.overview;
		poster = data.poster_path;
		homepage = data.homepage;
		imdbId = data.imdb_id;	
	
		
		console.log(imdbId);
		console.log(homepage);
		
		document.getElementById("title").innerHTML += "<h1 class='white'>"+title+"</h1>";
		
		document.getElementById("info").innerHTML += "<p class='white'>"+info+"</p><hr>";
		
		document.getElementById("poster").innerHTML += "<img src='https://image.tmdb.org/t/p/w500"+poster+"' class='posterSize'/>";
		
		document.getElementById("site").innerHTML += "<p class='white' id='site'>Official Website: <a class='link' target=_blank href='"+ data.homepage +"'>"+data.homepage+"</a></p>";
		
		
		for (i = 0; i < data.genres.length; i++){
		document.getElementById("genre").innerHTML += " "+data.genres[i].name+", ";
		}
		
		
		//open de data API voor het weergeven van imdb rating
		$.getJSON("https://www.omdbapi.com/?i="+imdbId+"&plot=short&r=json&apikey=95882ccc", function(data2){
		imdbRating = data2.imdbRating;
		jaar = data2.Year;
		release = data2.Released;
		director = data2.Director;
		
		document.getElementById("site").innerHTML += "<p class='white' id='site'>IMDB-rating: <span style='font-weight:bolder;font:20px'>"+imdbRating+ "</span> /10</p><hr>";
		
		document.getElementById("year").innerHTML += "<p class='white'>Release Date: "+release+", "+jaar+"</p>";
		
		document.getElementById("director").innerHTML += "<p class='white'>Director: "+director+"</p>";
		});
		
		//open de data API voor het weergeven van trailer
		$.getJSON("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=f32e0e7660d450db58d253702535beb2&language=en-US", function(data3){
			key = data3.results[0].key;
			console.log(key);
			
			document.getElementById("video").innerHTML += "<div class='margin embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='//www.youtube.com/embed/"+key+"'></iframe></div>";
			
		});
	
	});	
});


