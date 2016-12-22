$(document).ready(function() {
	
	"use strict";
	var movieId, title, info, poster, posterId, posterPre, i, homepage, imdbId, imdbRating, jaar, release, director, key, genreId, query;
	
	//session store ophalen uit vorige js
	movieId = sessionStorage.getItem("movieId");
	
	
	//open de data API voor het weergeven van films op movieId
	$.getJSON("../js/uurregeling.json", function(data){
		
		//session store ophalen uit vorige js
		movieId = sessionStorage.getItem("movieId");
		
		//if geen programmatie
			if (data[movieId] === undefined){
				$("#programmatie").addClass("hide");
				}
	
		
		//for-loop om alle gegevens weer te geven
		for (i = 0; i < data[movieId].length; i++){
			document.getElementById("plaats").innerHTML += "<li role='presentation' id='cinema"+[i]+"'><a class='white'>"+data[movieId][i].Cinema+"</a></li>";	
		}
		
		
		
		});
		
		
	
	//open de data API voor het weergeven van films op movieId
	$.getJSON("https://api.themoviedb.org/3/movie/"+ movieId +"?api_key=f32e0e7660d450db58d253702535beb2&language=en-US", function(data){
		title = data.original_title;
		sessionStorage.setItem("title",title);
		info = data.overview;
		posterId = data.poster_path;
		posterPre = "https://image.tmdb.org/t/p/w500";
		poster = posterPre+posterId;
		sessionStorage.setItem("poster",poster);
		homepage = data.homepage;
		imdbId = data.imdb_id;	
		
		// if geen posterId dan laden we een placeholder in
				if (posterId === null){
					poster = "../img/noImage.jpg";
					}
	
		//wegschrijven van data in html detail.md
		
		document.getElementById("title").innerHTML += "<h1 class='white'>"+title+"</h1>";
		
		document.getElementById("info").innerHTML += "<p class='white'>"+info+"</p><hr>";
		
		document.getElementById("poster").innerHTML += "<img src='"+poster+"' class='posterSize'/>";
		
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
			
			
			document.getElementById("video").innerHTML += "<div class='margin embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='//www.youtube.com/embed/"+key+"'></iframe></div>";
			
		});
		
		
		$.getJSON("https://api.themoviedb.org/3/movie/"+movieId+"/similar?api_key=f32e0e7660d450db58d253702535beb2&language=en-US&page=1",function(data){
		movieId = data.results[i].id;
		poster = data.results[i].poster_path;
	
		for (i = 0; i < 6; i++){
		document.getElementById("similar").innerHTML += "<div class='col-md-2 col-sm-4 col-xs-4'><a href='detail'><img alt='"+data.results[i].id+"' class='movieId similarPoster' src='https://image.tmdb.org/t/p/w500"+data.results[i].poster_path+"'></img></a></div>";
		}
		
		//wanneer er geklikt wordt op een .movieId --> sessionstorage van alt-waarde
			$(".movieId").on("click", function(){
				movieId = $(this).attr("alt");
				sessionStorage.setItem("movieId", movieId);
				});
		
		});
		
		
	
	});	
	
	//open de data API voor aanmaak van genre Buttons op index
	$.getJSON("https://api.themoviedb.org/3/genre/movie/list?api_key=f32e0e7660d450db58d253702535beb2&language=en-us", function(data){
		
		//aanmaak van alle genre buttons op index
		for (i = 0; i < data.genres.length; i++) {
		document.getElementById("genreDropdown").innerHTML += "<li class='genreList' value='"+ data.genres[i].id +"'><a>"+ data.genres[i].name+"</a></li>";
		}	
		
		//weergeven van de genreId
		$(".genreList").on("click", function(){
			genreId = this.value;
			
			//sessionstore om value later te gebruiken
			sessionStorage.setItem("genreId",genreId);
			window.location.href = "result";
			});	
	});
	
	
		

	
	
});


