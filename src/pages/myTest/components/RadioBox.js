import styled from "styled-components";

function RadioBox({ name }) {
    const answerList = [
        { num: 1, text: "전혀 아니다" },
        {
            num: 2,
            text: "아니다",
        },
        {
            num: 3,
            text: "보통이다",
        },
        {
            num: 4,
            text: "그렇다",
        },
        {
            num: 5,
            text: "매우 그렇다",
        },
    ];
    return (
        <RadioBoxWrap>
            {answerList.map((item) => (
                <Radio key={item.num}>
                    <input
                        type="radio"
                        id={`${name}-${item.num}`}
                        name={name}
                    />
                    <label htmlFor={`${name}-${item.num}`}>
                        <span>{item.num}</span>
                        <p>{item.text}</p>
                    </label>
                </Radio>
            ))}
        </RadioBoxWrap>
    );
}
const RadioBoxWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        gap: 0;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        gap: 0.8rem;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
        gap: 0;
    }
`;
const Radio = styled.div`
    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
        width: 9.4rem;
        cursor: pointer;
        letter-spacing: -0.39px;
        word-break: keep-all;
        text-align: center;
        span {
            width: 4.6rem;
            height: 4.6rem;
            border-radius: 50%;
            border: 1px solid #dfdfdf;
            background: #fff;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 4.4rem;
            text-align: center;
            color: #a5a5a5;
            display: block;
            transition: all 0.3s;
        }
        p {
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 1.8rem;
        }
        &:hover {
            span {
                background: #f4f4f4;
                color: ${({ theme }) => theme.colors.textPlaceHolder};
            }
        }
    }
    input[type="radio"] {
        display: none;
        &:checked + label {
            span {
                border-color: ${({ theme }) => theme.colors.primaryBg};
                color: #fff;
                background: ${({ theme }) => theme.colors.primaryBg};
            }
            p {
                color: ${({ theme }) => theme.colors.primaryBg};
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        label {
            width: 7.4rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        label {
            width: 4.6rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
        label {
            width: 3.7rem;
            span {
                width: 3rem;
                height: 3rem;
                line-height: 2.8rem;
            }
        }
    }
`;
export default RadioBox;
