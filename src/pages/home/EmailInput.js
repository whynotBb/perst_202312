import styled from "styled-components";
import TextFields from "../../components/UI/TextFields";
import IcoLock from "../../assets/images/img_lock.svg";
import Button from "../../components/UI/Button";

function EmailInput() {
    return (
        <EmailInputWrap>
            <h3 className="mo_title">이메일 인증</h3>
            <h4>이메일 인증</h4>
            <p>MY TEST를 이용하기 위해​ 이메일 인증을 해주세요.</p>
            <AuthBox>
                <TextFields placeholder="이메일 주소를 입력해 주세요." />
                <Button className="primary" disabled="disabled">
                    인증요청
                </Button>
            </AuthBox>
            <AuthBox>
                <TextFields placeholder="이메일 주소를 입력해 주세요." />
                <Button className="primary ">인증요청</Button>
            </AuthBox>
            <AuthBox>
                <TextFields value="zooni@scout.co.kr" disabled="disabled" />
                <Button className="primary " disabled="disabled">
                    재입력
                </Button>
                <Button className="primary " disabled="disabled">
                    재전송
                </Button>
            </AuthBox>
            <AuthBox>
                <div className="num_wrap">
                    <TextFields placeholder="인증번호를 입력해 주세요." />
                    <span className="auth_num">5:00</span>
                </div>
                <Button className="primary">번호확인</Button>
            </AuthBox>
            <AuthBox>
                <TextFields placeholder="인증번호를 입력해 주세요." />
                <Button className="authprimary_st">번호확인</Button>
            </AuthBox>
        </EmailInputWrap>
    );
}
const EmailInputWrap = styled.div`
    text-align: center;
    .mo_title {
        display: none;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        padding: 1.1rem 1.6rem;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.4rem;
        border-bottom: 1px solid #f4f4f4;
    }
    h4 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.colors.primaryText};
        margin-bottom: 0.4rem;
        padding-top: 9.2rem;
        background-image: url(${IcoLock});
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 7.9rem;
    }
    & > p {
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 2.8rem; /* 155.556% */
        letter-spacing: -0.54px;
        margin-bottom: 3.2rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        padding: 15.3rem 0;
        .mo_title {
            display: block;
        }
        h4 {
            font-size: 2rem;
        }
        & > p {
            width: 18rem;
            margin: 0 auto 3.2rem;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2.4rem;
            letter-spacing: -0.48px;
        }
    }
`;
const AuthBox = styled.div`
    margin-top: 1.6rem;
    display: flex;
    gap: 0.8rem;
    & > div {
        flex: 1;
    }
    .num_wrap {
        position: relative;
    }
    .auth_num {
        position: absolute;
        right: 2rem;
        top: 1rem;
        font-size: 1.6rem;
        line-height: 2.2rem;
        color: ${({ theme }) => theme.colors.primaryBorder};
    }
`;
export default EmailInput;
