// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 10}rem`;

const fontSizes = {
    title: pixelToRem(26),
    subtitle: pixelToRem(16),
    default: pixelToRem(15),
    sm: pixelToRem(14),
};

const colors = {
    text: "#242424",
    textGray: "#6F6F6F",
    textPlaceHolder: "#A5A5A5",
    primaryText: "#2D6ECE",
    primaryBg: "#328EF0",
    primaryBorder: "#499DF3",
    danger: "#FE4C0C",
    secondary: "#8B8B8B",
    border: "#EFEFEF",
    borderInput: "#ECECEC",
    borderDark: "#DFDFDF",
    black: "#242424",
    gray1: "#606060",
    gray2: "#888888",
    gray3: "#9f9f9f",
    gray4: "#eeeeee",
    gray5: "#ECECEC",
    gray6: "#DFDFDF",
};

const common = {
    flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
    flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
    ellipsis: `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};

const breakpoint = {
    tablet: 1200,
    mobileL: 768,
    mobileM: 480,
    mobileS: 340,
};

const theme = {
    fontSizes,
    colors,
    common,
    breakpoint,
};

export default theme;
