import React from 'react';
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { BiSend } from "react-icons/bi";

const MessagesCont = styled.div`
    
    height: 90vh;
    background: url("/ChatApp/initialBackground.png") center no-repeat;
    background-size: 50vh;
    border-left: 1px solid lightgray;

    & > .initalMessage {
        text-align: center;
        color: gray;
        font-size: 1.5em;
        padding: 2%;
    }

    & > .container {
        background-color: #eeeeee;
        height: 100vh;

        & > .topBar {
            background-color: #a5e0dda6;
            display: flex;
            align-items: center;
            padding: 0 1%;

            & > .backIcon {
                color: #0a705a;

                :hover {
                    border-radius: 50%;
                    background-color: #f0f0f0;
                }
            }

            & > .contactName {
                color: #363636;
                font-weight: 600;
            }

            & > * {
                padding: 2%;
            }
        }

        & > .messages {
            
            & > .sent, .received {
                padding: 1% 3%;
                border-radius: 20px;
                word-wrap: break-word;
            }

            & > .sent {
                background-color: white;
                color: black;
            }

            & > .received {
                background-color: #04aa5d;
                color: white;
            }
        }

        & > .inputBox {
            min-width: 80%;
            max-width: 100%;
            position: fixed;
            bottom: 0;
            padding: 1%;
            display: flex;
            /* display: grid;
            grid-template-columns: 80% 20%;
            grid-gap: 1%; */

            & > input {
                font-size: 1.2em;
                border: 1px solid gray;
                outline: none;
                border-radius: 20px;
                padding: 1% 5%;
            }

            & > .sendBtn {
                border-radius: 50%;
                background-color: #04aa5d;
                border: none;
                outline: none;

                & > .sendIcon {
                    font-size: 1.5em;
                    color: white;
                }

                :hover {
                    filter: contrast(70%);
                    cursor: pointer;
                }
            }
        }
    }

    @media (max-width: 650px) {
        /* background: url("/ChatApp/chatBackground.png") lightgray no-repeat center; */
        background: none;
        background-color: #eeeeee;
        height: 100vh;

        & > .initalMessage {
            display: none;
        }
    }
`;

const Messages = ({screen, changeScreen, selected, changeSelected}) => {

    const [message, setMessage] = React.useState("");

    const handleChange = () => {
        changeScreen("contacts");
        changeSelected("");
    }

    return (
        <MessagesCont>
            {
                screen === "messages" ?
                <div className="container">

                    <div className="topBar">
                        <FaArrowLeft className="backIcon" onClick={handleChange} />
                        <div className="contactName">{selected}</div>
                    </div>

                    <div className="messages">
                        messages
                    </div>

                    <div className="inputBox">

                        <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} autoFocus />

                        <button className="sendBtn">
                            <BiSend className="sendIcon" />
                        </button>
                    </div>
                </div> :

                <div className="initalMessage">
                    Start a chat
                </div>
            }
        </MessagesCont>
    )
}

export default Messages;