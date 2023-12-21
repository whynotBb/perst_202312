import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import ScrollToTopBtn from "./ScrollToTopBtn";

function RootLayout() {
    // Get the current location using useLocation
    const location = useLocation();
    const [isTestPage, setIsTestPage] = useState(false);

    useEffect(() => {
        const targetPathname = "/mytest/:mytestId/detail";
        const targetPathname2 = "/mytest/:mytestId";
        if (location.pathname === targetPathname) {
            setIsTestPage(true);
        } else if (location.pathname === targetPathname2) {
            setIsTestPage(true);
        } else {
            setIsTestPage(false);
        }
    }, [location.pathname]);

    return (
        <>
            <BodyWrap id="bodyWrap" className={isTestPage && "test_page"}>
                {/* ↓ 페이지 이동 시 스크롤 상단으로 이동 */}
                <ScrollToTop />
                {/* 헤더 */}
                <Header />
                <BgCircle />
                <main>
                    <Outlet />
                    {!isTestPage && <ScrollToTopBtn />}
                </main>
                {!isTestPage && <Footer />}
            </BodyWrap>
        </>
    );
}
const BgCircle = styled.div`
    &::before {
        content: "";
        display: block;
        width: 822px;
        height: 822px;
        border-radius: 822px;
        opacity: 0.4;
        background: linear-gradient(
            167deg,
            rgba(213, 228, 244, 0.12) -1.17%,
            rgba(87, 214, 242, 0.12) 36.55%,
            rgba(69, 150, 251, 0.12) 77.41%
        );
        filter: blur(50px);
        position: absolute;
        left: -10%;
        top: 240px;
    }
    &::after {
        content: "";
        display: block;
        width: 822px;
        height: 822px;
        border-radius: 822px;
        opacity: 0.4;
        background: linear-gradient(
            167deg,
            rgba(213, 228, 244, 0.12) -1.17%,
            rgba(87, 214, 242, 0.12) 36.55%,
            rgba(69, 150, 251, 0.12) 77.41%
        );
        filter: blur(50px);
        position: absolute;
        right: -233px;
        top: 896px;
    }
`;
const BodyWrap = styled.div`
    &.test_page {
        height: 100vh !important;
        overflow: hidden !important;
    }
    background: #fcfcfc;
    min-height: 100vh;
    padding: 7.2rem 0 10.6rem;
    position: relative;
    overflow: hidden;

    main {
        width: 100%;
        max-width: 114rem;
        /* min-height: 59rem; */
        margin: 0 auto;
        position: relative;

        /* z-index: 1; */
        @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
            max-width: initial;
            min-width: initial;
            width: 100%;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding-bottom: 4.5rem;
        &::before {
            width: 716px;
            height: 716px;
        }
        &::after {
            width: 716px;
            height: 716px;
            top: 785px;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding-top: 6.2rem;
        padding-bottom: 0;
        &.test_page {
            min-height: 100vh !important;
            overflow: hidden !important;
            height: auto !important;
        }
    }
`;
export default RootLayout;
