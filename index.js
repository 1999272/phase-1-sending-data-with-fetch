function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
      // Append new ID to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = `ID: ${data.id}`;
      body.appendChild(p);
    })
    .catch(error => {
      // Append error message to the DOM
      const body = document.querySelector("body");
      const errorMessage = document.createElement("p");
      errorMessage.textContent = error.message;
      body.appendChild(errorMessage);
    });
}
