import { useState } from "react";
import styled from "styled-components";
import Modal from './Modal';

const Main = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <MainContainer>
            <ModalOpenBtn onClick={open}>+</ModalOpenBtn>
            {isOpen && <Modal close={close} />}
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