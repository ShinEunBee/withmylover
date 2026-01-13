import { Router } from "./app/router";
import { AboutPage } from "./pages/AboutPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";

const root = document.getElementById("app");
if (!(root instanceof HTMLElement)) {
  throw new Error("#app not found");
}

const router = new Router(root, new ErrorPage());

router.add("/", new HomePage());
router.add("/about", new AboutPage());

router.route(location.pathname);

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.matches("a[data-link]")) {
    e.preventDefault();
    router.navigate(target.getAttribute("href")!);
  }
});

