import styled from "styled-components";

export const FooterWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column'})};
position: relative;
bottom:0;
width: 100%;
height:52rem;
background-color: ${({ theme }) => theme.colors.black};
color: white;
`;

export const ServiceContent = styled.div`
display: flex;
justify-content: flex-end;
position:relative;
width:100%;
padding-right: 7.3rem;
top: -10rem;
gap: 5.7rem;
`;


export const SnsNav = styled.div`
display: flex;
gap: 2.2rem;
`;

export const Terms = styled.div`
display: flex;
gap: 3.9rem;
`;

export const TermContent = styled.div`
display: flex;
${({ theme }) => theme.fonts.r_20};
color: rgba(255, 255, 255, 0.70);
`;

export const Logo = styled.div`
display: flex;
position:relative;
top: 7.2rem;
left:10.2rem;

`;

export const AdditionalContent = styled.div`
display: flex;
justify-content: space-between;
width:100%;
padding: 0 14.7rem 0 10.2rem;
`;

export const CompanyInfo = styled.div`
display: flex;
color: rgba(255, 255, 255, 0.50);
${({ theme }) => theme.fonts.r_20_44_5};
margin-top: 2rem;
`;

export const DeveloperInfo = styled.div`
display: flex;
flex-direction: column;
gap:4.5rem;

span {
    ${({ theme }) => theme.fonts.r_40};
    color: white;
}
`;

export const Develeopers = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column', align:'space-between'})};
width: 100%;
gap:2.2rem;
`;

export const Developer = styled.div`
display: flex;
justify-content: space-between;
color: white;
margin-left: 1.9rem;

width: 57rem;
${({ theme }) => theme.fonts.r_20};

span {
    ${({ theme }) => theme.fonts.r_20};
    color: rgba(255, 255, 255, 0.50);
}
`;