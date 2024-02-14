import {Link} from "react-router-dom";

export default function HomeButton({ className }) {
    return (
        <>
            <Link to={'/'}>
                <button className={className}>
                    Click to return home
                </button>
            </Link>
        </>
    )
}