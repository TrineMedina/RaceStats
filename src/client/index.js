import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       cacheTime: Infinity,
//     },
//   },
// });

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/*<QueryClientProvider client={queryClient}>*/}
      <App />
      {/*</QueryClientProvider>*/}
    </Router>
  </React.StrictMode>
);
