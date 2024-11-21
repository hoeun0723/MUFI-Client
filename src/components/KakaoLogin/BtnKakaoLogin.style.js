import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: white;
`;


