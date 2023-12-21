import { useState } from "react";
import styled from "styled-components";

function TabMenu() {
    // 탭메뉴
    const [tabMenu, setTabMenu] = useState(0);
    const tabHandler = (tabIndex) => {
        setTabMenu(tabIndex);
    };
    return (
        <TabMenuWrap>
            <li className={tabMenu === 0 && "on"} onClick={() => tabHandler(0)}>
                전체
            </li>
            <li className={tabMenu === 1 && "on"} onClick={() => tabHandler(1)}>
                사이트이용
            </li>
            <li className={tabMenu === 2 && "on"} onClick={() => tabHandler(2)}>
                인적성검사 관련
            </li>
            <li className={tabMenu === 3 && "on"} onClick={() => tabHandler(3)}>
                기타
            </li>
        </TabMenuWrap>
    );
}
const TabMenuWrap = styled.ul`
    display: flex;
    li {
        cursor: pointer;
        padding: 0 2.4rem;
        height: 4.4rem;
        line-height: 4.2rem;
        border-bottom: 2px solid transparent;
        font-size: 1.6rem;
        font-weight: 400;
        color: #3d3d3d;
        transition: all 0.3s;
        &.on {
            border-color: ${({ theme }) => theme.colors.primaryBg};
            color: ${({ theme }) => theme.colors.primaryBg};
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        li {
            flex: auto;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        /* TODO : 슬릭 슬라이드 적용 */
        overflow: hidden;
        li {
            flex: initial;
        }
    }
`;
export default TabMenu;
