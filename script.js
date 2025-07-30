
fetch("user.json")
  .then(response => response.json())
  .then(data => console.log(data.name))
  .catch(error => console.log(error)) ;
