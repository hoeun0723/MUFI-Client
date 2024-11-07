import styled from "styled-components";

export const GalleryWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
${({ theme }) => theme.fonts.big_title}
width:100%;
height:100vh;
`;