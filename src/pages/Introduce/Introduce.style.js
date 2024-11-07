import styled from 'styled-components';

export const IntroduceWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
${({ theme }) => theme.fonts.big_title}
width:100%;
height:100vh;
`;