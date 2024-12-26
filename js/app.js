import { registerHandler } from "./events/auth/registerHandler.js";
import { loginHandler } from "./events/auth/loginHandler.js";

function router() {
  const pathname = window.location.pathname;

  console.log("Current path:", pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      loginHandler();
      break;
    case "/register/index.html":
      registerHandler();
      break;
    case "/register/":
      break;
    default:
      console.warn("No route matched for:", pathname);
  }
}
router();
