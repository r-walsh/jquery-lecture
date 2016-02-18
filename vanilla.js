document.addEventListener('DOMContentLoaded', function() {

	var firstButton = document.getElementById('first-button');
	var secondButton = document.getElementById('second-button');

	firstButton.addEventListener('click', function() {
		firstButton.style['background-color'] = 'red';
		firstButton.setAttribute('disabled', 'disabled');
		firstButton.innerHTML = "Don't click me!";

		secondButton.style['background-color'] = 'blue';
		secondButton.removeAttribute('disabled');
		secondButton.innerHTML = "Click me!";
	});

	secondButton.addEventListener('click', function() {
		secondButton.style['background-color'] = 'red';
		secondButton.setAttribute('disabled', 'disabled');
		secondButton.innerHTML = "Don't click me!";

		firstButton.style['background-color'] = 'blue';
		firstButton.removeAttribute('disabled');
		firstButton.innerHTML = "Click me!";
	});

});