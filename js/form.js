const formSubmitButton = document.querySelector("[data-submit-form]");
const firstName = document.querySelector("[name='firstName']");
const lastName = document.querySelector("[name='lastName']");
const phoneNumber = document.querySelector("[name='phoneNumber']");
const selectedService = document.querySelector("[name='service']");
const infoMessage = document.querySelector("[data-error-message]");
const contactForm = document.querySelector("#contact-form");

formSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let process = false;
  process = checkInputs(process);
  if (process) {
    contactForm.submit();
  }
});

function checkInputs(process) {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const selectedServiceValue = selectedService.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "First name cannot be blank");
    process = false;
  } else {
    setSuccessFor(firstName);
    process = true;
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name cannot be blank");
    process = false;
  } else {
    setSuccessFor(lastName);
    process = true;
  }

  if (phoneNumberValue === "") {
    setErrorFor(phoneNumber, "Phone number cannot be blank");
    process = false;
  } else {
    setSuccessFor(phoneNumber);
    process = true;
  }

  if (selectedServiceValue === "") {
    setErrorFor(selectedService, "Selection service is required");
    process = false;
  } else {
    setSuccessFor(selectedService);
    process = true;
  }
  return process;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form__input form__input--error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form__input";
}
