import React from 'react';
import styled from "styled-components";

const ContactsList = styled.div`


    & > .contact {
        border: 1px solid lightgray;
        padding: 3%;
        transition: 0.5s;

        :hover {
            background-color: #e6e6e6;
            cursor: pointer;
        }
    }
`;

const Contacts = () => {

    const list = new Array(10).fill("martin").map((ele, index) => ele + index);

    return (
        <ContactsList>
            {
                list.map(ele => <div className="contact">{ele}</div>)
            }
        </ContactsList>
    )
}

export default Contacts;