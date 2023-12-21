import styled from "styled-components";
import TestBoxWrap from "./components/TestBoxWrap";
import TestHeader from "./components/TestHeader";
import IcoCaution from "../../assets/images/ico_caution.svg";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

function MyTestStart() {
    return (
        <TestBoxWrap>
            <div className="header">
                <TestHeader />
            </div>
            <div className="body">
                <InfoBox>
                    <h4 className="caution">주의사항</h4>
                    <ul className="inner">
                        <li>
                            검사는 약 30분 소요되며, 검사시작 버튼을 누르면
                            검사가 시작됩니다. 검사는 취소할 수 없으며 재응시가
                            불가능하므로 반드시 충분한 시간 및 인터넷 연결이
                            안정화된 환경을 확보하는 등 검사를 끝까지 실시할 수
                            있는 상황에서 검사시작 버튼을 눌러 주십시오.
                        </li>
                        <li>
                            검사가 시작된 이후 제한시간이 지난 경우 모든 문항에
                            응답하지 못했더라도 검사가 자동으로 종료됩니다.
                            응시시간에 유의하여 진행해 주십시오.
                        </li>
                        <li>
                            본 검사는 정답이 없는 검사로 본인에게 해당하는
                            응답을 솔직하게 선택해주시면 됩니다.
                        </li>
                        <li>
                            검사에 솔직하게 응답하지 않는 경우, 검사결과가 무효
                            처리될 수 있음에 유의하시어 반드시 꾸밈 없이 응답해
                            주십시오.
                        </li>
                    </ul>
                </InfoBox>
            </div>
            <div className="btn_wrap">
                <Button className="round h_50">
                    <Link to="/mytest">이전으로</Link>
                </Button>
                <Button className="primary round h_50">
                    <Link to="/mytest/:mytestId/detail">검사시작</Link>
                </Button>
            </div>
        </TestBoxWrap>
    );
}
const InfoBox = styled.div`
    padding: 4rem 3.2rem;
    text-align: center;
    border-radius: 1.6rem;
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
    background: #f9f9f9;
    position: relative;
    .caution {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        font-size: 2rem;
        font-weight: 400;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.colors.primaryBg};
        margin-bottom: 2.4rem;

        &::before {
            content: "";
            width: 2.2rem;
            height: 2.2rem;
            background: url(${IcoCaution}) no-repeat center;
        }
    }
    .inner {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            &:nth-child(1)::before {
                content: "1.";
            }
            &:nth-child(2)::before {
                content: "2.";
            }
            &:nth-child(3)::before {
                content: "3.";
            }
            &:nth-child(4)::before {
                content: "4.";
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        padding: 2.4rem 1.6rem;
        text-align: left;
        .caution {
            font-size: 1.6rem;
        }
        .inner {
            font-size: 1.4rem;
            line-height: 2rem;
            li {
                justify-content: flex-start;
                align-items: flex-start;
            }
        }
        .btn_wrap {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            padding: 1.2rem 1.6rem;
            background: #fff;
            z-index: 10;
        }
    }
`;
export default MyTestStart;
