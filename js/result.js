$( document ).ready(function() {
	
	"use strict";
	var i, genreId, movie, posterId, posterPre, poster, movieId, page, url;
		
	
	
	genreId = sessionStorage.getItem("genreId");

	
	//if, de nowplaying is geen genre en heeft dus een andere behandeling nodig
	if (genreId === "0"){	
		
		$("#pager").addClass("hide");
		url = "https://api.themoviedb.org/3/movie/now_playing?api_key=f32e0e7660d450db58d253702535beb2&language=en-US";
		//open de data API voor het weergeven van "now playing"
		$.getJSON(url, function(data){
			
			//leegmaken van #movies
			$("#movies").html("");
			
			
			//aanmaak van elke film
			for (i = 0; i < 18; i++) {
				movie = data.results[i].original_title;
				posterId = data.results[i].poster_path;
				posterPre = "https://image.tmdb.org/t/p/w500";
				movieId = data.results[i].id;
    			document.getElementById("movies").innerHTML += "<div class='col-md-2 col-xs-6'><div class='movieVast'><a href='detail'><img class='posterSize movieId' alt='"+movieId+"' src='"+posterPre+posterId + "'/><p class='textVast'>"+ movie +"</p></a></div></div>";
			}
			
			//wanneer er geklikt wordt op een .movieId --> sessionstorage van alt-waarde
			$(".movieId").on("click", function(){
				movieId = $(this).attr("alt");
				sessionStorage.setItem("movieId", movieId);
				});
			
		});
	}else{
		
		$("#prev").on("click", function(){
		page--;
		sessionStorage.setItem("page", page);
		location.reload();
		});
			
		$("#next").on("click", function(){
		page++;
		sessionStorage.setItem("page", page);
		location.reload();
		});	
		
		
		page = sessionStorage.getItem("page");
		if (page == 1){
			$("#prev").addClass("disabled");
			document.getElementById("prev").disabled = true; 
		}else if (page === null){
			$("#prev").addClass("disabled");
			document.getElementById("prev").disabled = true; 
			page = 1;
		}else{
			$("#prev").removeClass("disabled");
			document.getElementById("prev").disabled = false; 
		}
		
		
		//open de data API voor het weergeven van films op genre
		$.getJSON("https://api.themoviedb.org/3/genre/"+ genreId +"/movies?api_key=f32e0e7660d450db58d253702535beb2&language=en-US&include_adult=false&sort_by=created_at.asc&page="+page+"", function(data){
			
			//leegmaken van #movies
			$("#movies").html("");
			
			//aanmaak van elke film
			for (i = 0; i < 18; i++) {
			movie = data.results[i].original_title;
			posterId = data.results[i].poster_path;
			posterPre = "https://image.tmdb.org/t/p/w500";
			poster = posterPre + posterId;
			
				// if geen posterId dan laden we een placeholder in
				if (posterId === null){
					poster = "../img/noImage.jpg";
					}
				
				
			movieId = data.results[i].id;
    		document.getElementById("movies").innerHTML += "<div class='col-md-2 col-xs-6'><div class='movieVast'><a href='detail'><img class='posterSize movieId' alt='"+movieId+"' src='" + poster + "'/><p class='textVast'>"+ movie +"</p></a></div></div>";
			}
			
			
			//wanneer er geklikt wordt op een .movieId --> sessionstorage van alt-waarde
			$(".movieId").on("click", function(){
				movieId = $(this).attr("alt");
				sessionStorage.setItem("movieId", movieId);
				});
		});
	}
	
	

	
});