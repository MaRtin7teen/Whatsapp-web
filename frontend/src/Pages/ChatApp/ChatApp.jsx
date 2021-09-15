import React from 'react'
import Contacts from '../../Components/Contacts';
import Messages from '../../Components/Messages';
import Navbar from '../../Components/Navbar';
import styled from "styled-components";

const AppContainer = styled.div`

    & > .gridContainer {
        display: grid;
        grid-template-columns: 20% 80%;

        @media (max-width: 650px) {
            display: none;
        }
    }
`;

const ChatApp = () => {
    return (
        <AppContainer>

            {/* Navbar */}
            <Navbar />

            <div className="gridContainer">

                {/* Contacts list */}
                <Contacts />

                {/* Chats or Messages */}
                <Messages />
            </div>

        </AppContainer>
    )
}

export default ChatApp;