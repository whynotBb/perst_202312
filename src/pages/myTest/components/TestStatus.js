import styled from "styled-components";
import Button from "../../../components/UI/Button";
import IcoClock from "../../../assets/images/clock.svg";
import { Link } from "react-router-dom";
import IcoLeft from "../../../assets/images/arrow-left-gray.svg";
import IcoRight from "../../../assets/images/arrow-right-gray.svg";

function TestStatus({ className }) {
    return (
        <TestStatusWrap>
            <ul className="list_status">
                <li>
                    <Button className="h_50 round ico_left_b">이전</Button>
                </li>
                <li>2/25</li>
                <li>
                    <Button className="h_50 round ico_right_b">다음</Button>
                </li>
            </ul>
            <ul className="timer_wrap">
                <li className={`timer ${className}`}>27분 05초</li>
                <li>
                    <Button className="h_50 round blackBg">
                        <Link to="/mytest/result">최종 제출</Link>
                    </Button>
                </li>
            </ul>
        </TestStatusWrap>
    );
}
const TestStatusWrap = styled.div`
    /* position: fixed;
    width: 100%;
    max-width: 114rem;
    margin: 0 auto;
    bottom: 4.5rem; */
    padding: 1.8rem 2.4rem;
    background: #333;
    border-radius: 1.2rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .list_status {
        display: flex;
        gap: 2.4rem;
        li {
            line-height: 5rem;
            font-size: 1.7rem;
            font-weight: 400;
        }
    }
    .timer_wrap {
        display: flex;
        align-items: center;
        line-height: 5rem;
        gap: 1.6rem;
        .timer {
            padding-left: 2.8rem;
            background: url(${IcoClock}) no-repeat left center;
            font-size: 2rem;
            font-weight: 400;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        background: none;
        .list_status {
            border-radius: 100px;
            border: 1px solid #dfdfdf;
            background: none;
            color: #8b8b8b;
            backdrop-filter: blur(2px);
            padding: 0 1.6rem;
            align-items: center;
            gap: 1.2rem;
            position: absolute;
            left: 0;
            bottom: 4.5rem;
            button {
                border: none !important;
                text-indent: -99999px;
                font-size: 0;
                color: transparent;
                min-width: 2rem;
                width: 2rem;
                height: 4rem;
                padding: 0;
            }
            li {
                line-height: 4rem;
                &:nth-child(1) {
                    button {
                        background: url(${IcoLeft}) no-repeat center;
                    }
                }
                &:nth-child(3) {
                    button {
                        background: url(${IcoRight}) no-repeat center;
                    }
                }
            }
        }
        .timer_wrap {
            .timer {
                border-radius: 100px;
                background: rgba(51, 51, 51, 0.85) url(${IcoClock}) no-repeat
                    left 2rem center;
                backdrop-filter: blur(2px);
                position: fixed;
                right: 2rem;
                bottom: 8rem;
                font-size: 1.6rem;
                padding: 0 2rem 0 4.8rem;
                height: 4.5rem;
                line-height: 4.3rem;
                transition: all 0.3s;
                &.active {
                    bottom: 66rem;
                    z-index: 999;
                }
            }
            li {
                &:nth-child(2) {
                    display: none;
                }
            }
        }
    }
`;
export default TestStatus;
