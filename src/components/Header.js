import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import ImgLogo from "../assets/images/scoutLogo.svg";
import IcoLogout from "../assets/images/ico_logout.svg";
import IcoLogoutHover from "../assets/images/ico_logout_hover.svg";
import IcoMenu from "../assets/images/ico_menu.svg";
import IcoMenuX from "../assets/images/ico_close_x.svg";
import ArrowGray from "../assets/images/arrow-down-gray.svg";
import Button from "./UI/Button";

function Header() {
    // const [scrollY, setScrollY] = useState(0);
    const [activeClass, setActiveClass] = useState(0);
    const [menuToggle, setMenuToggle] = useState(false);
    const [subToggle, setSubToggle] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // setScrollY(window.scrollY);
            if (window.scrollY >= 100) {
                setActiveClass("on");
            } else {
                setActiveClass("");
            }
        };
        const bodyWrap = document.getElementById("bodyWrap");

        const disableScroll = () => {
            bodyWrap.style.height = "100vh";
        };

        const enableScroll = () => {
            bodyWrap.style.height = "auto";
        };

        if (!menuToggle) {
            enableScroll();
            window.addEventListener("scroll", handleScroll);
        } else {
            disableScroll();
            setActiveClass("");
            window.removeEventListener("scroll", handleScroll);
        }

        return () => {
            enableScroll();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuToggle]);

    const menuToggleHandler = () => {
        setMenuToggle((current) => !current);
    };
    const subToggleHandler = () => {
        setSubToggle((current) => !current);
    };

    return (
        <>
            <HeaderWrap className={activeClass}>
                <header>
                    <Logo>
                        <Link to="/">Scout</Link>
                    </Logo>
                    <Nav>
                        <ul>
                            <li>
                                <NavLink to="">Perst 소개</NavLink>
                            </li>
                            <li
                                onMouseEnter={subToggleHandler}
                                onMouseLeave={subToggleHandler}
                            >
                                <p>고객센터</p>
                                <ul
                                    className={`depth_2 ${
                                        subToggle ? "on" : ""
                                    }`}
                                >
                                    <li>
                                        <NavLink to="notice">공지사항</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="faq">
                                            자주 묻는 질문
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="contact">
                                            온라인 문의
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="mytest">나의 TEST</NavLink>
                            </li>
                        </ul>
                    </Nav>

                    <SignInfo>
                        <li className="user">
                            <span className="userName">하미미</span>님
                        </li>
                        <li className="logout">로그아웃</li>
                        <li className="codeBtn">
                            <Button className="primaryBg round sm">
                                코드번호 등록
                            </Button>
                        </li>
                        <li
                            className={`menu ${menuToggle ? "on" : ""}`}
                            onClick={menuToggleHandler}
                        ></li>
                    </SignInfo>
                </header>
            </HeaderWrap>
            <MobileNav className={menuToggle ? "on" : ""}>
                <ul>
                    <li>
                        <NavLink to="/home" onClick={menuToggleHandler}>
                            Perst 소개
                        </NavLink>
                    </li>
                    <li
                        className={`depth_1 ${subToggle ? "on" : ""}`}
                        onClick={subToggleHandler}
                    >
                        <p>고객센터</p>
                        <ul className={`depth_2 ${subToggle ? "on" : ""}`}>
                            <li>
                                <NavLink
                                    to="notice"
                                    onClick={menuToggleHandler}
                                >
                                    공지사항
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="faq" onClick={menuToggleHandler}>
                                    자주 묻는 질문
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="contact"
                                    onClick={menuToggleHandler}
                                >
                                    온라인 문의
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="mytest" onClick={menuToggleHandler}>
                            나의 TEST
                        </NavLink>
                    </li>
                </ul>
                <Button className="primaryBg round w_100">코드번호 등록</Button>
            </MobileNav>
            <Dim className={menuToggle ? "on" : ""} />
        </>
    );
}
const HeaderWrap = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    transition: all 0.3s;
    z-index: 30;
    background: #fcfcfc;
    max-width: 192rem;
    min-width: 114rem;
    header {
        height: 7.2rem;
        max-width: 114rem;
        width: 100%;
        padding: 0;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 4rem;
        border-radius: 16px;
        background: transparent;
        transition: all 0.3s;
        letter-spacing: -0.51px;
        background: #fcfcfc;
    }
    &.on {
        padding: 3.2rem 0;
        background: transparent;
        header {
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
            background: #fff;
            padding: 0 2.6rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 0 3.2rem;
        max-width: initial;
        min-width: initial;
        header {
            max-width: initial;
            min-width: initial;
            width: 100%;
        }
        &.on {
            padding: 3.2rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        header {
            height: 6.2rem;
            padding: 1.6rem 0;
        }
        &.on {
            header {
                padding: 1.6rem;
            }
        }
    }
`;
const Logo = styled.h1`
    a {
        display: block;
        width: 9rem;
        height: 3.6rem;
        background: url(${ImgLogo}) no-repeat center;
        text-indent: -99999px;
        color: transparent;
        font-size: 0;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
            width: 8rem;
            background-size: 100% auto;
        }
    }
`;
const Nav = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: 3.2rem;
        height: 7.2rem;
        li {
            position: relative;
            line-height: 7.2rem;
            p,
            a {
                cursor: pointer;
                letter-spacing: -0.51px;
                font-size: 1.7rem;
                line-height: 7.2rem;
                &:hover {
                    color: ${({ theme }) => theme.colors.primaryText};
                }
                &.active {
                    color: ${({ theme }) => theme.colors.primaryText};
                }
            }
        }
        &.depth_2 {
            display: none;
            position: absolute;
            border-radius: 16px;
            border: 1px solid #f4f4f4;
            background: #fff;
            flex-direction: column;
            width: 10.4rem;
            gap: 0;
            top: 5.1rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 31;
            height: auto;
            li {
                a {
                    display: block;
                    padding: 1.4rem 1rem;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                }
                &:hover {
                    color: ${({ theme }) => theme.colors.primaryText};
                }
            }
            &.on {
                display: flex;
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: none;
    }
`;
const MobileNav = styled.div`
    display: none;
    position: fixed;
    top: -38rem;
    left: 0;
    width: 100%;
    background: #fcfcfc;
    padding: 3.2rem;
    border-top: 1px solid #ececec;
    z-index: 25;
    transition: top 0.3s;
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.4rem;
        li {
            width: 100%;
            p,
            a {
                display: block;
                letter-spacing: -0.51px;
                font-size: 1.8rem;
                line-height: 4rem;
                &:hover {
                    color: ${({ theme }) => theme.colors.primaryText};
                }
            }
            &.depth_1 {
                position: relative;
                &::after {
                    content: "";
                    width: 2rem;
                    height: 2rem;
                    background: url(${ArrowGray}) no-repeat center;
                    transition: all 0.3s;
                    position: absolute;
                    top: 1rem;
                    right: 0;
                }
                &.on::after {
                    transform: rotate(180deg);
                }
                .depth_2 {
                    height: 0;
                    padding: 0 1rem;
                    overflow: hidden;
                    transition: all 0.3s;
                    li {
                        a {
                            font-size: 1.4rem;
                            font-weight: 400;
                            line-height: 2rem;
                        }
                    }
                    &.on {
                        height: auto;
                        padding: 1rem;
                    }
                }
            }
        }
    }
    button {
        margin-top: 2.4rem;
        height: 4.2rem;
        line-height: 4.2rem;
        font-size: 1.3rem;
        font-weight: 400;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        display: block;
        top: -38rem;
        &.on {
            top: 6.2rem;
        }
    }
`;
const Dim = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    z-index: 20;
    transition: background-color 0.3s;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        &.on {
            display: block;
            background-color: rgba(0, 0, 0, 0.16);
        }
    }
`;
const SignInfo = styled.ul`
    display: flex;
    font-size: 1.7rem;
    margin-left: auto;
    gap: 1.2rem;
    align-items: center;
    .userName {
        color: ${({ theme }) => theme.colors.primaryText};
        line-height: 3.6rem;
    }
    .logout {
        padding: 0 0.4rem 0 3rem;
        background: url(${IcoLogout}) no-repeat left center;
        cursor: pointer;
        line-height: 3.6rem;
        transition: all 0.3s;
        &:hover {
            background: url(${IcoLogoutHover}) no-repeat left center;
            text-decoration: underline;
            text-underline-position: under;
        }
    }
    .menu {
        display: none;
        cursor: pointer;
        width: 2.4rem;
        height: 2.4rem;
        background: url(${IcoMenu}) no-repeat center;
        &.on {
            background: url(${IcoMenuX}) no-repeat center;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        .logout {
            padding: 0 0 0 3rem;
            text-indent: -999999px;
            font-size: 0;
            color: transparent;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        gap: 1.6rem;
        .menu {
            display: block;
        }
        .codeBtn {
            display: none;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
        .user {
            display: none;
        }
    }
`;

export default Header;
