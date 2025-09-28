import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/iosevka-aile/400.css";
import "@fontsource/iosevka-aile/600.css";
import "@fontsource/iosevka-aile/700.css";
import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/500.css";

createRoot(document.getElementById("root")!).render(<App />);
