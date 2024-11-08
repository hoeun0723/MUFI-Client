import styled from 'styled-components';

export const IntroduceWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
${({ theme }) => theme.fonts.b_55_60}
width:100%;
height:100vh;
`;