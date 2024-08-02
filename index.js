const submitBtn = document.querySelector("button[type=submit]");
const inputFields = document.querySelectorAll("input");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

email.addEventListener("blur", checkEmail);
phone.addEventListener("blur", checkPhoneNumber);
confirmPassword.addEventListener("blur", checkPassword);

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  inputFields.forEach((input) => {
    const errorP = input.nextElementSibling;
    const isEmpty = input.value.trim() === "";

    errorDisplayer(input, errorP, `* ${input.id.replace("-", " ")} is required!`, isEmpty);
  });

  // Re-check specific fields for more detailed validation
  checkEmail();
  checkPhoneNumber();
  checkPassword();
});

function checkEmail() {
  const emailError = email.nextElementSibling;
  // RegExp for valid email format  example: test.example@gmail.com
  const emailContent = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailContent.test(email.value);

  errorDisplayer(email, emailError, "* email not valid!", !isValid);
}

function checkPhoneNumber() {
  const phoneError = phone.nextElementSibling;
  // RegExp for correct phone number format
  const phoneContent = /^\d{10}$/;
  const isValid = phoneContent.test(phone.value);

  errorDisplayer(phone, phoneError, "* phone number not valid!", !isValid);
}

function checkPassword() {
  const pswdError = confirmPassword.nextElementSibling;
  const isMatch = password.value === confirmPassword.value;

  errorDisplayer(confirmPassword, pswdError, "* password do not match!", !isMatch);
}

function errorDisplayer(input, errorParagraph, message, boolean) {
  if (boolean) {
    errorParagraph.textContent = `${message}`;
    input.style.borderColor = "red";
  } else {
    errorParagraph.textContent = "";
    input.style.borderColor = "";
  }
}
