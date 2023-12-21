import styled from "styled-components";
import RadioBox from "./RadioBox";

function TestCard({ num, title, id }) {
    return (
        <TestCardWrap>
            <p className="num">문항 {num}</p>
            <h4>{title}</h4>
            <div className="radio_wrap">
                <RadioBox name={id} />
            </div>
        </TestCardWrap>
    );
}
const TestCardWrap = styled.div`
    padding: 2rem 1.6rem;
    border-radius: 1.2rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .num {
        height: 2.6rem;
        line-height: 2.6rem;
        padding: 0 1.2rem;
        background: #f9f9f9;
        border-radius: 1.3rem;
        font-size: 1.3rem;
        font-weight: 500;
        color: #3d3d3d;
        margin-bottom: 8px;
    }
    h4 {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
        letter-spacing: -0.48px;
        margin-bottom: 2rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        align-items: flex-start;
        .radio_wrap {
            width: 100%;
        }
    }
`;
export default TestCard;
