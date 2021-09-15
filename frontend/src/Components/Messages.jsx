import React from 'react';
import styled from "styled-components";

const MessagesCont = styled.div`
    height: 90vh;
    background: url("/ChatApp/initialBackground.png") center no-repeat;
    background-size: 40%;
    border-left: 1px solid lightgray;

    & > .initalMessage {
        text-align: center;
        color: gray;
        font-size: 1.5em;
        padding: 1%;
    }

    & > .sent {
        background-color: white;
    }

    & > .received {

    }
`;

const Messages = () => {

    const messages = [];

    return (
        <MessagesCont>
            {
                messages.length ? <div></div> : <div className="initalMessage">Start a chat</div>
            }
        </MessagesCont>
    )
}

export default Messages;