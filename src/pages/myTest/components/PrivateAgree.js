import styled from "styled-components";

function PrivateAgree() {
    return (
        <PrivateAgreeWrap>
            <h3>개인정보 이용 수집 동의</h3>
            <div className="list_wrap">
                <div className="list">
                    <h4>수집 및 이용 목적</h4>
                    <p>인적성 검사 결과 및 안내 활용</p>
                </div>
                <div className="list">
                    <h4>수집항목</h4>
                    <p>이메일, 이름, 휴대폰번호</p>
                </div>
                <div className="list">
                    <h4>보유기간</h4>
                    <p>응시일로부터 1년 후 삭제</p>
                </div>
            </div>
        </PrivateAgreeWrap>
    );
}
const PrivateAgreeWrap = styled.div`
    h3 {
        font-size: 2rem;
        font-weight: 500;
        line-height: 3.2rem;
        color: #3d3d3d;
        text-align: center;
    }
    .list_wrap {
        padding: 1.6rem 2.4rem;
        .list {
            margin-bottom: 1rem;
            h4 {
                font-size: 1.5rem;
                font-weight: 500;
                line-height: 2.2rem;
                margin-bottom: 0.4rem;
                color: #3d3d3d;
            }
            p {
                font-size: 1.4rem;
                font-weight: 400;
                line-height: 2rem;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        h3 {
            padding: 1.1rem 1.6rem;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 2.4rem;
            border-bottom: 1px solid #f4f4f4;
        }
        .list_wrap {
            margin-top: 2rem;
        }
    }
`;
export default PrivateAgree;
