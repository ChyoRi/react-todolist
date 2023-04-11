import React from "react";
import styled from "styled-components";
import '../index.scss';

let date = new Date();
let Y = date.getFullYear();
let M = date.getMonth() + 1;
let D = date.getDate() < 0 ? '0' + date.getDate() : date.getDate();
let d = date.getDay();

const month = date.toLocaleString('en-US', { month: "short" }).toUpperCase();
const day = ['SUNDAY', 'MONDAY', 'TUESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

function Header() {
    return(
        <HeaderContainer>
            <Title>
                <Day>{D}</Day>
                <div className="year-month-container">
                    <Month>{day[d]}</Month>
                    <Year>{month}</Year>
                </div>
            </Title>
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

const Day = styled.strong`
    color: $color-gray;
`;

const Year = styled.span`
    color: $color-gray;
`;

const Month = styled.span`
    color: $color-gray;
`;

export default Header;