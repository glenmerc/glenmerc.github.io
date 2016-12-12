$(document).ready(function() {
	
	"use strict";
	var movieId, title, info, poster, i, homepage, imdbId, imdbRating, jaar, release, director, key, a;
	
	//session store ophalen uit vorige js
	movieId = sessionStorage.getItem("movieId");
	console.log(movieId);
	
	//open de data API voor het weergeven van films op movieId
	$.getJSON("https://api.myjson.com/bins/6rf71", function(data){
		
		//session store ophalen uit vorige js
		movieId = sessionStorage.getItem("movieId");
		console.log(data[movieId]);
		
		
		//if geen programmatie
			if (data[movieId] === undefined){
				$("#programmatie").addClass("hide");
				}
	
		
		//for-loop om alle gegevens weer te geven
		for (i = 0; i < data[movieId].length; i++){
			document.getElementById("plaats").innerHTML += "<li role='presentation' id='test"+[i]+"'><a class='white'>"+data[movieId][i].Cinema+"</a></li>";	
		}
		
		
		function basic(){
			document.getElementById("gegevens").innerHTML ="";
			$("#test0").addClass("active");
			$("#test1").removeClass("active");
			$("#test2").removeClass("active");
		
			for (i = 0; i < data[movieId][0].Dagen.length; i++){
				document.getElementById("gegevens").innerHTML += "<tr><td><h5 class='white'>"+data[movieId][0].Dagen[i].Dag+"</h5></td><td><h5 class='white'>"+data[movieId][0].Dagen[i].Uren+"</h5></td><td><h5 class='white'>"+data[movieId][0].Dagen[i].Zalen+"</h5></td></tr>";
				}
			}
		basic();
			
			
		$("#test0").on("click", function(){
			document.getElementById("gegevens").innerHTML ="";
			$("#test0").addClass("active");
			$("#test1").removeClass("active");
			$("#test2").removeClass("active");
			
			for (i = 0; i < data[movieId][0].Dagen.length; i++){
				document.getElementById("gegevens").innerHTML += "<tr><td><h5 class='white'>"+data[movieId][0].Dagen[i].Dag+"</h5></td><td><h5 class='white'>"+data[movieId][0].Dagen[i].Uren+"</h5></td><td><h5 class='white'>"+data[movieId][0].Dagen[i].Zalen+"</h5></td></tr>";
				}
			});
			
		$("#test1").on("click", function(){
			document.getElementById("gegevens").innerHTML ="";
			$("#test0").removeClass("active");
			$("#test1").addClass("active");
			$("#test2").removeClass("active");
			
			for (i = 0; i < data[movieId][1].Dagen.length; i++){
				document.getElementById("gegevens").innerHTML += "<tr><td><h5 class='white'>"+data[movieId][1].Dagen[i].Dag+"</h5></td><td><h5 class='white'>"+data[movieId][1].Dagen[i].Uren+"</h5></td><td><h5 class='white'>"+data[movieId][1].Dagen[i].Zalen+"</h5></td></tr>";
				}
			
			});
			
		$("#test2").on("click", function(){
			document.getElementById("gegevens").innerHTML ="";
			$("#test0").removeClass("active");
			$("#test1").removeClass("active");
			$("#test2").addClass("active");
			
			for (i = 0; i < data[movieId][2].Dagen.length; i++){
				document.getElementById("gegevens").innerHTML += "<tr><td><h5 class='white'>"+data[movieId][2].Dagen[i].Dag+"</h5></td><td><h5 class='white'>"+data[movieId][2].Dagen[i].Uren+"</h5></td><td><h5 class='white'>"+data[movieId][2].Dagen[i].Zalen+"</h5></td></tr>";
				}
			
			});
		
		
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
	
});


