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

    const [selected, setSelected] = React.useState("");

    const [messages, setMessages] = React.useState([]);

    const [width, setWidth] = React.useState(window.innerWidth);

    const changeSelected = (value) => {
        setSelected(value);
        // setMessages({});
    }

    const changeScreen = (value) => {
        setScreen(value);
    }

    const checkWidth = () => {
        setWidth(window.innerWidth);
    }

    console.log(screen, width);

    window.addEventListener("resize", checkWidth);

    return (
        <AppContainer>

            {/* Navbar */}
            <Navbar />

            <div className="gridContainer">

                {/* If width is greater than 650px (large screens) */}
                {
                    width > 650 ?
                    <>
                        {/* Contacts list */}
                        <Contacts changeScreen={changeScreen} selected={selected} changeSelected={changeSelected} />

                        {/* Chats or Messages */}
                        <Messages changeScreen={changeScreen} screen={screen} selected={selected} messages={messages} changeSelected={changeSelected} />
                    </> :

                    // If width is below  650px (small screens)
                    screen === "contacts" ?
                    <Contacts changeScreen={changeScreen} changeSelected={changeSelected} /> :
                    <Messages changeScreen={changeScreen} screen={screen} selected={selected} messages={messages} changeSelected={changeSelected} />
                }
            </div>

        </AppContainer>
    )
}

export default ChatApp;