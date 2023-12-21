import styled from "styled-components";
import Pagination from "../../../components/UI/Pagination";
import SearchInputBox from "../../../components/UI/SearchInputBox";
import Accordion from "../components/Accordion";
import CsHeader from "../components/CsHeader";
import CsListWrapper from "../components/CsListWrapper";
import TabMenu from "../components/TabMenu";

function Faq() {
    const faqDatas = [
        {
            category: "사이트이용",
            title: "응시 시간안에 응시하지 못하면 어떡하나요?",
            contents:
                "응시결과는 나의 TEST > TEST결과 내역에서 확인하실 수 있습니다. ​감사합니다.",
        },
        {
            category: "인적성검사 관련",
            title: "내정보는 어디서 확인하나요?내정보는 어디서 확인하나요?내정보는 어디서 확인하나요?내정보는 어디서 확인하나요?내정보는 어디서 확인하나요?",
            contents:
                "내정보는 어디서 확인하나요? 내역에서 확인하실 수 있습니다. ​감사합니다.내정보는 어디서 확인하나요? 내역에서 확인하실 수 있습니다. ​감사합니다.내정보는 어디서 확인하나요? 내역에서 확인하실 수 있습니다. ​감사합니다.",
        },
        {
            category: "기타",
            title: "응시결과는 어디서 보나요?",
            contents:
                "응시결과는 나의 TEST > TEST결과 내역에서 확인하실 수 있습니다. ​감사합니다.",
        },
        {
            category: "사이트이용",
            title: "인증코드가 있는데 사용을 어떻게 하나요?",
            contents:
                "응시결과는 나의 TEST > TEST결과 내역에서 확인하실 수 있습니다. ​감사합니다.",
        },
    ];
    return (
        <CsListWrapper>
            <div className="header">
                <CsHeader title="자주 묻는 질문" />
            </div>
            <div className="search type_2">
                <TabMenu />
                <SearchInputBox />
            </div>
            <div className="body">
                <AccordionBox>
                    {faqDatas.map((item, index) => (
                        <Accordion
                            key={index}
                            category={item.category}
                            title={item.title}
                            contents={item.contents}
                        />
                    ))}
                </AccordionBox>
                <Pagination />
            </div>
        </CsListWrapper>
    );
}
const AccordionBox = styled.div`
    padding-bottom: 1.6rem;
`;
export default Faq;
