import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrap = styled.div`
    padding: 2rem;
    max-width: 100rem;
    background: #f2f2f2;
    margin: 2rem auto 0;
    h2 {
        margin-bottom: 2rem;
    }
    ul {
        margin-left: 2rem;
        li {
            list-style: disc;
            min-height: 3.5rem;
            line-height: 3.5rem;
            a {
                text-decoration: underline;
                text-underline-position: under;
            }
        }
    }
`;

function PageList() {
    return (
        <Wrap>
            <h2>pages</h2>
            <ul>
                <li>
                    <Link to="/login">3. 로그인</Link>
                </li>
                <li>
                    <Link to="/livehistory">4. 실시간관제 → 이력관리</Link>
                </li>
                <li>
                    <Link to="/productionschedule">
                        5. 작업스케쥴관리 → 생산계획관리
                    </Link>
                </li>

                <li>
                    <Link to="/schedulescenario">
                        5. 작업스케쥴관리 → 생산시나리오관리
                    </Link>
                    <br />ㄴ 승인작업계획생성 (팝업)
                    <br />ㄴ 최적작업계획생성 (팝업)
                </li>
                <li>
                    <Link to="/">4. 실시간관제 → 실시간작업관제</Link>
                    <br />ㄴ 무인체 상세 팝업
                </li>
                <li>
                    <Link to="/servicesite">
                        7. 서비스관리 → 작업사이트관리
                    </Link>
                    <br />ㄴ 작업사이트 환경설정 - [환경설정] 클릭 시 화면 전환
                </li>
                <li>
                    <Link to="/settingauth">8. 시스템 관리 → 권한 관리</Link>
                </li>
                <li>
                    <Link to="/settingcustomcode">
                        8. 시스템 관리 → 커스텀코드 관리
                    </Link>
                    <br />ㄴ 커스텀 코드 등록 (팝업) - [등록] 클릭 시 확인
                </li>
                <li>
                    <Link to="/objectstatistics">
                        6. 통계 관리 → 이동체 통계
                    </Link>
                </li>
                <li>
                    <Link to="/schedulesimulation">
                        5. 작업스케쥴관리 → 시뮬레이션관제
                    </Link>
                </li>
                <li>
                    <Link to="/schedulesrulesets">
                        5. 작업스케쥴관리 → 룰셋관리
                    </Link>
                </li>
                <li>
                    <Link to="/uiComponents">ui components</Link> : 99. 공통 →
                    작업사이트좌표 검색 팝업 - 포함
                    <br />ㄴ Modal → 작업사이트좌표 검색 팝업 버튼 선택
                </li>
            </ul>
        </Wrap>
    );
}
export default PageList;
