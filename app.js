document.getElementById("show-password").addEventListener("click", function () {
  const passwordField = document.querySelector('input[name="password"]');
  if (passwordField.type === "password") {
    passwordField.type = "text";
    this.textContent = "Hide Password";
  } else {
    passwordField.type = "password";
    this.textContent = "Show Password";
  }
});

document
  .getElementById("login-with-google")
  .addEventListener("click", function () {
    alert("Google login is not implemented yet.");
  });
function showLoader(button) {
  const loader = document.createElement("span");
  loader.className = "loader";
  button.appendChild(loader);
  button.disabled = true;
}

function hideLoader(button) {
  const loader = button.querySelector(".loader");
  if (loader) {
    button.removeChild(loader);
  }
  button.disabled = false;
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    showLoader(button);
    setTimeout(() => {
      hideLoader(button);
    }, 2000);
  });
});
