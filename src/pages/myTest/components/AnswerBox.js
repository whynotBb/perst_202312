import styled from "styled-components";

function AnswerBox({ answerList }) {
    return (
        <AnswerBoxWrap>
            <h4>답안 체크</h4>
            {answerList.map((item, index) => (
                <AnswerList key={index}>
                    <h5>
                        <span>문항 </span>
                        {item.num}
                    </h5>
                    <ul>
                        {[1, 2, 3, 4, 5].map((value, index) => (
                            <li
                                key={index}
                                className={value === item.answer ? "on" : ""}
                            >
                                {value}
                            </li>
                        ))}
                    </ul>
                </AnswerList>
            ))}
        </AnswerBoxWrap>
    );
}
const AnswerBoxWrap = styled.div`
    padding: 2.4rem 1.6rem;
    border-radius: 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
    background: #f9f9f9;
    h4 {
        font-size: 2rem;
        font-weight: 500;
        line-height: 3.2rem;
        text-align: center;
        margin-bottom: 2.4rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 0;
        border: none;
        background: none;
    }
`;
const AnswerList = styled.div`
    display: flex;
    gap: 0.8rem;
    color: ${({ theme }) => theme.colors.textPlaceHolder};
    margin-bottom: 1.2rem;
    h5 {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 3.4rem;
        width: 3.4rem;
        text-align: center;
        span {
            display: none;
        }
    }
    ul {
        display: flex;
        gap: 0.8rem;
        li {
            width: 3rem;
            height: 3rem;
            text-align: center;
            line-height: 2.8rem;
            border-radius: 1.5rem;
            font-size: 1.6rem;
            font-weight: 400;
            border: 1px solid ${({ theme }) => theme.colors.borderDark};
            background: #fff;
            cursor: pointer;
            &:hover {
                background: #f4f4f4;
                color: ${({ theme }) => theme.colors.textPlaceHolder};
            }
            &.on {
                background: ${({ theme }) => theme.colors.primaryBg};
                border-color: ${({ theme }) => theme.colors.primaryBg};
                color: #fff;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        h5 {
            width: 6rem;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 400;
            span {
                display: inline-block;
                margin-right: 0.4rem;
            }
        }
        ul {
            flex: 1;
            gap: 0;
            justify-content: space-around;
        }
    }
`;
export default AnswerBox;
