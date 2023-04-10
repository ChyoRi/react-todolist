import React from "react";
import styled from "styled-components";

let date = new Date();
let Y = date.getFullYear();
let M = date.getMonth() + 1;
let D = date.getDate();
let d = date.getDay();

function Header() {
    return(
        <HeaderContainer>
            <Title>ToDoList</Title>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-family:'NanumSquareRoundExtraBold';
    color: red;
`;

export default Header;