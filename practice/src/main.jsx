import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-w-dvh h-screen bg-linear-to-r/srgb from-white to-gray-300">
          <App />
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
