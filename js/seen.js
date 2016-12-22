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
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("seen").child(movieId).child("seen").set("true");
		}
	
		});
	});
	
	
	
		
		
		
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){	
			movieId = sessionStorage.getItem("movieId");
			var rootRef = firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("seen").child(movieId);
			rootRef.on("value", snap =>{
				
				var seen = snap.child("seen").val();
				if (seen === "true"){
					$("#seen").hide();
					$("#removeSeen").show();
				}else{
					$("#seen").show();
					$("#removeSeen").hide();
				}
			});
		}
	});
	
	
	
	
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){	
			movieId = sessionStorage.getItem("movieId");
					
				$("#removeSeen").on("click", function(){	
				firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("seen").child(movieId).remove();
				});
			
		}
	});
	
	
	
	
	
	
	
});