$( document ).ready(function() {
	
	"use strict";
	
	var movieId, movieName, poster;
	 
	$("#wish").on("click", function(){
		movieId = sessionStorage.getItem("movieId");
		movieName= sessionStorage.getItem("title");
		poster = sessionStorage.getItem("poster");
		firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("moviename").set(movieName);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("poster").set(poster);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("movieId").set(movieId);
		}else{
		console.log("error")	;
		}
	
		});
	});
	
	$("#wish").on("click", function(){
		$(this).html("<p class='white'>added to wishlist <span class='glyphicon glyphicon-eye-open'></span></p>");
		});
	
});