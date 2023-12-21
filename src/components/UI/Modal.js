import styled from "styled-components";
import IconX from "../../assets/images/ico_close_x.svg";
import { useEffect, useRef } from "react";
const activeModals = [];
function Modal({ children, close, className, active }) {
    const modalWrapRef = useRef(null);

    useEffect(() => {
        if (active) {
            // Add this modal to the stack
            activeModals.push(modalWrapRef.current);

            const handleOutsideClick = (event) => {
                // Check if the click is outside the topmost modal
                if (
                    modalWrapRef.current &&
                    !modalWrapRef.current.contains(event.target)
                ) {
                    // Close only if it's the topmost modal
                    if (
                        modalWrapRef.current ===
                        activeModals[activeModals.length - 1]
                    ) {
                        close();
                        activeModals.pop(); // Remove this modal from the stack
                    }
                }
            };

            document.addEventListener("mousedown", handleOutsideClick);

            return () => {
                document.removeEventListener("mousedown", handleOutsideClick);
            };
        }
    }, [active, close]);

    useEffect(() => {
        const bodyWrap = document.getElementById("bodyWrap");

        if (active) {
            const disableScroll = () => {
                bodyWrap.style.height = "100vh";
            };

            const enableScroll = () => {
                bodyWrap.style.height = "auto";
            };

            disableScroll();

            return () => {
                enableScroll();
            };
        }
    }, [active]);

    return (
        <ModalWrap className={className} ref={modalWrapRef}>
            <ModalContents className={className}>
                <div className="header">
                    <span className="closeX" onClick={close}></span>
                </div>
                <div className="modalBody">{children}</div>
            </ModalContents>
        </ModalWrap>
    );
}
const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.16);
    z-index: 200;
    display: none;
    opacity: 0;
    transition: opacity 1s;
    &.active {
        display: block;
        opacity: 1;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        &.code_type {
            top: initial;
            bottom: -100vh;
            display: block;
            height: 100vh;
            &.active {
                bottom: 0;
            }
        }
    }
`;
const ModalContents = styled.div`
    width: 55rem;
    max-height: 76rem;
    background: #fff;
    border-radius: 1.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3.2rem;
    position: relative;
    .header {
        .closeX {
            width: 2.4rem;
            height: 2.4rem;
            position: absolute;
            top: 3rem;
            right: 3rem;
            background: url(${IconX}) no-repeat center;
            cursor: pointer;
            z-index: 1;
        }
    }
    .body {
        max-height: 56rem;
        /* max-height: calc(100% - 208px); */
        overflow-y: auto;
    }
    .footer {
        padding: 2.4rem 0 0;
        text-align: center;
    }
    .mobile_footer {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: calc(100% - 6.4rem);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        &.code_type {
            position: absolute;
            width: 100%;
            top: initial;
            bottom: 0;
            /* bottom: -100vh;*/
            left: 0;
            transform: inherit;
            padding: 1.6rem 1.6rem 0;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            transition: all 0.3s;
            &::before {
                content: "";
                display: block;
                width: 12rem;
                height: 0.5rem;
                border-radius: 2.5rem;
                background: #dfdfdf;
                margin: 0 auto;
            }
            .header {
                margin-bottom: 0;
                .closeX {
                    display: none;
                }
            }
            .body {
                padding: 4.8rem 0 3.2rem;
            }
            .footer {
                display: none;
            }
            .mobile_footer {
                display: flex;
                gap: 0.8rem;
                padding: 1.2rem 0;
                button {
                    &:nth-child(2) {
                        flex: 1;
                    }
                }
                &.st_2 {
                    button {
                        flex: 1;
                        padding: 0;
                    }
                }
            }
            &.st_2 {
                .body {
                    padding-top: 2.4rem;
                    overflow: hidden;
                }
            }
        }
        &.full_type {
            position: absolute;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            transform: inherit;
            padding: 1.6rem 1.6rem 0;
            border: 0;
            border-radius: 0;
            .header {
            }
            .body {
            }
            @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
                &.st_2 {
                    .footer {
                        display: none;
                    }
                    .mobile_footer {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        background: #fff;
                        z-index: 10;
                        display: flex;
                        gap: 0.8rem;
                        padding: 1.2rem;
                        button {
                            &:nth-child(2) {
                                flex: 1;
                            }
                        }
                    }
                }
            }
            @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
                max-height: initial;
                padding: 0 1.6rem;
                .header {
                    .closeX {
                        top: 1.1rem;
                        right: 1.6rem;
                        width: 2rem;
                        height: 2rem;
                    }
                }
                .body {
                    max-height: initial;
                }
            }
        }
    }
`;
export default Modal;
