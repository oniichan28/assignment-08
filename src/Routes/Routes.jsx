import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import AppError from "../Pages/AppError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "apps",
        element: <Apps />,
        errorElement: <ErrorPage />,
      },
      {
        path: "apps/:id",
        element: <AppDetails />,
        errorElement: <AppError />,
        loader: async ({ params }) => {
          const res = await fetch("/appsData.json");
          const data = await res.json();
          const app = data.find((item) => item.id === params.id);
          if (!app) {
            throw new Response("App Not Found", { status: 404 });
          }
          return app;
        },
      },
      {
        path: "installation",
        element: <Installation />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
