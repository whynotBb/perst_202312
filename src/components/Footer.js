import styled from "styled-components";
import Logo from "../assets/images/scoutLogoFooter.svg";
import IcoCall from "../assets/images/ico_call.svg";
import IcoMail from "../assets/images/ico_mail.svg";

function Footer() {
    return (
        <FooterWrap>
            <footer>
                <div className="title">
                    <h1 className="logo">scout</h1>
                    <p>회사소개</p>
                </div>
                <FlexRow>
                    <div className="information">
                        <ul>
                            <li>대표: 민병도</li>
                            <li>개인정보관리 책임자: 박준석​</li>
                            <li>
                                서울시 강남구 언주로 431 삼봉빌딩 3층~5층,
                                7층~8층
                            </li>
                            <li>사업자등록번호 : 124-81-57055</li>
                            <li>
                                유료직업소개사업등록번호 :
                                제2015-3220163-14-5-00051호
                            </li>
                            <li>
                                통신판매업 신고번호 : 제 2015-서울강남-03605호
                            </li>
                            <li>부가통신사업 신고번호 : 제 2-01-15-0206호​</li>
                            <li>
                                직업정보제공사업 신고번호 : 강남 제 2003-14호​
                            </li>
                        </ul>
                        <div className="mobileInformation">
                            대표: 민병도 l 개인정보관리 책임자: 박준석 l 서울시
                            강남구​ 언주로 431 삼봉빌딩 3층~5층, 7층~8층 l
                            사업자등록번호 : 124-81-57055 l
                            유료직업소개사업등록번호 :
                            제2015-3220163-14-5-00051호​ l 통신판매업 신고번호 :
                            제 2015-서울강남-03605호 l 부가통신사업 신고번호 :
                            제 2-01-15-0206호​ l 직업정보제공사업 신고번호 :
                            강남 제 2003-14호​
                        </div>
                    </div>
                    <div className="contact">
                        <ul className="contact_list">
                            <li className="call">
                                <a href="tel:0234823366">02-3482-3366</a>
                            </li>
                            <li className="mail">
                                <a href="mailto:CS@scout.co.kr">
                                    CS@scout.co.kr
                                </a>
                            </li>
                        </ul>
                        <div>
                            <p>
                                평일 오전 9시-오후 6시 (점심시간 오후 12시-오후
                                1시)
                            </p>
                            <p>주말/공휴일 휴무</p>
                        </div>
                    </div>
                </FlexRow>
                <p className="copyright">
                    Copyright © 2023-2023 SCOUT. All Rights Reserved
                </p>
            </footer>
        </FooterWrap>
    );
}
const FooterWrap = styled.div`
    width: 100%;
    padding-bottom: 3rem;
    footer {
        width: 100%;
        max-width: 114rem;
        margin: 0 auto;
        border-radius: 16px;
        padding: 4rem;
        background: linear-gradient(93deg, #0b1223 2.19%, #13244f 96.64%);
        position: relative;
        color: #cecfd1;
        letter-spacing: -0.42px;
        .copyright {
            position: absolute;
            bottom: -3rem;
            left: 0;
            font-size: 15px;
            color: ${({ theme }) => theme.colors.textGray};
            font-weight: 400;
            line-height: 22px;
        }
        .title {
            display: flex;
            gap: 2.4rem;
            align-items: center;
            margin-bottom: 1.6rem;
            .logo {
                width: 9rem;
                height: 2.4rem;
                background: url(${Logo}) no-repeat center;
                text-indent: -999999px;
                color: transparent;
                font-size: 0;
            }
            p {
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
            }
        }
        .information {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            flex: 1;
            position: relative;
            ul {
                display: flex;
                flex-wrap: wrap;
                gap: 0.6rem 1.6rem;
                li {
                    position: relative;

                    &::before {
                        content: "|";
                        display: block;
                        position: absolute;
                        top: 0;
                        left: -0.8rem;
                        color: #555;
                    }
                    &:nth-child(1)::before,
                    &:nth-child(4)::before,
                    &:nth-child(6)::before,
                    &:nth-child(8)::before {
                        display: none;
                    }
                }
            }
            &::after {
                content: "";
                width: 1px;
                height: 100%;
                background: rgba(206, 207, 209, 0.3);
                position: absolute;
                right: -48px;
                top: 0;
            }
            .mobileInformation {
                display: none;
                color: #cecfd1;
                font-family: Pretendard;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: -0.42px;
            }
            @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
                ul {
                    width: 100%;
                    max-width: 72rem;
                }
                &::after {
                    width: 100%;
                    height: 1px;
                    top: initial;
                    right: 0;
                    bottom: -1.6rem;
                }
            }
            @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
                ul {
                    display: none;
                }
                .mobileInformation {
                    display: block;
                }
            }
        }
        .contact {
            width: 42.4rem;
            .contact_list {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1rem;
                li {
                    padding-left: 3.2rem;
                    flex: 1;
                    background-repeat: no-repeat;
                    background-position: left center;
                    font-size: 18px;
                    line-height: 28px;
                    letter-spacing: -0.54px;
                    &.call {
                        background-image: url(${IcoCall});
                    }
                    &.mail {
                        background-image: url(${IcoMail});
                    }
                }
            }
            p {
                font-size: 14px;
                font-weight: 300;
                line-height: 20px;
                margin-bottom: 0.4rem;
            }
            @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
                .contact_list li {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                }
                p {
                    font-size: 15px;
                    font-weight: 300;
                    line-height: 22px;
                    letter-spacing: -0.45px;
                }
            }
            @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
                ul {
                    flex-direction: column;
                }
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 0 3.2rem 3rem;
        footer {
            max-width: initial;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 0 0 4.4rem;
        footer {
            border-radius: 0;
            padding: 3rem;
            .copyright {
                width: 100%;
                text-align: center;
                font-size: 1.4rem;
                height: 4.4rem;
                line-height: 4.4rem;
                bottom: -4.4rem;
            }
        }
    }
`;
const FlexRow = styled.div`
    display: flex;
    gap: 9.6rem;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        flex-wrap: wrap;
        gap: 3.2rem;
        & > div {
            width: 100%;
            flex: initial !important;
        }
    }
`;
export default Footer;
