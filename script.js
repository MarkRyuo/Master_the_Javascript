

const response = await fetch("public/user.json");
const data = await response.json();
console.log(data.userName);
  