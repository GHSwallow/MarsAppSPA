import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./components/error-page.jsx";
import { SubPage, RootSubpage } from "./routes/subpage.jsx";
import MarsApp from "./components/MarsApp.jsx";
import {MarsPATHS, PATHS} from "./routes/paths.jsx";
import SelectPhotos from "./routes/SelectPhotos.jsx";
import SelectRover from "./components/SelectRover.jsx";
createRoutesFromElements()
const routerTest = createBrowserRouter(
        createRoutesFromElements([
            <Route path={PATHS.root} element={<Root/>} errorElement={<ErrorPage/>}>
                <Route path={PATHS.subpage1} element={<RootSubpage/>}/>
            </Route>,
            <Route path={PATHS.subpage2} element={<SubPage/>}/>
            ]
        ))

const marsRouter = createBrowserRouter(
    createRoutesFromElements([
        <Route path={MarsPATHS.root} element={<MarsApp/>} errorElement={<ErrorPage/>}>
            <Route path={MarsPATHS.SelectPhotos} element={<SelectPhotos/>} errorElement={<ErrorPage/>}/>
        </Route>,
        // <Route path={'/'} element={<SelectRover/>} errorElement={<ErrorPage/>}/>
        ]))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={marsRouter} />
  </React.StrictMode>,
)
