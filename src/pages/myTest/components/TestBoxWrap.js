import styled from "styled-components";

function TestBoxWrap({ children }) {
    return <TestBoxWrapper>{children}</TestBoxWrapper>;
}
const TestBoxWrapper = styled.div`
    padding: 2.4rem 0 24rem;
    .header {
        margin-bottom: 3.2rem;
        &.st_2 {
            margin-bottom: 2.4rem;
        }
    }
    .body {
        .report_result_pdf {
            width: 100%;
            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }
    .btn_wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;
        padding-top: 3.2rem;
    }
    .footer {
        position: fixed;
        width: 100%;
        max-width: 114rem;
        margin: 0 auto;
        bottom: 4.5rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 2.4rem 3.2rem;
        .footer {
            left: 0;
            padding: 0 3.2rem;
            bottom: 2.5rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 1rem 1.6rem 10rem;
        margin-bottom: 4.8rem;
        .header {
            margin-bottom: 1.6rem;
        }
        .btn_wrap {
            position: fixed;
            width: 100%;
            bottom: 0;
            left: 0;
            padding: 1.2rem 1.6rem;
            background: #fff;
            z-index: 10;
            border-top: 1px solid #f4f4f4;
            gap: 0.8rem;
            button {
                border-radius: 0.4rem;
                color: #fff;
                &:nth-child(1) {
                    background: #dfdfdf;
                }
                &:nth-child(2) {
                    background: #328ef0;
                    flex: 1;
                }
            }
        }
        .footer {
            position: relative;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
    }
`;
export default TestBoxWrap;
