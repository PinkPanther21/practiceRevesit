import { ClerkProvider } from "@clerk/clerk-react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const PUBLISHABLE_KEY = "pk_test_cHJvZm91bmQtZ3JvdXNlLTY4LmNsZXJrLmFjY291bnRzLmRldiQ";


createRoot(document.getElementById("root")).render(
   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-w-dvh h-screen bg-linear-to-r/srgb from-white to-gray-300">
          <App />
        </div>
      </BrowserRouter>
    </Provider>
  </ClerkProvider>
);
