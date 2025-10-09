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
    errorElement: <ErrorPage />, // General errors / 404
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await fetch("/appsData.json");
          if (!res.ok) throw new Response("Failed to load home data", { status: res.status });
          return res.json();
        },
      },
      {
        path: "apps",
        element: <Apps />,
        errorElement: <ErrorPage />, // Apps listing error
      },
      {
        path: "apps/:id",
        element: <AppDetails />,
        errorElement: <AppError />, // App-specific error
        loader: async ({ params }) => {
          const res = await fetch("/appsData.json");
          if (!res.ok) {
            throw new Response("Failed to fetch apps data", { status: res.status });
          }

          const data = await res.json();

          // Fix type mismatch: params.id is string, JSON id could be number
          const app = data.find(item => item.id.toString() === params.id);

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
