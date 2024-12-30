import { login } from "../auth/login.js";
import { save } from "../auth/storage.js";
import { displayMessage } from "../utils/displayMessage.js";

export function loginHandler() {
  const form = document.querySelector("#form");
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
    button.textContent = "Logging in...";
    const response = await login(data);

    save("token", response.accessToken);
    save("username", response.name);

    location.href = "/profile/index.html";
  } catch (error) {
    displayMessage(container, "warning", error.message);
  } finally {
    fieldset.disabled = false;
    button.textContent = "Submit";
  }
}
