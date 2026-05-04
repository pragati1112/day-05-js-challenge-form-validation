const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const errors = document.querySelectorAll(".error");

  // Reset errors
  errors.forEach(err => err.innerText = "");

  let isValid = true;

  // Username check
  if (username.value.trim() === "") {
    errors[0].innerText = "Username is required";
    isValid = false;
  }

  // Email check
  if (email.value.trim() === "") {
    errors[1].innerText = "Email is required";
    isValid = false;
  } else if (!email.value.includes("@")) {
    errors[1].innerText = "Invalid email";
    isValid = false;
  }

  // Password check
  if (password.value.trim() === "") {
    errors[2].innerText = "Password is required";
    isValid = false;
  } else if (password.value.length < 6) {
    errors[2].innerText = "Password must be at least 6 characters";
    isValid = false;
  }

  if (isValid) {
    alert("Form Submitted Successfully ✅");
    form.reset();
  }
});