import { useRef, useState } from "react";
import Button from "./Button";
import styled from "styled-components";

function FileBox({
    onFileInputChange = (file) => {},
    onFileDelete = () => {},
    accept = null,
    isValid = (file) => true,
    ...props
}) {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (!isValid(file)) return;
        setFileName(file.name);
        onFileInputChange(file);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <FileBoxWrap className="file_box">
            <Button className="file" onClick={handleButtonClick}>
                파일선택
            </Button>
            <input
                className="file_name"
                value={fileName}
                placeholder="선택된 파일 없음"
                readOnly
            />
            <input
                readOnly
                accept={accept}
                type="file"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                {...props}
            />
        </FileBoxWrap>
    );
}
const FileBoxWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    input[type="file"] {
        display: none;
    }
    .file_name {
        font-size: 1.4rem;
        font-weight: 400;
        outline: none;
        min-width: 22.4rem;
        height: 4rem;
        outline: none;
        border: none;
        &::placeholder {
            color: ${({ theme }) => theme.colors.textPlaceHolder};
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        flex-direction: column;
        gap: 0;
        button {
            width: 100%;
        }
        .file_name {
            width: 100%;
        }
    }
`;

export default FileBox;
