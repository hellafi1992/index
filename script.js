const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

    var user1 = 'admin1';
    var pass1 = '0001';

    var user2 = 'admin2';
    var pass2 = '0002';

	var user3 = 'admin3';
	var pass3 = '0003'

	document.getElementById("error-message").style.fontWeight = "900";

	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	if (username === user1 && password === pass1 || username === user2 && password === pass2 || username === user3 && password === pass3) {

		window.location.href = 'home.html';
	} else {
		errorMessage.textContent = 'كلمة المرور خـطئ !';
	}
});

document.getElementById("button");
document.getElementById("error-message");

function Button(){
	document.getElementById('error-message').style.display = "none";
	window.location.href = 'index.html';
}

function Submit(){
	document.getElementById('error-message');
	document.getElementById('button').style.display = "block";
}
