import { Router } from "./app/router";
import { HomePage } from "./pages/HomePage";

const root = document.getElementById("app");
if (!(root instanceof HTMLElement)) {
  throw new Error("#app not found");
}

const router = new Router(root);

// router.add("/", () => newDiv("Main"));
// router.add("/detail", () => newDiv("Detail"));
router.add("/home", new HomePage());


document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.matches("a[data-link]")) {
    e.preventDefault();
    router.navigate(target.getAttribute("href")!);
  }
});

router.route();
