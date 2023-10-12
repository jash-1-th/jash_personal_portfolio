document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

   
    if (username === "your_username" && password === "your_password") {
      alert("Login successful");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  });
});
