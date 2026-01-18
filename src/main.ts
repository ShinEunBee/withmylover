import { App } from "./app/app";
import { Router } from "./app/router";
import { AboutPage } from "./pages/AboutPage";
import { ErrorPage } from "./pages/ErrorPage";
import { FrameSelectPage } from "./pages/FrameSelectPage";
import { HomePage } from "./pages/HomePage";
import { PhotoSelectPage } from "./pages/PhotoSelectPage";

const root = document.getElementById("app");
if (!(root instanceof HTMLElement)) {
  throw new Error("#app not found");
}

const router = new Router(root, new ErrorPage());
const app = new App();

router.add("/", () => new HomePage(router));
router.add("/about", () => new AboutPage());
router.add("/photo-select", () => new PhotoSelectPage(router, app));
router.add("/frame-select", () => new FrameSelectPage(app));

router.route(location.pathname);

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.matches("a[data-link]")) {
    e.preventDefault();
    router.navigate(target.getAttribute("href")!);
  }
});

