import { useState, useRef } from 'react';
import styled from "styled-components";

const Modal = ({ close }) => {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');

    // 저장
    const submit = () => {
        console.log(value);
        console.log('저장되었습니다.');

        // 저장 후 처리 할 로직 //
        setValue('');
        close();
    }

    // 유효성 검사
    const validate = () => {
        if (!value) return inputRef.current.focus();
        submit();
    }

    // DIM 클릭 시
    const dimClick = () => {
        if (value) return;
        close();
    }

    return(
        <>
            <ModalDim onClick={dimClick} />
            <ModalContainer>
                <InputWrap>
                    <TitleInput
                        ref={inputRef} 
                        value={value} 
                        onChange={e => setValue(e?.target?.value)}
                    />
                </InputWrap>
                <ExitBtn onClick={close} />
                <AddBtn onClick={validate}>추가하기</AddBtn>
            </ModalContainer>
        </>
    )
};

const ModalDim = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 30%;
    padding: 50px 20px 40px;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusSmall};
    background-color: ${({ theme }) => theme.colors.white};
    transform: translate(-50%, -50%);
    z-index: 2;
`;

const InputWrap = styled.div`
    width: 100%;
`;

const TitleInput = styled.input.attrs(() => ({
    type: 'text',
    placeholder: '할일을 입력해주세요.'
}))`
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
  background-image: url('./images/x.svg');
`;

const AddBtn = styled.button`
    width: 100%;
    padding: 10px 0;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusSmall};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.lightBlue};
    transform: translateY(0);
    transition: 0.3s;
    box-shadow: 5px ${({ theme }) => theme.colors.black};

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 5px 5px ${({ theme }) => theme.colors.gray};
    }

`;

export default Modal;