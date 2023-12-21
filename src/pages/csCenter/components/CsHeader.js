import { Link } from "react-router-dom";
import styled from "styled-components";
import IcoArrow from "../../../assets/images/breadcrumb_arrow.svg";

function CsHeader({ title }) {
    return (
        <CsHeaderWrap>
            <h3>{title}</h3>
            <BreadCrumb>
                <li>
                    <Link to="/notice">고객센터</Link>
                </li>
                <li>
                    <Link to="">{title}</Link>
                </li>
            </BreadCrumb>
        </CsHeaderWrap>
    );
}
const CsHeaderWrap = styled.div`
    width: 100%;
    padding: 3.2rem 4rem;
    border-radius: 12px;
    background: linear-gradient(284deg, #243f9c 4.38%, #328ef0 113.67%);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 2.4rem 1.6rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 1.6rem;
        h3 {
            font-size: 2rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
const BreadCrumb = styled.ul`
    display: flex;
    gap: 2.4rem;
    li {
        position: relative;
        &::before {
            content: "";
            display: block;
            position: absolute;
            width: 2.4rem;
            height: 2.4rem;
            background: url(${IcoArrow}) no-repeat center;
            top: 0;
            left: -2.4rem;
            opacity: 0.5;
        }
        &:nth-child(1)::before {
            display: none;
        }
    }
    a {
        display: block;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        li a {
            font-size: 1.5rem;
        }
    }
`;
export default CsHeader;
