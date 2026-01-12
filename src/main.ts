import { Router } from "./app/router";

const root = document.getElementById("app");
if (!(root instanceof HTMLElement)) {
  throw new Error("#app not found");
}

const router = new Router(root);

router.add("/", () => newDiv("Main"));
router.add("/detail", () => newDiv("Detail"));

const newDiv = (title: string) => {
  const h1 = document.createElement("h1");
  h1.textContent = title;
  return h1;

}

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.matches("a[data-link]")) {
    e.preventDefault();
    router.navigate(target.getAttribute("href")!);
  }
});

router.route();
