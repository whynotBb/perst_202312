import styled from "styled-components";
import TestBoxWrap from "./components/TestBoxWrap";
import TestHeader from "./components/TestHeader";
import TestCard from "./components/TestCard";
import AnswerBox from "./components/AnswerBox";
import TestStatus from "./components/TestStatus";
import Button from "../../components/UI/Button";
import { useState } from "react";
import Modal from "../../components/UI/Modal";
import { Link } from "react-router-dom";

function MyTestDetail() {
    const testList = [
        {
            num: 1,
            title: "나는 의사결정을 하기 전에 모든 관점에서 문제를 신중히 생각한다.",
            id: "answer01",
        },
        {
            num: 2,
            title: "나의 미래에 대해 구체적인 계획을 세운다.",
            id: "answer02",
        },
        {
            num: 3,
            title: "어떤 일이 일어날지 모르는 상황을 즐기는 편이다.​",
            id: "answer03",
        },
        {
            num: 4,
            title: "어떤 일이 일어날지 모르는 상황을 즐기는 편이다.​",
            id: "answer04",
        },
    ];
    const answerList = [
        {
            num: 1,
            answer: 1,
        },
        {
            num: 2,
            answer: 3,
        },
        {
            num: 3,
            answer: 5,
        },
        {
            num: 4,
            answer: 1,
        },
        {
            num: 5,
            answer: 1,
        },
        {
            num: 6,
            answer: 1,
        },
        {
            num: 7,
            answer: 1,
        },
        {
            num: 8,
            answer: 1,
        },
        {
            num: 9,
            answer: 1,
        },
        {
            num: 10,
            answer: 1,
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModalHandler = () => {
        setIsModalOpen(true);
    };
    const closeModalHandler = () => {
        setIsModalOpen(false);
    };
    return (
        <TestBoxWrap>
            <div className="header">
                <TestHeader />
            </div>
            <div className="body">
                <TestListWrap>
                    <div className="test_card_wrap">
                        {testList.map((item, index) => (
                            <TestCard
                                key={item.id}
                                num={item.num}
                                title={item.title}
                                id={item.id}
                            />
                        ))}
                    </div>
                    <div className="answer_box_wrap">
                        <AnswerBox answerList={answerList} />
                    </div>
                </TestListWrap>
            </div>
            <div className="footer">
                <TestStatus className={isModalOpen ? "active" : ""} />
            </div>
            <DetailFooterMo>
                <Button
                    className="lightPrimary h_48"
                    onClick={openModalHandler}
                >
                    답안 체크
                </Button>
                <Link to="/mytest/result">
                    <Button className="primaryBg h_48">최종 제출</Button>
                </Link>
            </DetailFooterMo>
            <Modal
                close={closeModalHandler}
                className={`code_type st_2 ${isModalOpen ? "active" : ""}`}
                active={isModalOpen && true}
            >
                <div className="body">
                    <AnswerBox answerList={answerList} />
                </div>
                <div className="mobile_footer st_2">
                    <Button
                        className="lightPrimary h_48"
                        onClick={closeModalHandler}
                    >
                        답안 체크
                    </Button>
                    <Button
                        className="primaryBg h_48"
                        onClick={closeModalHandler}
                    >
                        최종 제출
                    </Button>
                </div>
            </Modal>
        </TestBoxWrap>
    );
}
const DetailFooterMo = styled.div`
    display: none;
    width: 100%;
    padding: 1.2rem 1.6rem;
    gap: 0.8rem;
    background: #fff;
    z-index: 10;
    position: fixed;
    bottom: 0;
    left: 0;
    button {
        flex: 1;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: flex;
    }
`;
const TestListWrap = styled.div`
    position: relative;
    height: calc(100vh - 26rem);

    .test_card_wrap {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        padding-bottom: 10rem;
        height: 100%;
        overflow-y: auto;
        padding-right: 27rem;
    }
    .answer_box_wrap {
        position: absolute;
        top: 0;
        right: 0;
        width: 25.6rem;
        height: 100%;
        background: #fff;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        height: auto;
        .test_card_wrap {
            padding-right: 0;
        }
        .answer_box_wrap {
            display: none;
        }
    }
`;
export default MyTestDetail;
