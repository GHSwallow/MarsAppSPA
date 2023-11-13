import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import { SubPage, RootSubpage } from "./routes/subpage.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/here",
                element: <RootSubpage/>
            },
        ],
    },
    {
        path: "/subpage",
        element: <SubPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      {/*<App />*/}
  </React.StrictMode>,
)
