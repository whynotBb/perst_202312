import styled from "styled-components";
import TextFields from "../../../components/UI/TextFields";
import Checkbox from "../../../components/UI/Checkbox";

function CheckInformation({ open2nd }) {
    return (
        <CheckInformationWrap>
            <h3>응시자 정보 확인</h3>
            <Item>
                <h4>
                    이메일 <span className="required">*</span>
                </h4>
                <div>
                    <TextFields
                        className="w100"
                        value="hnm26@naver.com"
                        disabled
                    />
                </div>
            </Item>
            <Item>
                <h4>
                    이름<span className="required">*</span>
                </h4>
                <div>
                    <TextFields className="w100" />
                </div>
            </Item>
            <Item>
                <h4>
                    생년월일<span className="required">*</span>
                </h4>
                <div>
                    <TextFields className="w100" />
                </div>
            </Item>
            <Item>
                <h4>
                    휴대폰<span className="required">*</span>
                </h4>
                <div>
                    <TextFields className="w100" />
                </div>
            </Item>
            <div className="agree_wrap">
                <Checkbox id="agree00" label="개인정보 이용 수집 동의" />
                <span className="detail_view" onClick={open2nd}>
                    [상세보기]
                </span>
            </div>
        </CheckInformationWrap>
    );
}
const CheckInformationWrap = styled.div`
    h3 {
        font-size: 2.4rem;
        line-height: 3.2rem;
        font-weight: 500;
        padding-bottom: 2rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.primaryText};
    }
    & > div {
        margin-bottom: 1.2rem;
    }
    .agree_wrap {
        padding-top: 1.2rem;
        padding-left: 9rem;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        .detail_view {
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 2.4rem;
            cursor: pointer;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        h3 {
            font-size: 2rem;
            color: #3d3d3d;
            padding-bottom: 0;
        }
        .agree_wrap {
            padding-left: 0;
            justify-content: center;
        }
    }
`;
const Item = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    h4 {
        width: 8rem;
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
            width: 6rem;
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
export default CheckInformation;
