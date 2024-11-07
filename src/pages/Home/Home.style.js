import styled from "styled-components";

export const HomeWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})} // flex 입니다 ! 어려운 사람들은 구지 mixin 안 쓰고 코드로 써도 됨!!
${({ theme }) => theme.fonts.big_title} // 폰트 설정입니다. 이거 추후 설정 값 바꿔야 할듯 !!
width:100%;
height:100vh;
`;