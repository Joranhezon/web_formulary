document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector('#greeting-form')

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    //Creates variables to store data from the web page, and also make a HTTP request
    let name = document.querySelector('#id_name').value;
    let token = window.CSRF_TOKEN;
    var request = new XMLHttpRequest();

    //Sets up the request itself
    request.open("POST", "/src/receive_name", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.setRequestHeader('X-CSRFToken', token);

    // Creates a pop-up windows when the user makes a request
    request.onload = function() {
      if (request.status === 200) {
        let data = JSON.parse(request.responseText);
        let greeting = `Hey there, ${data.name}!`;
        alert(greeting);
      }
    }

    //Enables the triggering of the event
    request.send(encodeURI('name=' + name));
  })
})
