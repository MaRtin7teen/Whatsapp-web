import React from 'react';
import styled from "styled-components";

const MessagesCont = styled.div`
    
    & > .messages {
        height: 90vh;
        background: url("/ChatApp/initialBackground.png") center no-repeat;
        background-size: 25em;
        border-left: 1px solid lightgray;

        & > .initalMessage {
            text-align: center;
            color: gray;
            font-size: 1.5em;
            padding: 2%;
        }

        & > .sent {
            background-color: white;
        }

        & > .received {

        }
    }

    & > .hidden {
        display: none;
    }

    @media (max-height: 580px) {
        background-size: 55vh;
    }
`;

const Messages = ({width, screen, changeScreen}) => {

    const messages = [];

    return (
        <MessagesCont>
            { 
                <div className={width > 650 ? "messages" : screen === "messages" ? "messages" : "hidden"}>
                    {
                        messages.length ? <div></div> : 
                        width > 659 ? <div className="initalMessage">Start a chat</div> :
                        <div>
                            
                        </div>
                    }
                </div>
            }
        </MessagesCont>
    )
}

export default Messages;