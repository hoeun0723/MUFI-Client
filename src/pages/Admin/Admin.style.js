import styled from "styled-components";

export const AdminWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
  overflow: hidden;
  font-family: pretendard;
`;

export const Sidebar = styled.div`
  width: 30%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
`;

export const AdminTitle = styled.div`
  font-size: 3.3rem;
  text-align: center;
  color: #616161;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 6rem;
`;

export const SidebarTab = styled.button`
  font-size: 4rem;
  color: ${({ active }) => (active ? "#ffffff" : "#d9d9d9")};
  background: none;
  border: none;
  text-align: left;
  margin-bottom: 2rem;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "900" : "400")};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  overflow-y: auto;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 80rem;
`;

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  cursor: pointer;
  background-color: #fff;
`;

export const ItemTitle = styled.div`
  font-size: 2rem;
  font-weight: 400;
`;

export const StatusLabel = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ answered }) => (answered ? "green" : "red")};
`;

export const DetailWrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #ddd;
`;

export const BackButton = styled.button`
  font-size: 2rem;
  margin-bottom: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: #EA4343;
`;

export const EditableTitle = styled.h2`
  color: #616161;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  outline: none;
  border: 1px dashed #d9d9d9;
  padding: 2rem;
`;

export const EditableContent = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  outline: none;
  border: 1px dashed #d9d9d9;
  padding: 4rem 2rem;
  color: #616161;
`;
