import styled from "styled-components";

let date = new Date();
let Y = date.getFullYear();
let M = date.toLocaleString('en-US', { month: "long" });
let D = date.getDate() < 0 ? '0' + date.getDate() : date.getDate();
let d = date.getDay();

const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Header = () => {
    return(
        <HeaderContainer>
            <DateTitle>{day[d]}, {M} {D}, {Y}</DateTitle>
            <TasksConunt>tasks</TasksConunt>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    border-end-end-radius: 50%;
    border-end-start-radius: 50%;
    background-color: ${({ theme }) => theme.colors.darkBlue};
`;

const DateTitle = styled.h1`
    font-size: 26px;
    color: ${({ theme }) => theme.colors.white};
`;

const TasksConunt = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
`

export default Header;