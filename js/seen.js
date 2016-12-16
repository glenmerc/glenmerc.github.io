$( document ).ready(function() {
	
	"use strict";
	
	var movieId, movieName, poster;
	 
	$("#seen").on("click", function(){
		movieId = sessionStorage.getItem("movieId");
		movieName= sessionStorage.getItem("title");
		poster = sessionStorage.getItem("poster");
		firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("seen").child(movieId).child("moviename").set(movieName);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("seen").child(movieId).child("poster").set(poster);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("seen").child(movieId).child("movieId").set(movieId);
		}else{
		console.log("error")	;
		}
	
		});
	});
	
	$("#seen").on("click", function(){
		$(this).html("<p class='white'>added to seenlist <span class='glyphicon glyphicon-eye-open'></span></p>");
		});
	
});