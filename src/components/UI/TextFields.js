import styled from "styled-components";

function TextFields({
    type,
    className,
    placeholder,
    disabled,
    error,
    errorTxt,
    value,
}) {
    /* 
    type: text, password, Number
    disabled : disabled
    className : loginId,loginPW - 로그인
    error : 유효성검사에서 error - error="error"
    errorTxt : 에러메시지
    // 사용 예시
    <TextFields
        type="text"
        className="loginId"
        placeholder="ID"
        disabled
        error="error"
        errorTxt="에러메시지"
    />
    */
    // className 과 error 조합
    let classNames = [];
    if (className) {
        classNames = classNames.concat(className.split(" "));
    }
    if (error) {
        classNames.push("error");
    }
    const combinedClassName = classNames.join(" ");

    return (
        <div>
            <TextInput className={combinedClassName}>
                <input
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                />
            </TextInput>
            {errorTxt && <ErrorMsg>{errorTxt}</ErrorMsg>}
        </div>
    );
}
const TextInput = styled.div`
    /* width: 22.4rem; */
    height: 4.5rem;
    input {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
        border: 1px solid ${({ theme }) => theme.colors.borderInput};
        outline: none;
        padding: 0 2rem;
        color: #171717;
        font-size: 1.6rem;
        font-weight: 400;
        &::placeholder {
            color: ${({ theme }) => theme.colors.textPlaceHolder};
        }
        &:focus,
        &:hover {
            border-color: ${({ theme }) => theme.colors.primaryBorder};
        }
        &:disabled {
            color: ${({ theme }) => theme.colors.textGray};
            border: 1px solid ${({ theme }) => theme.colors.borderDark};
            background: #f4f4f4;
            &:hover {
                border-color: ${({ theme }) => theme.colors.borderInput};
            }
        }
    }

    &.error {
        input {
            border-color: ${({ theme }) => theme.colors.danger} !important;
        }
    }
    &.w100 {
        width: 100%;
    }
    /* 20231011 스타일 추가 */
    &.wSmall {
        width: 10rem;
    }
`;
const ErrorMsg = styled.p`
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.colors.danger};
    text-align: left;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: -0.42px;
    width: 100%;
`;
export default TextFields;
