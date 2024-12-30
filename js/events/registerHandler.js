import { register } from "../auth/register.js";
import { displayMessage } from "../utils/displayMessage.js";

export function registerHandler() {
  const form = document.querySelector("#register-form");
  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));

  const fieldset = form.querySelector("fieldset");
  const button = form.querySelector("button");
  const container = document.querySelector(".message-container");

  try {
    fieldset.disabled = true;
    button.textContent = "Registering...";
    const response = await register(data);

    displayMessage(container, "success", "Registration successful!");
    setTimeout(() => {
      location.href = "/index.html"; // Redirect to login page after success
    }, 2000);
  } catch (error) {
    displayMessage(container, "warning", error.message);
  } finally {
    fieldset.disabled = false;
    button.textContent = "Register";
  }
}
