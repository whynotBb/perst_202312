import styled from "styled-components";
import IcoTop from "../assets/images/scroll_top.svg";
import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
    const [activeClass, setActiveClass] = useState("");
    const [currentpoi, setCurrentPoi] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const footer = document.querySelector("footer");

            if (
                footer &&
                currentScrollY + window.innerHeight >= footer.offsetTop
            ) {
                setActiveClass("footer");
            } else if (currentScrollY >= 50) {
                setActiveClass("on");
            } else {
                setActiveClass("");
            }
            setCurrentPoi(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleButtonClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return <TopBtn onClick={handleButtonClick} className={activeClass} />;
}
const TopBtn = styled.div`
    display: none;
    cursor: pointer;
    width: 0rem;
    height: 0rem;
    background: #13244f url(${IcoTop}) no-repeat center;
    border-radius: 2.5rem;
    position: fixed;
    bottom: 3.2rem;
    right: 1.6rem;
    opacity: 0;
    transition: opacity 0.3s;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: block;
    }
    &.on {
        opacity: 1;
        width: 5rem;
        height: 5rem;
    }
    &.footer {
        opacity: 1;
        width: 5rem;
        height: 5rem;
        position: absolute;
        bottom: -1.6rem;
    }
`;
