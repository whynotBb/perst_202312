import styled from "styled-components";
import TextFields from "../components/UI/TextFields";
import Button from "../components/UI/Button";
import SearchInputBox from "../components/UI/SearchInputBox";
import TextInput from "./csCenter/components/TextInput";
import Checkbox from "../components/UI/Checkbox";
import FileBox from "../components/UI/FileBox";
import { useEffect, useState } from "react";
import Modal from "../components/UI/Modal";
import CheckInformation from "./myTest/components/CheckInformation";
import PrivateAgree from "./myTest/components/PrivateAgree";
import Toast from "../components/UI/Toast";
const Wrap = styled.div`
    padding: 4rem;
    max-width: 192rem;
    margin: 0 auto;
    h2 {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }
    h3 {
        margin-bottom: 2rem;
    }
    hr {
        margin: 2rem 0;
    }
`;
const FlexRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
`;

function UIComponents() {
    // 모달여닫기
    const [isToastOpen, setIsToastOpen] = useState(false);
    const openToastHandler = () => {
        setIsToastOpen(true);
    };
    const closeToast = () => {
        setIsToastOpen(false);
    };

    useEffect(() => {
        if (isToastOpen) {
            setTimeout(() => {
                setIsModalOpen(false);
            }, 3000);
        }
    }, [isToastOpen]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModalHandler = () => {
        setIsModalOpen(true);
    };
    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const openModalHandler2 = () => {
        setIsModalOpen2(true);
    };
    const closeModalHandler2 = () => {
        setIsModalOpen2(false);
    };
    return (
        <Wrap>
            <h2>
                ✔ 컴포넌트를 구성하기 위한 스크립트 들은 퍼블단에서 화면
                확인만을 위해 작성하였으니, 개발단에서는 개발 상황에 맞게 수정
                하여 이용 부탁드립니다.
            </h2>
            <h3>🌞button + modal</h3>
            <FlexRow>
                <Button className="round mid" onClick={openModalHandler}>
                    3 응시자 정보 확인 (코드발급형)
                </Button>
                <Button className="round mid ico_right">Button</Button>
                <Button className="primary mid">Button</Button>
                <Button className="primaryBg sm">Button</Button>
                <Button className="more_btn">Button</Button>
            </FlexRow>
            <Modal
                close={closeModalHandler}
                className={`code_type st_2 ${isModalOpen ? "active" : ""}`}
                active={isModalOpen && true}
            >
                <div className="body">
                    <CheckInformation open2nd={openModalHandler2} />
                </div>
                <div className="footer">
                    <Button
                        className="primary round mid"
                        onClick={openToastHandler}
                    >
                        응시자 정보 확인
                    </Button>
                </div>
                <div className="mobile_footer">
                    <Button
                        className="seocondaryBg h_48"
                        onClick={closeModalHandler}
                    >
                        닫기
                    </Button>
                    <Button
                        className="primaryBg h_48"
                        onClick={openToastHandler}
                    >
                        응시자 정보 확인
                    </Button>
                </div>
                {isToastOpen && (
                    <Toast
                        isToastOpen={isModalOpen}
                        onclose={closeToast}
                        position="bottom"
                        msg="올바르지 않은 정보입니다. 다시 한 번 확인해주세요."
                    />
                )}
            </Modal>

            <Modal
                active={isModalOpen2 && true}
                close={closeModalHandler2}
                className={`full_type st_2 ${isModalOpen2 ? "active" : ""}`}
            >
                <div className="body">
                    <PrivateAgree />
                </div>
                <div className="footer">
                    <Button
                        className="primary round"
                        onClick={closeModalHandler2}
                    >
                        동의
                    </Button>
                </div>
                <div className="mobile_footer">
                    <Button
                        className="seocondaryBg h_48"
                        onClick={closeModalHandler2}
                    >
                        닫기
                    </Button>
                    <Button
                        className="primaryBg h_48"
                        onClick={closeModalHandler2}
                    >
                        동의
                    </Button>
                </div>
            </Modal>
            <hr />
            <h3>🌞input</h3>
            <FlexRow>
                <TextFields placeholder="코드번호를 입력해 주세요." />
                <TextFields
                    placeholder="코드번호를 입력해 주세요."
                    error="error"
                    errorTxt="사용할 수 없는 코드번호입니다. 다시 확인해 주세요."
                />
                <SearchInputBox />
                <Checkbox id="chk01" label="개인정보 이용 수집 동의 (필수)" />
                <FileBox />
            </FlexRow>
        </Wrap>
    );
}
export default UIComponents;
