import styled from "styled-components";
import IcoRight from "../../assets/images/arrow-right_16.svg";
import IcoRightW from "../../assets/images/arrow-right_16_w.svg";
import IcoRightB from "../../assets/images/arrow-right_16_b.svg";
import IcoRightP from "../../assets/images/arrow-right_16_p.svg";
import IcoRightG from "../../assets/images/arrow-right-gray.svg";
import IcoLeftG from "../../assets/images/arrow-left-gray.svg";
import IcoLeft from "../../assets/images/arrow-left.svg";
import IcoAdd from "../../assets/images/ico_add.svg";
import IcoDownload from "../../assets/images/ico_export.svg";
import IcoDownloadP from "../../assets/images/ico_export_primary.svg";
import IcoPrint from "../../assets/images/ico_print.svg";
import IcoPrintP from "../../assets/images/ico_print_primary.svg";

function Button({ children, className, disabled, onClick }) {
    // className 조합
    let classNames = [];
    if (className) {
        classNames = classNames.concat(className.split(" "));
    }
    const combinedClassName = classNames.join(" ");
    return (
        <Btn
            className={combinedClassName}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Btn>
    );
}
const Btn = styled.button`
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
        Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
        "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol", sans-serif;

    outline: none;
    color: #8b8b8b;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.borderInput};
    background: #fff;
    height: 4.5rem;
    line-height: 4.3rem;
    padding: 0 2.4rem;
    transition: all 0.3s;
    a {
        display: block;
    }
    &:hover {
        border-color: ${({ theme }) => theme.colors.primaryBorder};
        color: ${({ theme }) => theme.colors.primaryBorder};
    }
    &.primary {
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
        color: ${({ theme }) => theme.colors.primaryText};
        &:not(:disabled):hover {
            background: ${({ theme }) => theme.colors.primaryBg};
            color: #fff;
        }
        &:disabled {
            border: 1px solid ${({ theme }) => theme.colors.borderInput};
            color: #8b8b8b;
        }
    }
    &.normal {
        background: #fff;
        color: ${({ theme }) => theme.colors.black};
        border-color: ${({ theme }) => theme.colors.borderDark};
        &:hover {
            background: ${({ theme }) => theme.colors.primaryBg};
            color: #fff;
            border-color: ${({ theme }) => theme.colors.primaryBg};
        }
    }
    &.lightPrimary {
        background: #eff8ff;
        color: ${({ theme }) => theme.colors.primaryBg};
        border-color: #eff8ff;
        &:hover {
            border-color: ${({ theme }) => theme.colors.primaryBg};
        }
    }
    &.primaryBg {
        background: ${({ theme }) => theme.colors.primaryBg};
        color: #fff;
        border-color: ${({ theme }) => theme.colors.primaryBg};
    }
    &.seocondaryBg {
        background: ${({ theme }) => theme.colors.gray6};
        color: #fff;
        border-color: ${({ theme }) => theme.colors.gray6};
    }
    &.blackBg {
        background: transparent;
        color: #fff;
        border-color: #fff;
        &:hover {
            background: #fff;
            color: #333;
            border-color: #fff;
        }
    }
    &.sm {
        height: 3.6rem;
        line-height: 3.4rem;
        font-size: 1.4rem;
        padding: 0 1.6rem;
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
            font-size: 1.3rem;
            height: 3.4rem;
            line-height: 3.2rem;
        }
    }
    &.mid {
        height: 4.5rem;
        line-height: 4.3rem;
    }
    &.round {
        border-radius: 10rem;
        min-width: 11rem;
    }
    &.w_100 {
        width: 100%;
    }
    &.ico_right {
        padding-right: 3.6rem;
        background: url(${IcoRight}) no-repeat right 1.6rem center;
        &:hover {
            color: #fff;
            border-color: ${({ theme }) => theme.colors.primaryBg};
            background: ${({ theme }) => theme.colors.primaryBg}
                url(${IcoRightW}) no-repeat right 1.6rem center;
        }
    }
    &.ico_right_border {
        padding: 0;
        height: 3.6rem;
        line-height: 3.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        /* background: url(${IcoRight}) no-repeat right 1rem center; */
        &::after {
            content: "";
            display: block;
            width: 1.6rem;
            height: 1.6rem;
            background: url(${IcoRight}) no-repeat center;
        }
        &:hover {
            color: ${({ theme }) => theme.colors.primaryBg};
            border-color: ${({ theme }) => theme.colors.primaryBg};
            &::after {
                background: #fff url(${IcoRightP}) no-repeat center;
            }
        }
    }
    &.ico_right_w {
        color: #fff;
        padding-right: 3.6rem;
        background: url(${IcoRightW}) no-repeat right 1.6rem center;
        &:hover {
            color: ${({ theme }) => theme.colors.primaryBg};
            border-color: #fff;
            background: #fff url(${IcoRightP}) no-repeat right 1.6rem center;
        }
    }
    &.ico_right_b {
        color: #fff;
        font-size: 1.7rem;
        font-weight: 400;
        padding-right: 3.6rem;
        border-color: #3d3d3d;
        background: #3d3d3d url(${IcoRightG}) no-repeat right 1.6rem center;
        &:hover {
            border-color: #6f6f6f;
        }
    }
    &.ico_left_b {
        color: #fff;
        font-size: 1.7rem;
        font-weight: 400;
        padding-left: 3.6rem;
        border-color: #3d3d3d;
        background: #3d3d3d url(${IcoLeftG}) no-repeat left 1.6rem center;
        &:hover {
            border-color: #6f6f6f;
        }
    }
    &.ico_left {
        padding-left: 3.6rem;
        background: url(${IcoLeft}) no-repeat left 0.8rem center;
        font-size: 1.4rem;
        padding: 0 1.6rem 0 2.8rem;
        min-width: 9.2rem;
    }
    &.ico_download {
        font-weight: 400;
        padding: 0 2.4rem 0 5.4rem;
        color: #3d3d3d;
        background: url(${IcoDownload}) no-repeat left 1.6rem center;
        &:hover {
            color: ${({ theme }) => theme.colors.primaryBg};
            background: url(${IcoDownloadP}) no-repeat left 1.6rem center;
        }
    }
    &.ico_print {
        font-weight: 400;
        padding: 0 2.4rem 0 5.4rem;
        color: #3d3d3d;
        background: url(${IcoPrint}) no-repeat left 1.6rem center;
        &:hover {
            color: ${({ theme }) => theme.colors.primaryBg};
            background: url(${IcoPrintP}) no-repeat left 1.6rem center;
        }
    }
    &.more_btn {
        border: none;
        height: 2.4rem;
        line-height: 2.4rem;
        font-size: 1.6rem;
        font-weight: 400;
        padding: 0 2rem 0 0;
        background: url(${IcoRight}) no-repeat right center;
        &:hover {
            color: ${({ theme }) => theme.colors.black};
            background: url(${IcoRightB}) no-repeat right center;
            text-decoration: underline;
            text-underline-position: under;
        }
    }
    &.h_48 {
        height: 4.8rem;
        line-height: 4.8rem;
    }
    &.h_40 {
        height: 4rem;
        line-height: 4rem;
    }
    &.h_50 {
        height: 5rem;
        line-height: 4.8rem;
    }
    &.file {
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.borderInput};
        font-size: 1.6rem;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        /* padding-right: 4.2rem;
        background: url(${IcoAdd}) no-repeat right 1.6rem center; */
        &::after {
            content: "";
            display: block;
            width: 1.8rem;
            height: 1.8rem;
            background: url(${IcoAdd}) no-repeat center;
        }
    }
`;
export default Button;
