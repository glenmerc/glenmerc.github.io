$( document ).ready(function() {
	
	"use strict";
	
	//open de connectie met de database
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			var rootRef = firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish");
			rootRef.on("child_added", snap =>{
				
				//haal de benodigde zaken op uit de database
				var movieId = snap.child("movieId").val();
				var moviename = snap.child("moviename").val();
				var poster = snap.child("poster").val();
				var posterPre = "https://image.tmdb.org/t/p/w500";
				
				
				//geef de zaken weer in de HTML
				$("#wishList").append("<div class='col-md-2 col-xs-6'><div class='movieVast'><a href='detail'><img class='posterSize movieId' alt='"+movieId+"' src='"+poster + "'/><p class='textVast'>"+ moviename +"</p></a></div></div>");
				$(".col-md-2:has(img[alt=null])").remove();
				
				
			//wanneer er geklikt wordt op een .movieId --> sessionstorage van alt-waarde
			$(".movieId").on("click", function(){
				var movieId = $(this).attr("alt");
				sessionStorage.setItem("movieId", movieId);
				});
				
			});
		}
	});//sluit de datbaseconnectie
});