import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";



const router = createBrowserRouter([
   {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children:[
        {
    index: true,
    element: <Home />,
    loader: () => fetch('./appsData.json')
  },
  {
    path: '/apps',
    element: <Apps />,
  },
  {
    path: '/installation',
    element: <Installation />,
  },
  {
    path: '/Apps/:id',
    element: <AppDetails />
  }
    ]
  }

    

 
  
  
])

export default router