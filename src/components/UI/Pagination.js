import styled from "styled-components";
import IcoArrow from "../../assets/images/arrow-right_16.svg";
import { Link } from "react-router-dom";

function Pagination() {
    return (
        <PaginationWrap>
            <li className="prev disabled">
                <Link to=""></Link>
            </li>
            <li className="page on">
                <Link to="">1</Link>
            </li>
            <li className="page">
                <Link to="">2</Link>
            </li>
            <li className="page">
                <Link to="">3</Link>
            </li>
            <li className="more">
                <Link to="">...</Link>
            </li>
            <li className="page">
                <Link to="">10</Link>
            </li>
            <li className="next">
                <Link to=""></Link>
            </li>
        </PaginationWrap>
    );
}
const PaginationWrap = styled.ul`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    li {
        height: 3.2rem;
        border-radius: 0.4rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        background: #fff;
        a {
            display: block;
            min-width: 3.2rem;
            width: 100%;
            height: 100%;
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 3.2rem;
            text-align: center;
            padding: 0 0.4rem;
            color: ${({ theme }) => theme.colors.textGray};
        }
        &:hover,
        &.on {
            border-color: ${({ theme }) => theme.colors.primaryBorder};
            a {
                color: ${({ theme }) => theme.colors.primaryBg};
            }
        }
        &.prev,
        &.next {
            a {
                background: url(${IcoArrow}) no-repeat center;
            }
        }
        &.prev {
            transform: rotate(180deg);
        }
        &.disabled {
            border-color: #efefef;
            background: #f9f9f9;
            cursor: default;
            a {
                cursor: default;
            }
        }
    }
`;
export default Pagination;
