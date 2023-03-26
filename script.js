const ledButton = document.getElementById('led-button');

ledButton.addEventListener('click', function() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/led');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ ledState: ledButton.classList.contains('led-on') }));
  ledButton.classList.toggle('led-on');
  ledButton.classList.toggle('led-off');
});
