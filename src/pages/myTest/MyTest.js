import styled from "styled-components";
import MyTestHeader from "./components/MyTestHeader";
import MyTestList from "./components/MyTestList";
import Pagination from "../../components/UI/Pagination";

function MyTest() {
    const listDatas = [
        {
            no: 2,
            title: "㈜스카우트인적성검사 2차",
            enterprise: "스카우트",
            status: "미응시",
            type: "인성검사",
            codeNo: "-",
            range: "23.10.28~23.12.31(40분)",
            date: "-",
        },
        {
            no: 1,
            title: "㈜스카우트인적성검사 1차",
            enterprise: "스카우트",
            status: "응시완료",
            type: "인성검사",
            codeNo: "AW578",
            range: "23.10.28~23.12.31(20분)",
            date: "23.12.31",
        },
    ];
    return (
        <MyTestWrap>
            <div className="header">
                <MyTestHeader />
            </div>
            <div className="body">
                {listDatas.map((item, index) => (
                    <MyTestList
                        key={item.no}
                        no={item.no}
                        title={item.title}
                        enterprise={item.enterprise}
                        status={item.status}
                        type={item.type}
                        codeNo={item.codeNo}
                        range={item.range}
                        date={item.date}
                    />
                ))}
                <div className="pages">
                    <Pagination />
                </div>
            </div>
        </MyTestWrap>
    );
}
const MyTestWrap = styled.div`
    .header {
        margin-bottom: 4rem;
    }
    .body {
        margin-bottom: 20rem;
        .pages {
            margin-top: 4rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        padding: 0.8rem 3.2rem 2.4rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
        margin-bottom: 4.8rem;
        .header {
            margin-bottom: 2.4rem;
        }
        .body {
            margin-bottom: 1rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px) {
        padding: 1rem 1.6rem 2.4rem;
    }
`;
export default MyTest;
