$( document ).ready(function() {
	
	"use strict";
	
	var movieId, counterRef, counter, movieName, poster, nr;
	
	
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			counterRef = firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("seen").child("counter");
			counterRef.on('value', function(snapshot){
  				counter = snapshot.val();
			sessionStorage.setItem("counter", counter);
			});
		}else{
		console.log("error")	;
		}
		});
		
	counter = sessionStorage.getItem("counter");
	 
	$("#seen").on("click", function(){
		movieId = sessionStorage.getItem("movieId");
		movieName= sessionStorage.getItem("title");
		poster = sessionStorage.getItem("poster");
		counter++;
		firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("seen").child("counter").set(counter);
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