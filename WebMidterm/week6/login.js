window.onload = loginLoad;

function loginLoad() {
    document.getElementById("myLogin").addEventListener("submit", function(event) {
        if (!checkLogin()) {
            event.preventDefault(); // Prevent form submission if login check fails
        }
    });
}

function checkLogin() {
    const params = new URLSearchParams(window.location.search);
    const usernameFromURL = params.get('username');
    const passwordFromURL = params.get('password');

	const firstname = document.forms["myLogin"]["username"].value;
    const password = document.forms["myLogin"]["password"].value;

   
    if (usernameFromURL === firstname && passwordFromURL === password) {
		alert("sucess");
        return true;
    } else {
        alert("Invalid username or password. Please try again.");
        return false; 
    }
}
