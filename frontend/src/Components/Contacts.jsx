import React from 'react';
import styled from "styled-components";

const ContactsList = styled.div`

    & > div {
        border: 1px solid lightgray;
        padding: 3%;

        :hover {
            background-color: #e6e6e6;
            cursor: pointer;
        }
    }

    & > .selected {
        color: #0c8d51;
        font-weight: 700;
        background-color: #8cebbe !important;
    }
`;

const Contacts = ({selected, changeScreen, changeSelected}) => {

    const list = new Array(10).fill("Martin").map((ele, index) => ele + index);

    const handleChange = (contactName) => {
        changeSelected(contactName);
        changeScreen("messages")
    }

    return (
        <ContactsList>
            {
                list.map(ele => <div className={selected === ele ? "selected" : "notSelected"} onClick={() => handleChange(ele)}>{ele}</div>)
            }            
        </ContactsList>
    )
}

export default Contacts;