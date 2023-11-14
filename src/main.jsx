import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import { SubPage, RootSubpage } from "./routes/subpage.jsx";
import MarsApp from "./MarsApp.jsx";
import {MarsPATHS, PATHS} from "./routes/paths.jsx";
import SelectRover from "./SelectRover.jsx";
createRoutesFromElements()
const routerTest = createBrowserRouter(
        createRoutesFromElements([
            <Route path={PATHS.root} element={<Root/>} errorElement={ErrorPage}>
                <Route path={PATHS.subpage1} element={<RootSubpage/>}/>
            </Route>,
            <Route path={PATHS.subpage2} element={<SubPage/>}/>
            ]
        ))

const router = createBrowserRouter([
    createRoutesFromElements(
        <Route path={MarsPATHS.root} element={<MarsRoot/>} errorElement={ErrorPage}>
            <Route path={MarsPATHS.SelectPhotos} element={<SelectPhotots/>}/>
        </Route>,
        )
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routerTest} />
  </React.StrictMode>,
)
