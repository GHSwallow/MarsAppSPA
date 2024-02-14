import {Link} from "react-router-dom";

export default function GeneralButton({className, link, buttonMessage}) {
    console.log(link)
    return (
        <div>
            <Link to={link}>
                <button className={className}>
                    {buttonMessage}
                </button>
            </Link>
        </div>
    )
}