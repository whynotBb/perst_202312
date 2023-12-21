import styled from "styled-components";
import Button from "../../components/UI/Button";
import ImgCode from "../../assets/images/img_code.svg";
import ImgMail from "../../assets/images/img_mail.svg";
import IcoMore from "../../assets/images/ico_more.svg";
import MainBg from "../../assets/images/main_bg.png";
import { useState } from "react";
import Modal from "../../components/UI/Modal";
import CodeInput from "./CodeInput";
import EmailInput from "./EmailInput";

function Home() {
    // 모달여닫기
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModalHandler = () => {
        setIsModalOpen(true);
    };
    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const openModalHandler2 = () => {
        setIsModalOpen2(true);
    };
    const closeModalHandler2 = () => {
        setIsModalOpen2(false);
    };
    return (
        <>
            <KeyVisaul>
                <div className="text_wrap">
                    <h2>
                        나에 대해 알 수 있는
                        <br />
                        가장 빠른 방법, Perst
                    </h2>
                    <p>Perst를 통해 정확한 나의 모습을 찾아보세요!</p>
                </div>
            </KeyVisaul>
            <FlexRow className="code_wrap">
                <Card className="code">
                    <div className="text_wrap">
                        <h3>
                            <span>
                                <b>인적성 검사 코드</b>를​
                            </span>
                            가지고 계신가요?
                        </h3>
                        <Button
                            className="round mid ico_right"
                            onClick={openModalHandler}
                        >
                            코드 등록하기
                        </Button>
                    </div>
                    <Modal
                        close={closeModalHandler}
                        className={`code_type ${isModalOpen ? "active" : ""}`}
                        active={isModalOpen && true}
                    >
                        <div className="body">
                            <CodeInput />
                        </div>
                        <div className="footer">
                            <Button
                                className="round mid normal"
                                onClick={closeModalHandler}
                            >
                                확인
                            </Button>
                        </div>
                        <div className="mobile_footer">
                            <Button
                                className="seocondaryBg h_48"
                                onClick={closeModalHandler}
                            >
                                닫기
                            </Button>
                            <Button
                                className="primaryBg h_48"
                                onClick={closeModalHandler}
                            >
                                다음
                            </Button>
                        </div>
                    </Modal>
                </Card>
                <Card className="info">
                    <div className="text_wrap">
                        <h3>
                            <span>
                                <b>인적성 검사 대상자 </b>
                            </span>
                            안내를 받으셨나요?
                        </h3>
                        <Button
                            className="round mid ico_right"
                            onClick={openModalHandler2}
                        >
                            검사하러 가기
                        </Button>
                        <Modal
                            active={isModalOpen2 && true}
                            close={closeModalHandler2}
                            className={`full_type ${
                                isModalOpen2 ? "active" : ""
                            }`}
                        >
                            <div className="body">
                                <EmailInput />
                            </div>
                        </Modal>
                    </div>
                </Card>
            </FlexRow>
            <FlexRow className="notice_wrap">
                <Notice>
                    <div className="title">
                        <h3>공지사항</h3>
                        <Button className="more_btn">더보기</Button>
                    </div>
                    <Lis>
                        <li>
                            <p>공지사항 안내</p>
                            <i className="date">2023.10.28</i>
                        </li>
                        <li>
                            <p>공지사항 안내</p>
                            <i className="date">2023.10.28</i>
                        </li>
                        <li className="empty_data">
                            <p>등록된 게시글이 없습니다.</p>
                        </li>
                    </Lis>
                </Notice>
                <Notice>
                    <div className="title">
                        <h3>자주 묻는 질문</h3>
                        <Button className="more_btn">더보기</Button>
                    </div>
                    <Lis>
                        <li>
                            <span className="category">사이트 이용</span>
                            <p>응시 시간안에 응시하지 못하면 어떡하나요?</p>
                        </li>
                        <li>
                            <span className="category">인적성검사 관련</span>
                            <p>
                                답안체크를 다 하지 못했습니다. 어떻게 해야
                                하나요?
                            </p>
                        </li>
                        <li>
                            <span className="category">기타</span>
                            <p>
                                코드를 입력했는데 계속 사용했다는 경고창이
                                뜹니다. 빠른 확인 부탁드립니다. 확인확인
                            </p>
                        </li>
                    </Lis>
                </Notice>
            </FlexRow>
        </>
    );
}
const KeyVisaul = styled.div`
    width: 100%;
    padding: 2.4rem 0;
    height: 32.5rem;
    background-image: url(${MainBg});
    background-repeat: no-repeat;
    background-position: right center;
    .text_wrap {
        width: 56rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        h2 {
            font-size: 3.2rem;
            line-height: 4.4rem;
            font-weight: 400;
        }
        p {
            font-size: 1.8rem;
            line-height: 2.8rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 4.8rem 3.2rem;
        height: 53rem;
        background-position: center bottom 4.8rem;
        background-size: 58rem auto;
        .text_wrap {
            width: 100%;
            text-align: center;
            justify-content: flex-start;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        height: 37.7rem;
        background-size: 33.2rem auto;
        .text_wrap {
            h2 {
                font-size: 2rem;
                line-height: 3.2rem;
            }
            p {
                font-size: 1.6rem;
                line-height: 2.4rem;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        padding: 4.8rem 1.6rem;
    }
`;
const FlexRow = styled.section`
    display: flex;
    gap: 2.4rem;
    margin-bottom: 8rem;
    width: 100%;
    & > div {
        width: calc(50% - 1.2rem);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 0 3.2rem;
        gap: 2.4rem 1.6rem;
        flex-wrap: wrap;
        &.notice_wrap {
            & > div {
                width: 100%;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        margin-bottom: 4.8rem;
        &.code_wrap {
            gap: 1.6rem;
            & > div {
                width: 100%;
            }
        }
        &.notice_wrap {
            gap: 4.8rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        padding: 0 1.6rem;
    }
`;
const Card = styled.div`
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: #fff;
    padding: 3.2rem 4rem;
    background-repeat: no-repeat;
    background-position: right 4rem center;
    background-color: #fff;
    background-image: url(${ImgCode});
    h3 {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 2.4rem;
        b {
            font-weight: 600;
        }
        span {
            display: block;
        }
    }
    &.info {
        background-image: url(${ImgMail});
        letter-spacing: -0.54px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 13.6rem 2rem 3.2rem;
        background-position: center top 3.2rem;
        background-size: 9.4rem auto;
        h3 {
            margin-bottom: 1.6rem;
            font-size: 18px;
            line-height: 28px;
            letter-spacing: -0.48px;
            span {
                display: inline-block;
                padding-right: 0.4rem;
            }
        }
        .text_wrap {
            text-align: center;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 100%;
        padding: 3.2rem 2.4rem;
        background-position: right 2.4rem center;
        .text_wrap {
            text-align: left;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        padding-right: 12rem;
    }
`;
const Notice = styled.div`
    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.6rem;
    }
    h3 {
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
    }
`;
const Lis = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    li {
        display: flex;
        align-items: center;
        gap: 1rem;
        border-radius: 12px;
        border: 1px solid ${({ theme }) => theme.colors.border};
        background: #fff url(${IcoMore}) no-repeat right 2rem center;
        padding: 1.6rem 5rem 1.6rem 2.4rem;
        cursor: pointer;
        p {
            flex: 1;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .date {
            font-size: 1.5rem;
            font-weight: 300;
        }
        .category {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: ${({ theme }) => theme.colors.primaryBorder};
        }
        &:not(.empty_data):hover {
            border-color: ${({ theme }) => theme.colors.borderDark};
        }
        &.empty_data {
            cursor: default;
            background: #fff;
        }
    }
`;
export default Home;
