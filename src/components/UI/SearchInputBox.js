import styled from "styled-components";
import IcoSearch from "../../assets/images/search-normal.svg";

function SearchInputBox() {
    return (
        <SearchInputWrap>
            <input type="text" placeholder="제목, 내용 입력" />
            <input type="button" />
        </SearchInputWrap>
    );
}
const SearchInputWrap = styled.div`
    width: 40rem;
    position: relative;
    input[type="text"] {
        height: 4.5rem;
        line-height: 4.5rem;
        padding: 0 5.2rem 0 2rem;
        border-radius: 10rem;
        border: 1px solid ${({ theme }) => theme.colors.borderInput};
        background: #fff;
        width: 100%;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.2rem;
        &::placeholder {
            color: ${({ theme }) => theme.colors.textPlaceHolder};
        }
    }
    input[type="button"] {
        position: absolute;
        padding: 0;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%);
        width: 2.2rem;
        height: 2.2rem;
        background: url(${IcoSearch}) no-repeat center;
        border: none;
        cursor: pointer;
    }
`;
export default SearchInputBox;
