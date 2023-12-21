import styled from "styled-components";
import TextFields from "../../components/UI/TextFields";
import IcoCode from "../../assets/images/img_code.svg";

function CodeInput() {
    return (
        <CodeInputWrap>
            <h4>코드번호 등록</h4>
            <p>보유하고 계신 코드번호가 있으신 경우 아래에 입력해 주세요.</p>
            <TextFields placeholder="코드번호를 입력해 주세요." />
        </CodeInputWrap>
    );
}
const CodeInputWrap = styled.div`
    text-align: center;
    h4 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.colors.primaryText};
        margin-bottom: 0.4rem;
        padding-top: 9.2rem;
        background-image: url(${IcoCode});
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 7.9rem;
    }
    & > p {
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 2.8rem; /* 155.556% */
        letter-spacing: -0.54px;
        margin-bottom: 3.2rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        padding: 2.3rem 0;
        h4 {
            font-size: 2rem;
        }
        & > p {
            width: 23rem;
            margin: 0 auto 3.2rem;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2.4rem;
            letter-spacing: -0.48px;
        }
    }
`;
export default CodeInput;
