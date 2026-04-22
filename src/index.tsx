import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root")!;
if (root.innerHTML.trim()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
