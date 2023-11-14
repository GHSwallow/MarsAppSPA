import {Link} from "react-router-dom";

export default function HomeButton() {
    return (
        <>
            <Link to={'/'}>
                <button>
                    Click to return home
                </button>
            </Link>
        </>
    )
}