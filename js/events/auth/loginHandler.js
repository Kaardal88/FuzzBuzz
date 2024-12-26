import { login } from "../../auth/login.js";

export function loginHandler() {
  const form = document.querySelector("#form");
  //If form excists. Do stuff
  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

async function submitForm(event) {
  event.preventDefault();
  //Get input values from the form
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  const fieldset = form.querySelector("fieldset");
  const button = form.querySelector("button");

  try {
    fieldset.disabled = true;
    button.textContent = "Logging in...";
    const response = await login(data);
    // console.log(response);

    // const {
    //   data: { accessToken, name },
    // } = response;
    // console.log(userData);

    const { data: userData } = response;
    const { accessToken, name } = userData;

    // Save the token in local storage
    saveToken(accessToken);
    saveUsername(name);
    localStorage.setItem("token", userData.accessToken);
    localStorage.setItem("username", userData.name);

    localStorage.getItem("token");

    location.href = "/profile/index.html";
  } catch (error) {
    console.log(error);
    displayMessage(container, "warning", error.message);
  } finally {
    fieldset.disabled = false;
    button.textContent = "Submit";
  }
}
