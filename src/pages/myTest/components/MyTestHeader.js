import styled from "styled-components";
import Button from "../../../components/UI/Button";

function MyTestHeader({ title }) {
    return (
        <MyTestHeaderWarp>
            <div className="col">
                <h3>
                    나의 TEST <span className="counter">3건</span>
                </h3>
                <p className="info_txt">
                    보유하신 인적성 코드가 있는 경우 ‘코드 번호 등록’버튼으로
                    등록해 주세요.
                </p>
            </div>
            <Button className="round mid ico_right_w ">코드번호 등록</Button>
        </MyTestHeaderWarp>
    );
}
const MyTestHeaderWarp = styled.div`
    width: 100%;
    padding: 3.2rem 4rem;
    border-radius: 12px;
    background: linear-gradient(91deg, #243f9c -5.08%, #328ef0 107.65%);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h3 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;
        margin-bottom: 0.4rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .counter {
        display: block;
        border-radius: 100px;
        background: rgba(255, 255, 255, 0.3);
        height: 2.8rem;
        line-height: 2.8rem;
        padding: 0 1.2rem;
        font-size: 1.4rem;
        font-weight: 500;
        color: #fff;
    }
    .info_txt {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.8rem;
        letter-spacing: -0.54px;
    }
    button {
        color: #fff;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 2.4rem 1.6rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 1.6rem;
        h3 {
            font-size: 2rem;
        }
        .info_txt {
            font-size: 1.6rem;
            line-height: 2.4rem;
        }
        button {
            display: none;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export default MyTestHeader;
