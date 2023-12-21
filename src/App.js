import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import { createGlobalStyle } from "styled-components";
import UIComponents from "./pages/UIComponents";
import PageList from "./pages/PageList";
import Home from "./pages/home/Home";
import Notice from "./pages/csCenter/notice/Notice";
import Faq from "./pages/csCenter/faq/Faq";
import NoticeDetail from "./pages/csCenter/notice/NoticeDetail";
import Contact from "./pages/csCenter/contact/Contact";
import MyTest from "./pages/myTest/MyTest";
import MyTestStart from "./pages/myTest/MyTestStart";
import MyTestDetail from "./pages/myTest/MyTestDetail";
import MyTestResult from "./pages/myTest/MyTestResult";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="home" replace />,
            },
            {
                path: "home",
                element: <Home />,
            },
            { path: "/notice", element: <Notice /> },
            { path: "/notice/:noticeId", element: <NoticeDetail /> },
            { path: "/faq", element: <Faq /> },
            { path: "/contact", element: <Contact /> },
            { path: "/mytest", element: <MyTest /> },
            { path: "/mytest/:mytestId", element: <MyTestStart /> },
            { path: "/mytest/:mytestId/detail", element: <MyTestDetail /> },
            { path: "/mytest/result", element: <MyTestResult /> },
            { path: "/uiComponents", element: <UIComponents /> },
        ],
    },

    { path: "/pageList", element: <PageList /> },
]);

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
html{
  font-size: 10px;
  font-weight: 400;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body{
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.default};
  max-width: 192rem;
  min-width: 114rem;
  margin: 0 auto;
  width: 100%;
  background: #fff;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
    max-width: initial;
    min-width: initial;
    
  }
}

a{
  text-decoration: none;
  color: inherit;
}
*{
  box-sizing: border-box;
}
input:-webkit-autofill {
-webkit-box-shadow: 0 0 0 1000px white inset;
box-shadow: 0 0 0 1000px white inset;
}
input{
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: none;
}
input[type='text']{
  border-radius: .4rem;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
  color: #171717;
  &:disabled{
    color: #6F6F6F;
  }
}
textarea{
font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
resize: none;
outline:none;
border: 1px solid ${({ theme }) => theme.colors.borderInput};
border-radius: 0.4rem;
padding:1.6rem 2rem;
font-size: 1.6rem;
height: 15rem;
width: 100%;
font-weight: 400;
line-height: 2.2rem; /* 137.5% */
letter-spacing: -0.48px;
color: #171717;
&::placeholder{
  color: #9f9f9f;
}
&:focus, &:hover{
  border-color: ${({ theme }) => theme.colors.primaryBorder};
}
}
/* scroll custom */
::-webkit-slider-thumb {
-webkit-appearance: none;
width: 40px; /* 1 */
height: 10px;
background: #999;
box-shadow: -200px 0 0 200px #999; /* 2 */
border: 2px solid #999; /* 1 */
}

::-moz-range-track {
height: 10px;
background: #ddd;
}

::-moz-range-thumb {
background: #999;
height: 10px;
width: 40px;
border: 3px solid #999;
border-radius: 0 !important;
box-shadow: -200px 0 0 200px transparent;
box-sizing: border-box;
}

::-ms-fill-lower {
background: dodgerblue;
}

::-ms-thumb {
background: #999;
border: 2px solid #999;
height: 10px;
width: 40px;
box-sizing: border-box;
}

::-ms-ticks-after {
display: none;
}

::-ms-ticks-before {
display: none;
}

::-ms-track {
background: #ddd;
color: transparent;
height: 10px;
border: none;
}

::-ms-tooltip {
display: none;
}

/* 스크롤바 설정*/
::-webkit-scrollbar {
width: 6px;
height: 10px;
}

::-webkit-scrollbar-thumb {
height: 17%;
background-color: rgba(186, 186, 186, 0.5);
border-radius: 10px;
}

/* 스크롤바 뒷 배경 설정*/
::-webkit-scrollbar-track {
background-color: rgba(245, 245, 245, 0.5);
}
.required{
color: ${({ theme }) => theme.colors.secondary};
}
table{
width: 100%;
border-top: 2px solid ${({ theme }) => theme.colors.borderDark};
border-bottom: 1px solid ${({ theme }) => theme.colors.border};
margin-bottom: 4rem;
table-layout: fixed;
td{
  height: 4.8rem;
  line-height: 4.8rem;
  padding: 0 1rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1.6rem;
  letter-spacing: -0.48px;
  .ellipsis{
    text-align: left;
    ${({ theme }) => theme.common.ellipsis}
    cursor: pointer;
    display: block;
      width: 100%;
  }
  &.date{
    font-size: 1.4rem;
    color: #A5A5A5;
  }
  img{
    vertical-align: middle;
  }
}
th{
  text-align: center;
  vertical-align: middle;
  background: #f9f9f9;
  padding: 0 1rem;
  height: 3.8rem;
  line-height: 3.7rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #3D3D3D;
}
@media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
  th{
    height: 3.6rem;
    line-height: 3.5rem;
    font-size: 1.4rem;
  }
}
@media (max-width: ${({ theme }) => theme.breakpoint.mobileL}px) {
  th{
    height: 3.4rem;
    line-height: 3.3rem;
    font-size: 1.3rem;
    padding: 0 .8rem;
  }
  td{
    padding: 1.2rem .8rem;
    min-height: 4.8rem;
    line-height: 2.2rem;
    vertical-align: middle;
    &.date{
      font-size: 1.3rem;
      padding: 0;
    }
    .ellipsis{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 2rem;
      white-space: initial;
    }
  }
}
@media (max-width: ${({ theme }) => theme.breakpoint.mobileM}px){
td{
  font-size: 1.5rem;
  &.date{
    font-size: 1.2rem;
  }
}
}
}
`;
export default App;
