import styled from "styled-components";

function CsListWrapper({ children }) {
    return <CsListWrap>{children}</CsListWrap>;
}
const CsListWrap = styled.div`
    padding: 2.4rem 0 8.5rem;
    .header {
        margin-bottom: 4rem;
    }
    .search {
        margin-bottom: 2.4rem;
        display: flex;
        justify-content: flex-end;
        &.type_2 {
            justify-content: space-between;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 0.6rem 3.2rem 18.7rem;
        .header {
            margin-bottom: 3.2rem;
        }
        .search.type_2 {
            & > div {
                width: 27rem;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        padding: 0.6rem 1.6rem 10rem;
        margin-bottom: 4.8rem;
        .header {
            margin-bottom: 2.4rem;
        }
        .search {
            padding: 0 4rem;
            & > div {
                width: 100%;
            }
            &.type_2 {
                flex-direction: column;
                gap: 2.4rem;
                padding: 0;
                & > div {
                    width: calc(100% - 8rem);
                    margin: 0 auto;
                }
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        .table_wrap {
            table {
                colgroup {
                    display: none;
                }
                th,
                td {
                    &:nth-child(1) {
                        display: none;
                    }
                    &:nth-child(2) {
                        width: 60%;
                    }
                }
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        .table_wrap {
            table {
                th,
                td {
                    &:nth-child(2) {
                        width: 60%;
                    }
                }
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileS}px) {
        .table_wrap {
            table {
                th,
                td {
                    &:nth-child(2) {
                        width: 50%;
                    }
                }
            }
        }
    }
`;
export default CsListWrapper;
