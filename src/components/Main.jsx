import styled from "styled-components";

const Main = () => {
    return (
        <MainContainer>
            <ModalOpenBtn>+</ModalOpenBtn>
        </MainContainer>
    )
}

const MainContainer = styled.main`
    height: calc(100vh - 80px);
`;

const ModalOpenBtn = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.lightBlue};
    
`;

export default Main;