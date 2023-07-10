import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import AuthProvaider from "./Auth/AuthProvaider";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvaider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvaider>
  </React.StrictMode>
);
