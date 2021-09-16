import React from 'react';
import styled from "styled-components";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { HiOutlineMenu } from "react-icons/hi";
// import { saveData } from '../Utils/LocalStorage';

const NavbarCont = styled.div`
    background-color: #00BFA5;
    color: white;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    padding: 1%;
    height: 5vh;

    & > .title {
        display: flex;
        align-items: center;

        & > .titleIcon {
            background-color: #11ca11;
            font-size: 2em;
            border-radius: 50%;
        }

        & > .titleText {
            padding: 0 1%;
            font-size: 1.3em;
            font-weight: 600;
        }
    }

    & > .menu {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & > .menuIcon {
            padding: 1%;
            border-radius: 50%;
            font-size: 1.5em;
            cursor: pointer;

            :hover {
                background-color: #01a58f;
            }
        }

        & > .hidden {
            display: none;
        }

        & > .menuItems {
            position: absolute;
            background-color: white;
            box-shadow: 1px 1px 20px gray;
            border-radius: 3px;
            top: 45px;
            padding: 1% 3%;
            

            & > .logout {
                color: gray;
                font-size: 1.3em;
                cursor: pointer;
                font-weight: 600;

                :hover {
                    color: red;
                }
            }
        }
    }

    @media (max-height: 580px) {
        height: 8vh;

        & > .menu {
            & > .menuItems {
                top: 10%;
            }
        }
    }

    @media (max-height: 380px) {
        font-size: 15px;
        height: 25px;

        & > .menu {
            & > .menuItems {
                top: 45px;
            }
        }
    }

    @media (max-width: 650px) {
        font-size: 15px;

        & > .menu {
            & > .menuItems {
                top: 6%;
            }
        }
    }

    @media (max-width: 350px) {
        font-size: 13px;
        grid-template-columns: auto 30px;
    }

    /* @media (max-width: 650px), (max-height: 580px) {

        & > .menu {
            & > .menuItems {
                top: 30px;
            }
        }
    } */
`;

const Navbar = () => {

    // Variable menuState initialised to value false
    const [menuState, setMenuState] = React.useState(false);

    // Function to change the value of menuState (true -> false or false -> true)
    const handleMenuState = () => {
        setMenuState(!menuState);
    }

    // Function to logout
    const handleLogout = () => {

        // Sets value of key "auth" to false in localStorage
        // saveData("auth", false);

        // Reloads the page
        window.location.reload();
    }

    return (
        <NavbarCont>

            {/* Navbar title (left side) */}
            <div className="title">

                {/* Title icon */}
                <AiOutlineWhatsApp className="titleIcon" />

                {/* Title text */}
                <div className="titleText">WhatsApp Web</div>

            </div>

            {/* Menu (right side) */}
            <div className="menu">

                {/* Menu Icon with an onlick function to change value of menuState */}
                <HiOutlineMenu onClick={handleMenuState} className="menuIcon" />

                {/* Is displayed only when menuStatus is true */}
                <div className={menuState ? "menuItems" : "hidden"}>

                    {/* Logout button */}
                    <div className="logout" onClick={handleLogout}>Logout</div>

                </div>
            </div>

        </NavbarCont>
    )
}

export default Navbar;