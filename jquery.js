$(document).ready(function() {

	// $('#first-button').on('click', function() {
	// 	$(this).css('background-color', 'red')
	// 				.prop('disabled', true)
	// 				.text("Don't click me!");

	// 	$('#second-button').css('background-color', 'blue')
	// 				.prop('disabled', false)
	// 				.text("Click me!");
	// });

	// $('#second-button').on('click', function() {
	// 	$(this).css('background-color', 'red')
	// 				.prop('disabled', true)
	// 				.text("Don't click me!");

	// 	$('#first-button').css('background-color', 'blue')
	// 				.prop('disabled', false)
	// 				.text("Click me!");
	// });
	$('button').on('click', function() {
		$(this).css('background-color', 'red')
			.prop('disabled', true)
			.text("Don't click me!");

		$('button').not($(this))
					.css('background-color', 'blue')
					.prop('disabled', false)
					.text('Click me!');
	});

	$('#tester').hover(function() {
		$(this).css('background-color', 'pink');

	}, function() {
		$(this).css('background-color', 'black');
	});

	var inputValue = '';

	$('#test-input').keydown( function() {
		inputValue = $(this).val();
		console.log(inputValue);
	});

	$('#test-input').focus(function() {
		// alert('I am focused!');
		$(this).hide();
	});

	$('#test-input').blur(function() {
		$(this).show();
	});

	var myNewElement = '<p>Hello, I am a p tag</p>';

	$('body').append(myNewElement);





});