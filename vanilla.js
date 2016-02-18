document.addEventListener('DOMContentLoaded', function(){
  var firstButton = document.getElementById('first-button');
  var secondButton = document.getElementById('second-button');

  firstButton.addEventListener('click', function(){
    firstButton.style['background-color'] = 'red';
    firstButton.setAttribute('disabled', 'disabled');
    secondButton.removeAttribute('disabled', 'disabled');
    secondButton.style['background-color'] = 'blue';
    secondButton.innerHTML = 'Click me!';
    firstButton.innerHTML = "Don't click me!";
  });
  secondButton.addEventListener('click', function(){
    secondButton.style['background-color'] = 'red';
    secondButton.setAttribute('disabled', 'disabled');
    firstButton.removeAttribute('disabled', 'disabled');
    firstButton.style['background-color'] = 'blue';
    secondButton.innerHTML = "Don't click me!";
    firstButton.innerHTML = 'Click me!';
  });
});
