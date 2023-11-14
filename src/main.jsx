import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import { SubPage, RootSubpage } from "./routes/subpage.jsx";
import MarsApp from "./MarsApp.jsx";
import {PATHS} from "./routes/paths.jsx";
createRoutesFromElements()
const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={PATHS.root} element={<Root/>} errorElement={ErrorPage}>
                <Route path={PATHS.subpage1} element={<RootSubpage/>}/>
                <Route path={PATHS.subpage2} element={<SubPage/>}/>
            </Route>
        ))

const router = createBrowserRouter([
    {
      path: '/',
      element: <MarsApp/>,
      errorElement: <ErrorPage/>,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
