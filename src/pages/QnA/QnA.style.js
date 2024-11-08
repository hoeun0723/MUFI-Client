import styled from "styled-components";

export const QnAWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
${({ theme }) => theme.fonts.b_55_60}
width:100%;
height:100vh;
`;

/*
폰트r_20을 설정하고 싶으면
${({ theme }) => theme.fonts.r_20}
이렇게 적어주세요!

폰트 색상 gray를 설정하고 싶으면
color: ${({ theme }) => theme.colors.gray};
이렇게 적어주세요!

배경 색상 dark_red를 적용 하고 싶으면
background-color: ${({ theme }) => theme.colors.dark_red};
이렇게 적어주세요!
*/