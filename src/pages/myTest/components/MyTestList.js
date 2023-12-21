import styled from "styled-components";
import Button from "../../../components/UI/Button";
import { Link } from "react-router-dom";
function MyTestList({
    no,
    title,
    enterprise,
    status,
    type,
    codeNo,
    range,
    date,
}) {
    return (
        <MyTestListWrap>
            <div className="title_wrap">
                <span className="index">{no}</span>
                <h3>{title}</h3>
                <div className="enterprise">
                    <span>기업명</span> <p>{enterprise}</p>
                </div>
            </div>
            <ul className="info_wrap">
                <li>
                    <span>검사유형</span>
                    <p>{type}</p>
                </li>
                <li>
                    <span>코드번호</span>
                    <p>{codeNo}</p>
                </li>
                <li>
                    <span>응시기간 (시간)</span>
                    <p>{range}</p>
                </li>
                <li>
                    <span>실제 응시일​</span>
                    <p>{date}</p>
                </li>
            </ul>
            <div className="status_wrap">
                <p>{status}</p>
                <Link to={`/mytest/${no}`}>
                    <Button className="round ico_right_border">
                        {status === "미응시" ? "응시하기" : "결과보기"}
                    </Button>
                </Link>
            </div>
        </MyTestListWrap>
    );
}
const MyTestListWrap = styled.div`
    border-radius: 1.2rem;
    background: #fff;
    padding: 2.4rem;
    margin-bottom: 2.4rem;
    position: relative;
    .title_wrap {
        display: flex;
        gap: 0.5rem 1rem;
        flex-wrap: wrap;
        padding-right: 16.7rem;
        margin-bottom: 2rem;
        .index {
            padding: 0 0.9rem;
            background-color: #eff8ff;
            border-radius: 0.8rem;
            color: ${({ theme }) => theme.colors.primaryBg};
            font-size: 1.3rem;
            text-align: center;
            font-weight: 500;
            line-height: 2.8rem;
            height: 2.8rem;
        }
        h3 {
            font-size: 2rem;
            font-weight: 500;
            line-height: 3.2rem;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .enterprise {
            width: 100%;
            padding-left: 3.8rem;
            display: flex;
            align-items: center;
            gap: 1.6rem;
            font-size: 1.5rem;
            line-height: 2.2rem;
            span {
                color: ${({ theme }) => theme.colors.textGray};
                font-size: 1.4rem;
                font-weight: 400;
                position: relative;
                &::after {
                    display: block;
                    content: "|";
                    width: 1px;
                    height: 1.2rem;
                    position: absolute;
                    top: 0;
                    right: -8px;
                    color: #dfdfdf;
                }
            }
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
            padding-right: 0;
            h3 {
                font-size: 1.8rem;
                line-height: 2.8rem;
            }
            .index {
                height: 2.4rem;
                line-height: 2.2rem;
            }
        }
    }
    .info_wrap {
        width: 100%;
        border-radius: 0.8rem;
        background: #fcfcfc;
        padding: 1.6rem 0;
        display: flex;
        font-size: 1.5rem;
        line-height: 2.2rem;
        gap: 1.6rem;
        letter-spacing: -0.45px;
        li {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            position: relative;
            &::after {
                display: block;
                content: "|";
                width: 1px;
                height: 1.2rem;
                position: absolute;
                top: 0;
                right: -8px;
                color: #dfdfdf;
            }
            &:last-child::after {
                display: none;
            }
        }
        span {
            color: ${({ theme }) => theme.colors.textGray};
            font-size: 1.4rem;
            font-weight: 400;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
            flex-wrap: wrap;
            gap: 1.2rem 0;
            li {
                flex: initial;
                width: 50%;
                justify-content: flex-start;
                &::after {
                    display: none;
                }
            }
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
            li {
                flex: initial;
                width: 100%;
                justify-content: flex-start;
            }
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
            li {
                span {
                    width: 8.8rem;
                }
            }
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
            li {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
    .status_wrap {
        display: flex;
        position: absolute;
        top: 2.4rem;
        right: 2.4rem;
        align-items: center;
        gap: 1.2rem;
        p {
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 2.4rem;
            color: ${({ theme }) => theme.colors.primaryBg};
        }
        button {
            width: 10rem;
            min-width: initial;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
            flex-direction: column;
            gap: 2px;
            p {
                font-size: 1.4rem;
                line-height: 2rem;
            }
            button {
                font-size: 1.4rem;
            }
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
            top: initial;
            bottom: 2rem;
            width: 100%;
            right: 0;
            padding: 0 2rem;
            gap: 3rem;
            align-items: flex-start;
            p {
                &::before {
                    content: "상태";
                    width: 9.6rem;
                    font-size: 1.4rem;
                    font-weight: 400;
                    line-height: 2rem;
                    display: inline-block;
                    color: #6f6f6f;
                }
            }
            a {
                width: 100%;
                display: block;
            }
            button {
                width: 100% !important;
                border-radius: 4px !important;
                height: 4.4rem !important;
                line-height: 4.2rem !important;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        padding: 2rem 2rem 10.8rem 2rem;
    }
`;
export default MyTestList;
