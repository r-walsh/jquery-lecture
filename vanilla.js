document.addEventListener('DOMContentLoaded', function() {

	var superButton = document.getElementById('super-button');
	var secondButton = document.getElementById('second-button')

	superButton.addEventListener('click', function() {

		superButton.style['background-color'] = 'red';
		superButton.setAttribute('disabled', 'disabled');

		secondButton.style['background-color'] = 'blue';
		secondButton.removeAttribute('disabled');
	});

	secondButton.addEventListener('click', function() {

		secondButton.style['background-color'] = 'red';
		secondButton.setAttribute('disabled', 'disabled');

		superButton.style['background-color'] = 'blue';
		superButton.removeAttribute('disabled');
	});

});