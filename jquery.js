$(document).ready(function() {

	$('button').on('click', function() {
		$(this).css('background-color', 'red')
				.prop('disabled', 'disabled')
				.text("Don't click me!");

		$('button').not($(this))
					.css('background-color', 'blue')
					.prop('disabled', false)
					.text("Click me!");
	});

});