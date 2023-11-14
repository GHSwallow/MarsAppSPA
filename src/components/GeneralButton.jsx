import {Link} from "react-router-dom";

export default function GeneralButton({info}) {
    console.log(info.link)
    return (
        <>
            <Link to={info.link}>
                <button>
                    {info.buttonMessage}
                </button>
            </Link>
        </>
    )
}