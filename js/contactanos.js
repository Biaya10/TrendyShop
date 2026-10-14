const contactForm = document.getElementById("contact-form");
const confirmationMessage = document.getElementById("confirmation-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmationMessage.classList.add("d-none");

  const requiredFields = contactForm.querySelectorAll("[required]");
  let formIsValid = true;

  for (const field of requiredFields) {
    if (field.value === "") {
      field.classList.add("is-invalid");
      formIsValid = false;
    } else {
      field.classList.remove("is-invalid");
    }
  }

  if (!formIsValid) {
    return;
  }

  confirmationMessage.classList.remove("d-none");
  contactForm.reset();
});
