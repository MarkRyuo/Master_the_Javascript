
fetch("user.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("We have error", error))
