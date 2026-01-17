import type { Page } from "./page";

type Route = {
    path: string;
    page: () => Page;
};

export class Router {
    private routes: Route[] = [];
    private root: HTMLElement;
    private currentPage: Page | null = null;
    private errorPage: Page;

    constructor(root: HTMLElement, errorPage: Page) {
        this.root = root;
        this.errorPage = errorPage;

        window.addEventListener("popstate", () => {
            this.route(location.pathname);
        });
    }

    add(path: string, page:  () => Page) {
        this.routes.push({ path, page });
    }

    navigate(path: string) {
        history.pushState({}, "", path);
        this.route(path);
    }

    route(path: string) {
        const route = this.routes.find(r => r.path === path);
        
        if (this.currentPage) {
            this.currentPage.unmount();
            this.root.innerHTML = "";
        }

        this.currentPage = route ? route.page() : this.errorPage;
        this.currentPage.mount();
        this.root.append(this.currentPage.element);
    }

}
