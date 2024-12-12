import mixin from './mixin';
import { css } from 'styled-components';
import '../assets/fonts/pretendard.css';

const colors = {
  white: '#FFF',
  black: '#000',
  dark: '#2E2E2E',
  dark_red: '#EA4343',
  light_red: '#FEF6F6',
  pink: '#F69190',
  gray: '#616161',
  light_gray: '#F5F5F5',

};

const fonts = {
  b_55_60: css`
    font-family: 'Pretendard';
    font-size: 5.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 6rem;
    letter-spacing: -0.33rem;
  `,
  b_48: css`
    font-family: 'Pretendard';
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  r_48: css`
    font-family: 'Pretendard';
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  xb_40_60: css`
    font-family: 'Pretendard';
    font-size: 4%;
    font-style: normal;
    font-weight: 800;
    line-height: 6rem;
  `,

  b_40: css`
    font-family: 'Pretendard';
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  r_40: css`
    font-family: 'Pretendard';
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  b_36_60: css`
    font-family: 'Pretendard';
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 6rem;
  `,
  r_36_60: css`
    font-family: 'Pretendard';
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 6rem;
  `,
  b_32: css`
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,

  r_32_60: css`
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 6rem;
  `,
  r_32: css`
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  xb_27_60: css`
    font-family: 'Pretendard';
    font-size: 2.7rem;
    font-style: normal;
    font-weight: 800;
    line-height: 6rem;
    letter-spacing: -0.081rem;
  `,
  sb_27_38: css`
  font-family: 'Pretendard';
  font-size: 2.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.8rem;
  letter-spacing: -0.189rem;
`,
r_27_38: css`
font-family: 'Pretendard';
font-size: 2.7rem;
font-style: normal;
font-weight: 400;
line-height: 3.8rem;
letter-spacing: -0.243rem;
`,
b_24: css`
font-family: 'Pretendard';
font-size: 2.4rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`,
r_24: css`
font-family: 'Pretendard';
font-size: 2.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`,
r_24_60: css`
font-family: 'Pretendard';
font-size: 2.4rem;
font-style: normal;
font-weight: 400;
line-height: 6rem;
`,
r_24_50: css`
font-family: 'Pretendard';
font-size: 2.4rem;
font-style: normal;
font-weight: 400;
line-height: 5rem;
`,
b_20: css`
font-family: 'Pretendard';
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`,
r_20: css`
font-family: 'Pretendard';
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`,
r_17_44_5: css`
font-family: 'Pretendard';
font-size: 1.7rem;
font-style: normal;
font-weight: 400;
line-height: 3.5rem;
letter-spacing: 0.1rem;
`,
r_17: css`
font-family: 'Pretendard';
font-size: 1.7rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`,
b_12: css`
font-family: 'Pretendard';
font-size: 1.2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`,
b_10: css`
font-family: 'Pretendard';
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`,
};

const theme = { mixin, colors, fonts };

export default theme;
