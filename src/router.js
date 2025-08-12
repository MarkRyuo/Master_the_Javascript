import page from "page";
import { renderLogin } from "./pages/login.js";
import { renderDashboard } from "./pages/dashboard.js";

export function initRouter() {
  page("/", renderLogin);
  page("/dashboard", renderDashboard);
  page();
}
