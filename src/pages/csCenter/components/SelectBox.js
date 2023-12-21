import { useState } from "react";
import styled from "styled-components";
import IcoArrow from "../../../assets/images/select_arrow.svg";

function SelectBox() {
    // ↓ 퍼블단에서 화면 확인만을 위해 작성한 코드 입니다.
    //   추후 개발단에서 수정 해 주세요

    //select 값
    const [showOptions, setShowOptions] = useState(false);
    const HandleShowOption = () => {
        //readonly 가 아닐때만 작동
        setShowOptions((current) => !current);
    };
    const HandleMouseLeave = () => {
        setShowOptions(false);
    };
    const [selected, setSelected] = useState("");
    const HandleSelected = (txt) => {
        setSelected(txt);
        setShowOptions(false);
    };
    return (
        <SelectBoxWrap
            className={showOptions && "on"}
            onMouseLeave={HandleMouseLeave}
        >
            <p className="selected" onClick={HandleShowOption}>
                {selected === "" ? (
                    <span className="placeHolder">구분선택</span>
                ) : (
                    selected
                )}
            </p>
            <div className="option_group">
                <ul className="inner">
                    <li onClick={() => HandleSelected("사이트이용")}>
                        사이트이용
                    </li>
                    <li onClick={() => HandleSelected("인적성검사 관련")}>
                        인적성검사 관련
                    </li>
                    <li onClick={() => HandleSelected("사이기타트이용")}>
                        기타
                    </li>
                </ul>
            </div>
        </SelectBoxWrap>
    );
}
const SelectBoxWrap = styled.div`
    width: 20rem;
    height: 4.5rem;
    /* overflow: hidden; */
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .selected {
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.borderInput};
        height: 4.5rem;
        padding: 1.2rem 4.6rem 1.2rem 2rem;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2rem;
        position: relative;
        &::after {
            content: "";
            display: block;
            width: 1.6rem;
            height: 1.6rem;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 2rem;
            background-image: url(${IcoArrow});
            background-repeat: no-repeat;
            background-position: center;
            transition: all 0.3s;
        }
        &:hover {
            border-color: ${({ theme }) => theme.colors.primaryBorder};
        }
        .placeHolder {
            color: ${({ theme }) => theme.colors.textPlaceHolder};
        }
    }
    .option_group {
        padding: 0.5rem 0 0;

        position: absolute;
        width: 100%;
        .inner {
            padding: 1.2rem 2rem;
            border-radius: 4px;
            background: #fff;
            border: 1px solid ${({ theme }) => theme.colors.borderInput};
        }
        li {
            line-height: 3.2rem;
            &:hover {
                color: ${({ theme }) => theme.colors.primaryText};
            }
        }
    }
    &.on {
        overflow: initial;
        .selected::after {
            transform: translateY(-50%) rotate(180deg);
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        width: 14rem;
    }
`;
export default SelectBox;
