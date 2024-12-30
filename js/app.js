import { loginHandler } from "./events/loginHandler.js";
import { registerHandler } from "./events/registerHandler.js";

function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      loginHandler();
      break;
    case "/register/index.html":
      registerHandler();
      break;
    default:
      console.warn("No route matched for:", pathname);
  }
}

router();
