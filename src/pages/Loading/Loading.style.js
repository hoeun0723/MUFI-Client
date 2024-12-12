import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: white;
  width: 100%;
  height: 100vh;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_06};
  text-align: center;

`;

export const LottieWrapper = styled.div`
  width: 50%;
  height: 100%;
`
