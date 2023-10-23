import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Discount from "./pages/discount/index.tsx";
import DiscountHooks from "./pages/discount-hooks/index.tsx";
import UseMemoContainer from "./pages/demo-useMemo/index.tsx";
import ModalDemoContainer from "./pages/demo-modal/index.tsx";
import PropsChildrenContainer from "./pages/demo-props/index.tsx";
import UseCallbackContainer from "./pages/demo-useCallback/index.tsx";
import MemoContainer from "./pages/demo-memo/index.tsx";

// console.log("process", process); // Uncaught ReferenceError: process is not defined

// These variables have been declared by Vite.
console.log(" import.meta.env.MODE: ", import.meta.env.MODE);
console.log(" import.meta.env.BASE_URL: ", import.meta.env.BASE_URL);
console.log(" import.meta.env.PROD: ", import.meta.env.PROD);
console.log(" import.meta.env.DEV: ", import.meta.env.DEV);
console.log(" import.meta.env.SSR: ", import.meta.env.SSR);

console.log(" import.meta.env.VITE_BASE_URL: ", import.meta.env.VITE_BASE_URL);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/discount",
    element: <Discount />,
  },
  {
    path: "/discount-hooks",
    element: <DiscountHooks />,
  },
  {
    path: "/demo-useMemo",
    element: <UseMemoContainer />,
  },
  {
    path: "/demo-modal",
    element: <ModalDemoContainer />,
  },
  {
    path: "/demo-props",
    element: <PropsChildrenContainer />,
  },
  {
    path: "/demo-useCallback",
    element: <UseCallbackContainer />,
  },
  {
    path: "/demo-memo",
    element: <MemoContainer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
