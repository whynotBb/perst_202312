import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button";
import CsHeader from "../components/CsHeader";
import CsListWrapper from "../components/CsListWrapper";
import styled from "styled-components";
import IcoFile from "../../../assets/images/file_link.svg";

function NoticeDetail() {
    return (
        <CsListWrapper>
            <div className="header">
                <CsHeader title="공지사항" />
            </div>
            <div className="body detail">
                <div className="detail_wrap">
                    <BtnWrap className="btn_wrap">
                        <Button className="round h_40 ico_left">
                            <Link to="/notice">목록으로</Link>
                        </Button>
                    </BtnWrap>
                    <DetailContents>
                        <div className="detail_title">
                            <h3>
                                10/22 공지사항입니다.10/22 공지사항입니다.10/22
                                공지사항입니다.10/22 공지사항입니다.10/22
                                공지사항입니다.10/22 공지사항입니다.
                            </h3>
                            <span className="date">20/03/13</span>
                        </div>
                        <div className="detail_body">
                            <div className="inner">
                                안녕하세요, 사이버진로교육센터 관리자입니다.
                                <br />
                                <br />
                                고용서비스 통합포털(‘고용24’) 시범운영 오픈
                                작업을 진행하고자 합니다.
                                <br />
                                <br />
                                위와 관련하여, 워크넷 시스템을 아래와 같이
                                중단하오니 양해 부탁드립니다.
                                <br />
                                가. 작업일시 : ‘23.12.08(금) 20:00 ~
                                ‘23.12.11(월) 08:00
                                <br />
                                ※ 작업시간은 진행 상황에 따라 변경될 수
                                있습니다.
                                <br />
                                나. 작업내용 : 고용서비스 통합포털(‘고용24’)
                                시범운영 오픈 작업
                                <br />
                                다. 중단업무 : 워크넷 전체 서비스
                                <br />
                                - 워크넷(worknet), 워크투게더(장애인고용공단),
                                OpenAPI, 지역워크넷, 모바일워크넷,
                                사이버진로교육센터
                                <br />
                                감사합니다.
                            </div>
                        </div>
                        <div className="detail_file">
                            <h4>첨부파일</h4>
                            <div>
                                <Link to="">추가안내.hwp</Link>
                            </div>
                        </div>
                    </DetailContents>
                </div>
            </div>
        </CsListWrapper>
    );
}
const DetailContents = styled.div`
    margin-top: 1.6rem;
    border-radius: 12px;
    background: #fff;
    padding: 0 3.2rem;
    .detail_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.4rem 0;
        gap: 1rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
        h3 {
            font-size: 2rem;
            font-weight: 400;
            line-height: 3.2rem;
            color: #171717;
            flex: 1;
            ${({ theme }) => theme.common.ellipsis}
        }
        .date {
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 2.2rem;
            color: ${({ theme }) => theme.colors.textGray};
        }
    }
    .detail_body {
        padding: 2.4rem 0;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
        letter-spacing: -0.48px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
    }
    .detail_file {
        display: flex;
        align-items: center;
        gap: 3.2rem;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.4rem;
        padding: 2.4rem 0;
        h4 {
            color: #3d3d3d;
            font-weight: 400;
            padding-left: 2.8rem;
            background: url(${IcoFile}) no-repeat left center;
        }
        a {
            text-decoration: underline;
            text-underline-position: under;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        .detail_title {
            padding: 2rem 0 1.6rem;
            h3 {
                font-size: 1.8rem;
                line-height: 2%.8;
            }
        }
        .detail_body {
            padding: 1.6rem 0;
        }
        .detail_file {
            padding: 2rem 0 1.6rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        .detail_title {
            h3 {
                font-size: 1.6rem;
                line-height: 2.4rem;
            }
            .date {
                font-size: 1.4rem;
                line-height: 2rem;
            }
        }
        .detail_body {
            font-size: 1.5rem;
        }
        .detail_file {
            font-size: 1.5rem;
        }
    }
`;
const BtnWrap = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        padding: 1.2rem 1.6rem;
        background: #fff;
        border-top: 1px solid #f4f4f4;
        button {
            width: 100%;
            border-radius: 4px !important;
            background: #eff8ff !important;
            border-color: #eff8ff !important;
            font-size: 1.6rem !important;
            height: 4.8rem !important;
            line-height: 4.6rem !important;
            color: ${({ theme }) => theme.colors.primaryBorder} !important;
        }
    }
`;
export default NoticeDetail;
