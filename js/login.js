$( document ).ready(function() {
	
	
	//verkrijg de values van loginscherm
	const txtEmail = document.getElementById("txtEmail");
	const txtPassword = document.getElementById("txtPassword");
	const btnSignUp = document.getElementById("btnSignUp");
	const btnLogin = document.getElementById("btnLogin");
	const btnLogout = document.getElementById("btnLogout");
	
	//voeg sign up event toe
	btnSignUp.addEventListener("click", e =>{
		//verkrijg de values
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign up
		const promise = auth.createUserWithEmailAndPassword(email,pass);
		promise.catch(e => alert(e.message));
		});
	
	
	//voeg login event toe
	btnLogin.addEventListener("click", e =>{
		//verkrijg de values
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign-in
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e => alert(e.message));
		});
	
	
	//voeg log out event toe
	btnLogout.addEventListener("click", e =>{
		//verkrijg de values
		firebase.auth().signOut();
		});
	
	//realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			$("#btnLogout").removeClass("hide");
			$("#btnSeen").removeClass("hide");
			$("#btnWish").removeClass("hide");
			$("#seen").removeClass("hide");
			$("#wish").removeClass("hide");
			$("#btnCalendar").removeClass("hide");
			$("#orSpan").addClass("hide");
			$("#btnLogin").addClass("hide");
			$("#btnSignUp").addClass("hide");
			$("#btnFacebook").addClass("hide");
			$("#btnGoogle").addClass("hide");
			$("#btnGithub").addClass("hide");
			$("#txtEmail").addClass("hide");
			$("#txtPassword").addClass("hide");
			$("#loginHeader").html("Welcome <br>to<br> Morelikeit");
			$("#removeSeen").removeClass("hide");
			$("#removeWish").removeClass("hide");
			if (firebaseUser.displayName){
				$("#logged-in").html("Logged in as "+firebaseUser.displayName+" <span class='caret'></span>");
			}else{
				$("#logged-in").html("Logged in as "+firebaseUser.email+" <span class='caret'></span>");
			}
		}else{
			$("#btnLogout").addClass("hide");
			$("#btnSeen").addClass("hide");
			$("#btnWish").addClass("hide");
			$("#btnCalendar").addClass("hide");
			$("#seen").addClass("hide");
			$("#wish").addClass("hide");
			$("#orSpan").removeClass("hide");
			$("#btnLogin").removeClass("hide");
			$("#btnSignUp").removeClass("hide");
			$("#btnFacebook").removeClass("hide");
			$("#btnGoogle").removeClass("hide");
			$("#btnGithub").removeClass("hide");
			$("#txtEmail").removeClass("hide");
			$("#txtPassword").removeClass("hide");
			$("#loginHeader").removeClass("hide");
			$("#loginHeader").html("Login");
			$("#logged-in").html("LOGIN <span class='caret'></span>");
			$("#removeSeen").addClass("hide");
			$("#removeWish").addClass("hide");
		}
	});
	
	
	var provider = new firebase.auth.FacebookAuthProvider();
	
	$("#btnFacebook").click(function(){
		
		firebase.auth().signInWithPopup(provider).then(function(result) {
  			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
  			var token = result.credential.accessToken;
 			// The signed-in user info.
 			var user = result.user;
  			// ...
		}).catch(function(error) {
  			// Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			// The email of the user's account used.
  			var email = error.email;
  			// The firebase.auth.AuthCredential type that was used.
  			var credential = error.credential;
  			// ...
			alert(errorMessage)
		});
		
		
	});
	
	
	var provider1 = new firebase.auth.GoogleAuthProvider();
	$("#btnGoogle").click(function(){
		
		firebase.auth().signInWithPopup(provider1).then(function(result) {
  			// This gives you a Google Access Token. You can use it to access the Google API.
  			var token = result.credential.accessToken;
  			// The signed-in user info.
  			var user = result.user;
  			// ...
		}).catch(function(error) {
  			// Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			// The email of the user's account used.
  			var email = error.email;
  			// The firebase.auth.AuthCredential type that was used.
  			var credential = error.credential;
  			// ...
		});
	});
	
	
	var provider2 = new firebase.auth.GithubAuthProvider();
	$("#btnGithub").click(function(){
		
		firebase.auth().signInWithPopup(provider2).then(function(result) {
  			// This gives you a Google Access Token. You can use it to access the Google API.
  			var token = result.credential.accessToken;
  			// The signed-in user info.
  			var user = result.user;
  			// ...
		}).catch(function(error) {
  			// Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			// The email of the user's account used.
  			var email = error.email;
  			// The firebase.auth.AuthCredential type that was used.
  			var credential = error.credential;
  			// ...
		});
	});
	
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			firebase.database().ref().child("users").child(firebaseUser.uid).child("name").set(firebaseUser.displayName);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("email").set(firebaseUser.email);
		}
	
	});
	
	$("#btnSeen").on("click", function(){
		window.location.href = "seen";
		});
	
	$("#btnWish").on("click", function(){
		window.location.href = "wish";
		});
	
	
	
});