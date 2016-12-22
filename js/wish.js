$( document ).ready(function() {
	
	"use strict";
	
	var movieId, movieName, poster;
	
	//bij een klik op de tag met id wish stored hij alles naar de databes 
	$("#wish").on("click", function(){
		
		//haal benodigdheden uit de sessiontorage
		movieId = sessionStorage.getItem("movieId");
		movieName= sessionStorage.getItem("title");
		poster = sessionStorage.getItem("poster");
		
		//open de database en schrijf data weg
		firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("moviename").set(movieName);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("poster").set(poster);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("movieId").set(movieId);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("wish").set("true");
		}
	
		});//sluit if
	});//sluit de connectie met de database
	
	
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){	
			movieId = sessionStorage.getItem("movieId");
			var rootRef = firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId);
			rootRef.on("value", snap =>{
				
				var wish = snap.child("wish").val();
				if (wish === "true"){
					$("#wish").hide();
					$("#removeWish").show();
				}else{
					$("#wish").show();
					$("#removeWish").hide();
				}
			});
		}
	});
	
	
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){	
			movieId = sessionStorage.getItem("movieId");
					
				$("#removeWish").on("click", function(){	
				firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).remove();
				
				});
			
		}
	});
	
	
});