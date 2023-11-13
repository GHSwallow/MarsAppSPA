import TitleTextAndImg from "../TitleTextImg.jsx";
import {Link} from "react-router-dom";
import HomeButton from "../HomeButton.jsx";

export function SubPage() {
    return (
        <>
            <HomeButton/>
            <TitleTextAndImg
                title="This is a subpage"
                text="yes, a subpage this is"
                img_source="https://www.eology.net/wp-content/uploads/2021/10/Graphic-Subpage-edited.png"/>
        </>
    )
}

export function RootSubpage() {
    return (
        <>
            <TitleTextAndImg
                title="This is a subpage embedded in the root page"
                text="yes, a subpage in the root page this is"
                img_source="https://www.eology.net/wp-content/uploads/2021/10/Graphic-Subpage-edited.png"/>
        </>
    )
}