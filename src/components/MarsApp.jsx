import {MarsPATHS} from "../routes/paths.jsx";
import GeneralButton from "./GeneralButton.jsx";
import {Outlet} from "react-router-dom";
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'

import {render} from "react-dom";
import HomeButton from "./HomeButton.jsx";
import {homeTheme} from "../styling/HomePageThemes.jsx"
import "../styling/styles.css"
import Flexbox from 'flexbox-react'

export default function MarsApp() {
    const ButtonInfo = {
        link: MarsPATHS.SelectPhotos,
        buttonMessage: 'click here',
    }



    const Button = styled.button`
      color: turquoise;
    `

    const StyledOpenRoverImagesButton = styled(GeneralButton)`
      color: ${props => props.theme.colours.white};
      background: ${props => props.theme.colours.NASABlue};
    `


    const Fancy = styled(HomeButton)`
      color: hotpink;
    `

    const HomeThemeButton = styled(HomeButton)`
      color: ${props => props.theme.colours.white};
      background: ${props => props.theme.colours.NASARed};
    `

    const StyledParagraph =styled.p`
      color: ${props => props.theme.colours.white};
      font-weight: ${props => props.theme.heavyParagraphText};
      background: ${props => props.theme.colours.NASARed};
    `

    return (
        <>
            <ThemeProvider theme={homeTheme}>
                <Flexbox className={homeTheme} flowDirection="column" minHeight="100vh" minWidth="100vw">

                    <Flexbox element={"header"} height={'100px'} className={"header"}>
                        <StyledParagraph>
                            Welcome! this is a website to interact with Mars rover data. Please select the rover and camera to display photos
                            Click to explore
                        </StyledParagraph>
                    </Flexbox>
                    <br/>
                    <StyledOpenRoverImagesButton link={MarsPATHS.SelectPhotos} buttonMessage={'click here'}/>
                    <br/>
                    <HomeThemeButton/>
                    <br/>
                    <Outlet/>

                </Flexbox>
                <Flexbox flexDirection="column" minHeight="100vh">
                    <Flexbox element="header" height="60px">
                        Header
                    </Flexbox>

                    <Flexbox flexGrow={1}>
                        Content
                    </Flexbox>

                    <Flexbox element="footer" height="60px">
                        Footer
                    </Flexbox>
                </Flexbox>
            </ThemeProvider>
        </>

    )
}