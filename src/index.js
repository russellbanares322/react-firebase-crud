import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { BlogProvider } from "./BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BlogProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          delay={1000}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </React.StrictMode>
  </BlogProvider>
);
