import styled from "styled-components";
import CsHeader from "../components/CsHeader";
import CsListWrapper from "../components/CsListWrapper";
import SelectBox from "../components/SelectBox";
import TextFields from "../../../components/UI/TextFields";
import FileBox from "../../../components/UI/FileBox";
import Checkbox from "../../../components/UI/Checkbox";
import Button from "../../../components/UI/Button";

function Contact() {
    return (
        <CsListWrapper>
            <div className="header">
                <CsHeader title="온라인 문의" />
            </div>
            <div className="body">
                <ContactWrap>
                    <article>
                        <h3>기본 정보</h3>

                        <Row className=" col_2">
                            <Item>
                                <h4>구분</h4>
                                <div>
                                    <SelectBox />
                                </div>
                            </Item>
                            <Item>
                                <h4>
                                    작성자 <span className="required">*</span>
                                </h4>
                                <div>
                                    <TextFields className="w100" />
                                </div>
                            </Item>
                        </Row>
                        <Row className=" col_2">
                            <Item>
                                <h4>
                                    이메일 <span className="required">*</span>
                                </h4>
                                <div>
                                    <TextFields className="w100" />
                                </div>
                            </Item>
                            <Item>
                                <h4>
                                    휴대폰 <span className="required">*</span>
                                </h4>
                                <div>
                                    <TextFields className="w100" />
                                </div>
                            </Item>
                        </Row>
                    </article>
                    <article>
                        <h3>문의</h3>
                        <Row>
                            <Item className="st_2">
                                <h4>
                                    제목 <span className="required">*</span>
                                </h4>
                                <div>
                                    <TextFields className="w100" />
                                </div>
                            </Item>
                        </Row>
                        <Row>
                            <Item className="st_2">
                                <h4>
                                    내용 <span className="required">*</span>
                                </h4>
                                <div>
                                    <textarea />
                                </div>
                            </Item>
                        </Row>
                        <Row>
                            <Item className="st_2">
                                <h4>첨부파일</h4>
                                <div>
                                    <FileBox />
                                </div>
                            </Item>
                        </Row>
                    </article>
                    <Terms>
                        <h4>개인정보 수집 및 이용동의</h4>
                        <Checkbox
                            id="chk01"
                            label="개인정보 이용 수집 동의 (필수)"
                        />
                        <div className="inner">
                            <p>
                                수집 및 이용 목적 : 서비스 문의 및 각종
                                제안사항에 대한 답변, 민원처리, 결과 회신 등의
                                서비스 제공​
                            </p>
                            <p>수집항목 : 작성자, 휴대폰, 이메일​</p>
                            <p>
                                보유기간 : 소비자의 불만 또는 분쟁처리에 관한
                                기록에 의거하여 규정된 보존기관 보관
                            </p>
                        </div>
                    </Terms>
                    <div className="bottom_btn">
                        <Button className="round mid ico_right">
                            등록완료
                        </Button>
                    </div>
                </ContactWrap>
            </div>
        </CsListWrapper>
    );
}
const ContactWrap = styled.div`
    border-radius: 1.2rem;
    background: #fff;
    padding: 4rem 10rem;
    h3 {
        font-size: 2rem;
        line-height: 3.2rem;
        font-weight: 500;
        padding: 0.8rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
        margin-bottom: 0.8rem;
    }
    article {
        margin-bottom: 4rem;
    }
    .bottom_btn {
        text-align: center;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 1.6rem 2.4rem;
        article {
            margin-bottom: 3.2rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 0.8rem 1.6rem;
        h3 {
            font-size: 1.6rem;
        }
        .bottom_btn {
            position: fixed;
            bottom: 0;
            left: 0;
            padding: 1.2rem 1.6rem;
            background: #fff;
            width: 100%;
            z-index: 10;
            button {
                background: #328ef0 !important;
                border-color: #328ef0;
                color: #fff;
                border-radius: 0.4rem !important;
                padding: 0;
                text-align: center;
                width: 100%;
                height: 4.8rem;
                line-height: 4.6rem;
            }
        }
    }
`;
const Row = styled.div`
    padding-top: 1.6rem;
    &.col_2 {
        display: flex;
        gap: 2.4rem;
        & > div {
            flex: 1;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        &.col_2 {
            flex-direction: column;
            gap: 1.6rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        &.col_2 {
            gap: 1.2rem;
        }
    }
`;
const Item = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    h4 {
        width: 7rem;
        font-size: 1.6rem;
        line-height: 4.5rem;
        font-weight: 400;
        height: 4.5rem;
        .required {
            color: ${({ theme }) => theme.colors.primaryBg};
        }
    }
    & > div {
        flex: 1;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        gap: 4px 1rem;
        h4 {
            font-size: 1.4rem;
            width: 5rem;
        }
        &.st_2 {
            flex-direction: column;
            h4 {
                height: 2rem;
                line-height: 2rem;
            }
            & > div {
                width: 100%;
            }
        }
    }
`;
const Terms = styled.div`
    margin-bottom: 4rem;
    h4 {
        font-size: 2rem;
        line-height: 3.2rem;
        font-weight: 500;
        margin-bottom: 1.2rem;
    }
    .inner {
        margin-top: 1.2rem;
        font-size: 1.5rem;
        line-height: 2.2rem;
        font-weight: 400;
        padding: 1.6rem 2.4rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        margin-bottom: 3.2rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        h4 {
            font-size: 1.6rem;
        }
        .inner {
            font-size: 1.4rem;
        }
    }
`;
export default Contact;
