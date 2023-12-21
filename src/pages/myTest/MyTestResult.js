import TestBoxWrap from "./components/TestBoxWrap";
import ImgReport from "../../assets/images/report.png";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import IcoDownloadP from "../../assets/images/ico_export_primary.svg";
import IcoPrintP from "../../assets/images/ico_print_primary.svg";
import IcoPrev from "../../assets/images/arrow-left.svg";

function MyTestResult() {
    return (
        <TestBoxWrap>
            <div className="header">
                <TestResultHeader>
                    <h3>TEST 결과 내역 상세</h3>
                    <div className="btn_header_wrap">
                        <Button>뒤로</Button>
                        <Button className="round ico_download">
                            PDF 다운로드
                        </Button>
                        <Button className="round ico_print">인쇄하기</Button>
                    </div>
                </TestResultHeader>
            </div>
            <div className="body">
                <div className="report_result_pdf">
                    <img src={ImgReport} alt="" />
                </div>
            </div>
        </TestBoxWrap>
    );
}
const TestResultHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.4rem 4rem;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
    background: #f9f9f9;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3.2rem;
    .btn_header_wrap {
        display: flex;
        gap: 0.8rem;
        button {
            &:nth-child(1) {
                display: none;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 1.6rem 2.4rem;
        h3 {
            font-size: 1.8rem;
            line-height: 2.8rem;
            text-align: center;
            width: 100%;
        }
        .btn_header_wrap {
            background: #fff;
            z-index: 10;
            position: fixed;
            width: 100%;
            bottom: 0;
            left: 0;
            padding: 1.2rem 1.6rem;
            gap: 0.8rem;
            button {
                border-radius: 0.4rem;
                color: #328ef0;
                height: 4.8rem;
                line-height: 4.6rem;

                &:nth-child(1) {
                    display: block;
                    width: 4.8rem;
                    text-indent: -999999px;
                    font-size: 0;
                    color: transparent;
                    border-color: #dfdfdf;
                    padding: 0;
                    background: url(${IcoPrev}) no-repeat center;
                    background-size: 1.8rem;
                }
                &:nth-child(2) {
                    flex: 1;
                    background: #eff8ff;
                    border-color: #eff8ff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    gap: 0.6rem;
                    &::before {
                        content: "";
                        width: 2.4rem;
                        height: 2.4rem;
                        background: url(${IcoDownloadP}) no-repeat center;
                    }
                }
                &:nth-child(3) {
                    padding: 0;
                    gap: 0.6rem;
                    flex: 1;
                    background: #eff8ff;
                    border-color: #eff8ff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    gap: 0.6rem;
                    &::before {
                        content: "";
                        width: 2.4rem;
                        height: 2.4rem;
                        background: url(${IcoPrintP}) no-repeat center;
                    }
                }
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
        .btn_header_wrap {
            button {
                font-size: 1.4rem;
                &:nth-child(1) {
                    border: none;
                }
                &:nth-child(2) {
                    &::before {
                        display: none;
                    }
                }
                &:nth-child(3) {
                    &::before {
                        display: none;
                    }
                }
            }
        }
    }
`;
export default MyTestResult;
