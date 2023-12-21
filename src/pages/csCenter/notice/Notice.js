import CsHeader from "../components/CsHeader";
import SearchInputBox from "../../../components/UI/SearchInputBox";
import CsListWrapper from "../components/CsListWrapper";
import Pagination from "../../../components/UI/Pagination";
import IcoFile from "../../../assets/images/file_link.svg";
import { Link } from "react-router-dom";

function Notice() {
    return (
        <CsListWrapper>
            <div className="header">
                <CsHeader title="공지사항" />
            </div>
            <div className="search">
                <SearchInputBox />
            </div>
            <div className="body table">
                <div className="table_wrap">
                    <table>
                        <colgroup>
                            <col style={{ width: "7%" }} />
                            <col style={{ width: "63%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>제목</th>
                                <th>파일첨부</th>
                                <th>등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>6</td>
                                <td>
                                    <Link to="/notice/6" className="ellipsis">
                                        Perst를 오픈합니다.
                                    </Link>
                                </td>
                                <td></td>
                                <td className="date">2023.10.23</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <Link to="/notice/5" className="ellipsis">
                                        Perst를 오픈합니다.Perst를
                                        오픈합니다.Perst를 오픈합니다.Perst를
                                        오픈합니다.Perst를 오픈합니다.Perst를
                                        오픈합니다.Perst를 오픈합니다.
                                        오픈합니다.Perst를 오픈합니다.
                                    </Link>
                                </td>
                                <td>
                                    <img src={IcoFile} alt="file" />
                                </td>
                                <td className="date">2023.10.23</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <Link to="/notice/4" className="ellipsis">
                                        Perst를 오픈합니다.
                                    </Link>
                                </td>
                                <td></td>
                                <td className="date">2023.10.23</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <Link to="/notice/3" className="ellipsis">
                                        Perst를 오픈합니다.
                                    </Link>
                                </td>
                                <td></td>
                                <td className="date">2023.10.23</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <Link to="/notice/2" className="ellipsis">
                                        Perst를 오픈합니다.
                                    </Link>
                                </td>
                                <td></td>
                                <td className="date">2023.10.23</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link to="/notice/1" className="ellipsis">
                                        Perst를 오픈합니다.
                                    </Link>
                                </td>
                                <td></td>
                                <td className="date">2023.10.23</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Pagination />
            </div>
        </CsListWrapper>
    );
}
export default Notice;
