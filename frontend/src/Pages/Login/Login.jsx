import React from 'react';
import styled from "styled-components";
import { firebase } from '../../Auth/Firebase';
import Navbar from '../../Components/Navbar';
import { useHistory, Link } from "react-router-dom";
import { saveData } from '../../Utils/LocalStorage';

const LoginCont = styled.div`
    background: url("/ChatApp/chatBackground.png");
    height: 100vh;

    & > .form {
        background-color: #ebebeb;
        border-radius: 10px;
        width: 300px;
        padding: 5%;
        margin: 3% auto;
        text-align: center;

        & > .head {
            font-size: 1.3em;
            font-weight: 700;
            color: #095a09;
            padding: 5% 0;
        }

        & > input, button {
            margin: 5% 0;
            font-size: 1em;
            outline: none;
            border: none;
        }

        & > input {
            border-bottom: 2px solid lightgray;
            padding: 1% 3%;
            background-color: transparent;
        
            :focus {
                transition: 01s;
                border-color: black;
            }
        }

        & > .loginBtn {
            border-radius: 10px;
            padding: 3% 5%;
            font-weight: 600;
            font-size: 1em;
            border: 2px solid #137949;
            background-color: #137949;
            color: white;
            cursor: pointer;

            :hover {
                filter: contrast(70%);
            }
        }

        & > .errorMessage {
            color: red;
        }

        & > .switchToSignup {
            font-weight: 600;
            color: gray;

            & > .signupLink {
                color: #0084ff;
                text-decoration: none;

                :hover {
                    text-decoration: underline;
                }
            }
        }
    }

    @media (max-width: 350px) {
        font-size: 0.9em;
        background: none;

        & > .form {
            background: transparent;
            margin: 0;
            width: 90vw;
            border-radius: 0;
        }
    }
`;

const Login = () => {

    // Initailised variables email, password, errorMsg with value ""
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [errorMsg, setErrorMsg] = React.useState("");

    const history = useHistory();

    // Function that updates the value of email
    const handleEmail = (number) => {
        setEmail(number);
    }

    // Function that updates the value of password
    const handlePassword = (value) => {
        setPassword(value);
    }

    // Function to handle Login
    const handleLogin = () => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                // Login success
                // Routing to Chat Page
                saveData("auth", true);
                history.push("/");

                // console.log(res);
            })
            .catch((error) => {
                // console.log("ERROR: " + error.message);
                setErrorMsg(error.message);
            });
    }

    return (
        <LoginCont>

            <Navbar />

            <div className="form">

                {/* Title */}
                <div className="head">LOGIN</div>

                {/* Email input */}
                <input type="email" placeholder="Email id" value={email} onChange={e => handleEmail(e.target.value)} autoFocus />
                <br />

                {/* Password input */}
                <input type="password" placeholder="Password" value={password} onChange={e => handlePassword(e.target.value)} />
                <br />

                {/* Signup Button */}
                <button className="loginBtn" onClick={handleLogin}>Login</button>
                <br />

                <div className="switchToSignup">
                    New user, <Link to="/signup" className="signupLink">Signup</Link> here
                </div>

                {/* Error Message */}
                {
                    errorMsg.length ? <div className="errorMessage">{errorMsg}</div> : false
                }
            </div>
            
        </LoginCont>
    )
}

export default Login;