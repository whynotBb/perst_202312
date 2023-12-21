import styled, { keyframes } from "styled-components";
import IcoInfo from "../../assets/images/info-circle.svg";
import { useEffect } from "react";

function Toast({ msg, position }) {
    const fadeIn = keyframes`
    from {
    opacity: 0.6;
    }
    to {
        opacity: 1;
    }
`;

    const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
    useEffect(() => {
        const timer = setTimeout(() => {
            // You can add fade-out animation here if needed
            // toastRef.current.style.animation = `${fadeOut} 0.5s ease-in-out forwards`;
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);
    const ToastWrap = styled.div`
        position: absolute;
        width: 48.6rem;
        border-radius: 1.6rem;
        background: rgba(61, 61, 61, 0.9);
        backdrop-filter: blur(2px);
        padding: 2.2rem 2.4rem;
        z-index: 100;
        bottom: 16rem;
        opacity: 0; /* Initial opacity */
        animation: ${fadeIn} 0.5s ease-in-out; /* Fade-in animation */

        /* Optional: Add fade-out animation */
        /* animation: ${fadeOut} 0.5s ease-in-out 2.5s forwards; */
        p {
            font-size: 1.6rem;
            font-weight: 400;
            padding-left: 3.2rem;
            line-height: 2.4rem;
            color: #fff;
            background: url(${IcoInfo}) no-repeat left center;
        }
    `;
    return (
        <ToastWrap>
            <p>{msg}</p>
        </ToastWrap>
    );
}

export default Toast;
