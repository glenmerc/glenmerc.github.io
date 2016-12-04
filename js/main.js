$( document ).ready(function() {
	
var i = 0, 
	poster,
	movie,
	page, //nodig wanneer pagination wordt geïmplementeerd
	genreId,
	nowPlaying,
	input; //nodig wanneer searchbar wordt gebruikt
	
	
	
	
	
	//open de data API voor aanmaak van genre Buttons op index
	$.getJSON("https://api.themoviedb.org/3/genre/movie/list?api_key=f32e0e7660d450db58d253702535beb2&language=en-us", function(data3){
		
		//aanmaak van alle genre buttons op index
		for (i = 0; i < data3.genres.length; i++) {
		document.getElementById("genreButtons").innerHTML += "<div class='col-md-3 col-xs-12'><button class='btnMarge btn btn-primary col-md-12 col-xs-12' value='"+ data3.genres[i].id +"'>"+ data3.genres[i].name+"</button></div>";
		}	
		
		//weergeven van de genreId
		$(".btnMarge").on("click", function(){
			genreId = this.value;
			console.log(genreId);
			
			//sessionstore om in volgende pagina te gebruiken
			sessionStorage.setItem("genreId",genreId);
			window.location.href = "result";
			});	
	});
	
	
	//open de data API voor aanmaak van genreList op result
	$.getJSON("https://api.themoviedb.org/3/genre/movie/list?api_key=f32e0e7660d450db58d253702535beb2&language=en-us", function(data5){
		
		//aanmaak van alle genre li's
		for (i = 0; i < data5.genres.length; i++) {
		document.getElementById("genresDropdown").innerHTML += "<li class='listGenre' id='' value='"+ data5.genres[i].id +"'><a>"+data5.genres[i].name+"</a></li>";
		}	
		
		//weergeven van de genreId
		$(".listGenre").on("click", function(){
			genreId = this.value;
			
			//IF wanneer genreId 0 is geeft hij de nowPlaying terug
			if(genreId === 0){
			$.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=f32e0e7660d450db58d253702535beb2&language=en-US", 
				function(data){
		
					//aanmaak van elke film
					for (i = 0; i < data.results.length; i++) {
						movie = data.results[i].original_title;
						poster = data.results[i].poster_path;
    					document.getElementById("movies").innerHTML += "<div class='col-md-2 col-xs-6'><a href='#'><div class='movieVast'><img class='posterSize' src='https://image.tmdb.org/t/p/w500" + poster + "'/><p class='textVast'>"+ movie +"</p></div></a></div>";
					}
			
					//leegmaken van sessionstorage
					genreId = "";
					genreId = sessionStorage.setItem("genreId", genreId);	
			});
				
			}
			
			//sessionstore om in volgende pagina te gebruiken
			sessionStorage.setItem("genreId",genreId);
			window.location.href = "result";
			});	
	});
	
	
	
	/* BIJ GEBRUIK VAN SEARCHBAR
	$("#submit").on("click", function(){
		input = document.getElementById('searchInput').value;
		$.getJSON("https://api.themoviedb.org/3/genre/movie/list?api_key=f32e0e7660d450db58d253702535beb2&language=en-us", function(data2){
		
		genre = data2.genres;
		
		for (i = 0; i < genre.length; i++) {
			if (input === data2.genres[i].name){
				console.log(data2.genres[i].id);
				genreId = data2.genres[i].id;
				break;
			}
				
				}
    		
		
	});
	});*/
	
	//vastzetten van variabele genreId met de sessionstorage
	genreId = sessionStorage.getItem("genreId");
	
	//button link naar result nowplaying
	$("#nowPlaying").click(function(){
		window.location.href = "result";
		});
	
	
	
	//IF wanneer genreId leeg is geeft de functie "now playing" weer anders geeft hij een genre weer
	if (genreId === ""){
	
	//open de data API voor het weergeven van "now playing"
	$.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=f32e0e7660d450db58d253702535beb2&language=en-US", function(data){
		
		//aanmaak van elke film
		for (i = 0; i < data.results.length; i++) {
			movie = data.results[i].original_title;
			poster = data.results[i].poster_path;
    		document.getElementById("movies").innerHTML += 
			"<div class='col-md-2 col-xs-6'><div class='movieVast'><a href='detail'><img class='posterSize' src='https://image.tmdb.org/t/p/w500" + poster + "'/><p class='textVast'>"+ movie +"</p></a></div></div>";
			
			//leegmaken van sessionstorage
			genreId = "";
			genreId = sessionStorage.setItem("genreId", genreId);
			
		}
		});
	}else{
		
		//open de data API voor het weergeven van films op genre
		$.getJSON("https://api.themoviedb.org/3/genre/"+ genreId +"/movies?api_key=f32e0e7660d450db58d253702535beb2&language=en-US&include_adult=false&sort_by=created_at.asc", function(data){
		
		//aanmaak van elke film
		for (i = 0; i < data.results.length; i++) {
			movie = data.results[i].original_title;
			poster = data.results[i].poster_path;
    		document.getElementById("movies").innerHTML += 
			"<div class='col-md-2 col-xs-6'><a><div class='movieVast'><a href='detail'><img class='posterSize' src='https://image.tmdb.org/t/p/w500" + poster + "'/><p class='textVast'>"+ movie +"</p></a></div></a></div>";
			
			//leegmaken van sessionstorage
			genreId = "";
			genreId = sessionStorage.setItem("genreId", genreId);
		}	
		
	});
	} //endif
});