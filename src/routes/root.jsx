import {Outlet, Link} from "react-router-dom";
import {PATHS} from "./paths.jsx";

export default function Root() {
     return (
         <>
            <div>
                <Link to={PATHS.subpage1}>
                    click here to access a subpage
                </Link>
            </div>
             <div>
                 <Link to={PATHS.subpage2}>
                     click here to access a subpage ebmedded in the root page
                 </Link>
             </div>
             <div id="detail">
                 <Outlet/>
             </div>
         </>
     )
}