import styled from "styled-components";
import IcoArrow from "../../../assets/images/accordion_arrow.svg";
import { useState } from "react";

function Accordion({ category, title, contents }) {
    //아코디언 여닫기
    const [accordionToggle, setAccordionToggle] = useState(false);
    const accordionToggleHandler = () => {
        setAccordionToggle((current) => !current);
    };
    return (
        <AccordionWrap>
            <div
                className={`title ${accordionToggle ? "on" : ""}`}
                onClick={accordionToggleHandler}
            >
                <p>{category}</p>
                <h3>{title}</h3>
            </div>
            <div className={`body ${accordionToggle ? "on" : ""}`}>
                <div className="inner">{contents}</div>
            </div>
        </AccordionWrap>
    );
}
const AccordionWrap = styled.div`
    border-radius: 1.2rem;
    padding: 2.4rem 3.2rem;
    background: #fff;
    transition: all 0.3s;
    margin-bottom: 2.4rem;
    .title {
        position: relative;
        cursor: pointer;
        p {
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 2.2rem;
            color: ${({ theme }) => theme.colors.primaryBg};
            margin-bottom: 0.5rem;
        }
        h3 {
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2.4rem;
            padding-right: 3rem;
            ${({ theme }) => theme.common.ellipsis}
        }
        &::after {
            content: "";
            display: block;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            position: absolute;
            width: 2.2rem;
            height: 2.2rem;
            background-image: url(${IcoArrow});
            background-repeat: no-repeat;
            background-position: center;
            transition: all 0.3s;
        }
        &.on {
            &::after {
                transform: translateY(-50%) rotate(180deg);
            }
        }
    }
    .body {
        height: 0;
        overflow: hidden;
        transition: all 0.3s;
        border-radius: 1.2rem;
        background: #fcfcfc;
        padding: 0 1.6rem;
        font-size: 1.6rem;
        line-height: 2.4rem;
        &.on {
            height: auto;
            margin-top: 1.6rem;
            padding: 1.6rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        margin-bottom: 1.6rem;
        .title {
            h3 {
                font-size: 1.6rem;
            }
            p {
                font-size: 1.5rem;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 2rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
        padding: 2rem 1.6rem;
    }
`;
export default Accordion;
