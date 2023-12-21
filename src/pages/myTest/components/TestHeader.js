import styled from "styled-components";

function TestHeader() {
    return (
        <TestHeaderWrap>
            <h3>㈜플랫포머스인적성검사 1차</h3>
            <ul>
                <li>
                    <span>검사유형</span>
                    <p>인성검사</p>
                </li>
                <li>
                    <span>검사시간</span>
                    <p>30분</p>
                </li>
                <li>
                    <span>응시자</span>
                    <p>하미미 님</p>
                </li>
            </ul>
        </TestHeaderWrap>
    );
}
const TestHeaderWrap = styled.div`
    padding: 2.4rem 3.2rem;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
    background: #f9f9f9;
    display: flex;
    gap: 1.6rem;
    align-items: center;
    h3 {
        flex: 1;
        ${({ theme }) => theme.common.ellipsis}
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;
    }
    ul {
        display: flex;
        gap: 1.6rem;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.8rem;
        letter-spacing: -0.45px;
        li {
            display: flex;
            gap: 1.2rem;
            span {
                font-size: 1.6rem;
                color: #6f6f6f;
                position: relative;
                &::after {
                    display: block;
                    content: "|";
                    width: 1px;
                    height: 1.2rem;
                    position: absolute;
                    top: 0;
                    right: -5px;
                    color: #a5a5a5;
                }
            }
            /* &:last-child span::after {
                display: none;
            } */
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
        h3 {
            font-size: 2rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 2rem 2.4rem;
        ul {
            font-size: 1.6rem;
            span {
                font-size: 1.5rem;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        padding: 2rem 1.6rem;
        h3 {
            font-size: 1.8rem;
        }
        ul {
            flex-wrap: wrap;
            gap: 0.5rem 1.6rem;
            font-size: 1.5rem;
            span {
                font-size: 1.4rem;
            }
        }
    }
`;
export default TestHeader;
