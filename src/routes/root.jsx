import { App } from "../App.jsx"
import {Outlet, Link} from "react-router-dom";

export default function Root() {
     return (
         <>
            <li>
                <Link to={'/subpage'}>
                    click here to access a subpage
                </Link>
            </li>
             <li>
                 <Link to={'/here'}>
                     click here to access a subpage ebmedded in the root page
                 </Link>
             </li>
             <div id="detail">
                 <Outlet/>
             </div>
             {/*<App/>*/}
         </>
     )
}