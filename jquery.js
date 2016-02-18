$(document).ready(function(){
  // var firstButton = $('#first-button');
  // var secondButton = $('#second-button');
  //
  // firstButton.on('click', function(){
  //   firstButton.css('background-color', '#932626')
  //               .prop('disabled', true)
  //               .text("Don't click me!");
  //   secondButton.css('background-color', '#576ee7')
  //               .prop('disabled', false)
  //               .text("Click me!");
  // });
  // secondButton.on('click', function(){
  //   secondButton.css('background-color', '#932626')
  //               .prop('disabled', true)
  //               .text("Don't click me!");
  //   firstButton.css('background-color', '#576ee7')
  //               .prop('disabled', false)
  //               .text("Click me!");
  // });
  $('button').on('click', function(){
    $(this).css('background-color', '#963b3b')
                  .prop('disabled', true)
                  .text("Don't click me!");
    $('button').not($(this))
                  .css('background-color', '#3163b8')
                  .prop('disabled', false)
                  .text('Click me!')
  });
  $('#tester').hover( function(){
    $(this).css('background-color', 'pink');
  }, function(){
    $(this).css('background-color', '#373737');
  });

  var inputValue = '';

  $('#test-input').keyup(function(){
    inputValue = $(this).val();
    console.log(inputValue);
  });
  $('#test-input').focus(function(){
    $(this).css('background-color', '#feffe0');
  });
  $('#test-input').blur(function(){
    $(this).css('background-color', '#c7fcff');
  })

  var myNewElement = '<p>hello, i am a p tag</p>';

  $('body').append(myNewElement);
});
