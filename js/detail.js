$(document).ready(function() {
	
	var movieId, title, info, poster, genre, i, homepage, imdbId, imdb, imdbRating, jaar, release, director, key, filmDag, filmUur, filmZaal, a;
	
	//session store ophalen uit vorige js
	movieId = sessionStorage.getItem("movieId");
	console.log(movieId);
	
	//open de data API voor het weergeven van films op movieId
	$.getJSON("https://api.myjson.com/bins/3b6nb", function(data){
		
		//session store ophalen uit vorige js
		movieId = sessionStorage.getItem("movieId");
		
		//for-loop om alle gegevens weer te geven
		for (i = 0; i < data[movieId].length; i++){
			document.getElementById("plaats").innerHTML += "<h3 class='white'>"+data[movieId][i].Cinema+"</h3><div class='table-responsive col-md-12'><table class='table col-md-12'><thead><tr><th>Dag</th><th>Uur</th><th>Zaal</th></tr></thead><tbody id='programmatie"+i+"'></tbody></table></div>";
			
			//tweede for loop in eerste loop om alle gegevens weer te geven
			for(a = 0; a < data[movieId][i].Dagen.length ; a++){
				document.getElementById("programmatie"+i+"").innerHTML += "<tr><td>"+data[movieId][i].Dagen[a].Dag+"</td><td>"+data[movieId][i].Dagen[a].Uren+"</td><td>"+data[movieId][i].Dagen[a].Zalen+"</td></tr>";
				
			}
		}
		
		});
		
	
	//open de data API voor het weergeven van films op movieId
	$.getJSON("https://api.themoviedb.org/3/movie/"+ movieId +"?api_key=f32e0e7660d450db58d253702535beb2&language=en-US", function(data){
		title = data.original_title;
		info = data.overview;
		poster = data.poster_path;
		homepage = data.homepage;
		imdbId = data.imdb_id;	
	
		//wegschrijven van data in html detail.md
		
		document.getElementById("title").innerHTML += "<h1 class='white'>"+title+"</h1>";
		
		document.getElementById("info").innerHTML += "<p class='white'>"+info+"</p><hr>";
		
		document.getElementById("poster").innerHTML += "<img src='https://image.tmdb.org/t/p/w500"+poster+"' class='posterSize'/>";
		
		document.getElementById("site").innerHTML += "<p class='white' id='site'>Official Website: <a class='link' target=_blank href='"+ data.homepage +"'>"+data.homepage+"</a></p>";
		
		//weergeven van alle genres op detail.md
		for (i = 0; i < data.genres.length; i++){
		document.getElementById("genre").innerHTML += " "+data.genres[i].name+", ";
		}
		
		
		//open de data API voor het weergeven van imdb rating en andere zaken 
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


