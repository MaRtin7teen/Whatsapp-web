import React from 'react'
import Contacts from '../../Components/Contacts';
import Messages from '../../Components/Messages';
import Navbar from '../../Components/Navbar';
import styled from "styled-components";

const AppContainer = styled.div`

    & > .gridContainer {
        display: grid;
        grid-template-columns: 250px auto;

        @media (max-width: 650px) {
            grid-template-columns: 100%;
        }
    }
`;

const ChatApp = () => {

    const [screen, setScreen] = React.useState("contacts");

    const [width, setWidth] = React.useState(window.innerWidth);

    const changeScreen = (value) => {
        setScreen(value);
    }

    const checkWidth = () => {
        setWidth(window.innerWidth);
    }

    window.addEventListener("resize", checkWidth);

    return (
        <AppContainer>

            {/* Navbar */}
            <Navbar />

            <div className="gridContainer">

                {/* Contacts list */}
                <Contacts width={width} screen={screen} changeScreen={changeScreen} />

                {/* Chats or Messages */}
                <Messages width={width} screen={screen} changeScreen={changeScreen} />
            </div>

        </AppContainer>
    )
}

export default ChatApp;