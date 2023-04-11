import styled from "styled-components";

const Modal = () => {
    return(
        <ModalContainer>
        </ModalContainer>
    )
};

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 30%;
    border: 1px solid #000;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusSmall};
    background-color: ${({ theme }) => theme.colors.white};
    transform: translate(-50%,- 50%);
    z-index: 2;
`;

export default Modal;