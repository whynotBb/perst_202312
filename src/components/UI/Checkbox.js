import styled from "styled-components";
import IcoCheck from "../../assets/images/check-box.svg";
import IcoCheckSelected from "../../assets/images/check-box-selected.svg";

function Checkbox({ id, label }) {
    const CheckBox = styled.div`
        display: inline-block;
        input {
            display: none;
            &:checked {
                & + label {
                    background-image: url(${IcoCheckSelected});
                }
            }
        }
        label {
            display: inline-block;
            cursor: pointer;
            font-size: 1.6rem;
            height: 2.4rem;
            line-height: 2.4rem;
            padding-left: ${label ? "2.4" : "2"}rem;
            background-image: url(${IcoCheck});
            background-repeat: no-repeat;
            background-position: left center;
            color: ${({ theme }) => theme.colors.gray1};
            text-align: left;
        }
    `;
    return (
        <CheckBox>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{label}</label>
        </CheckBox>
    );
}
export default Checkbox;
