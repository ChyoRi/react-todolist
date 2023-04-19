import styled from "styled-components";

const Modal = () => {
    return(
        <ModalContainer>
            <div className="title-wrap">
                <TitleInput type="text" placeholder="할일을 입력해주세요." />
            </div>
            <ExitBtn />
        </ModalContainer>
    )
};

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 30%;
    padding: 30px;
    border: 1px solid #000;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusSmall};
    background-color: ${({ theme }) => theme.colors.white};
    transform: translate(-50%, -50%);
    z-index: 2;
`;

const TitleInput = styled.input`
    width: 100%;
    font-size: 24px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkBlue};
`;

const ExitBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
`;

export default Modal;