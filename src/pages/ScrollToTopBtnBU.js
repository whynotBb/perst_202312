import styled from "styled-components";
import IcoTop from "../assets/images/scroll_top.svg";

export default function ScrollToTopBtn() {
    const handleButtonClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return <TopBtn onClick={handleButtonClick}></TopBtn>;
}
const TopBtn = styled.div`
    display: none;
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    background: #13244f url(${IcoTop}) no-repeat center;
    border-radius: 2.5rem;
    position: fixed;
    bottom: 3.2rem;
    right: 1.6rem;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: block;
    }
`;
