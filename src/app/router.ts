import type { Page } from "./page";

type Route = {
    path: string;
    render: Page;
};

export class Router {
    private routes: Route[] = [];
    private root: HTMLElement;

    constructor(root: HTMLElement) {
        this.root = root;
        window.addEventListener("popstate", () => this.route());
    }

    add(path: string, render: Page) {
        this.routes.push({ path, render });
    }

    navigate(path: string) {
        history.pushState({}, "", path);
        this.route();
    }

    route() {
        const currentPath = location.pathname;
        const route = this.routes.find(r => r.path === currentPath) || this.routes.find(r => r.path === "/404");

        this.root.innerHTML = "";

        const page = route
            ? route.render.element
            : this.createNotFoundPage();

        this.root.append(page);
    }

    private createNotFoundPage(): HTMLElement {
        const h1 = document.createElement("h1");
        h1.textContent = "404 Not Found";
        return h1;
    }

}
