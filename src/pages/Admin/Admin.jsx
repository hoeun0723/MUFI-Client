import React, { useState, useEffect } from "react";
import * as S from "./Admin.style";

function Admin() {
  const [activeTab, setActiveTab] = useState("FAQ");
  const [selectedItem, setSelectedItem] = useState(null);

  const [faqData, setFaqData] = useState([
    { id: 1, title: "인화사이즈는 어떻게 되나요?", content: "보통 인생네컷과 포토이즘과 같은 프레임 사이즈 입니다! 감사합니다." },
    { id: 2, title: "촬영부스 인원 제한이 있나요?", content: "부스가 가득찰 정도면 됩니다. 따로 제한은 없습니다. 감사합니다!" },
    { id: 3, title: "부스는 최대 몇개까지 대여 가능한가요?", content: "현재는 최대 5개까지 대여 가능합니다. 감사합니다!" },
    { id: 4, title: "예약을 취소하거나 변경하고 싶습니다.", content: "오픈 채팅으로 문의주시기 바랍니다. 감사합니다!" },
  ]);

  const [qnaData] = useState([
    { id: 1, title: "#1", content: "인화사이즈는 어떻게 되나요?", answered: true, answer: "관리자 답변 1" },
    { id: 2, title: "#2", content: "촬영부스 인원 제한이 있나요?", answered: true, answer: "관리자 답변" },
    { id: 3, title: "#3", content: "부스는 최대 몇 개까지 대여 가능한가요?", answered: false, answer: "" },
    { id: 4, title: "#4", content: "오늘 찍은 사진은 어디서 확인하나요?", answered: false, answer: "" },
    { id: 5, title: "#5", content: "프레임 예시는 어떤게 좋은가요?", answered: false, answer: "" },
    { id: 6, title: "#6", content: "기기를 1주일 내내 대여 가능한가요?", answered: true, answer: "" },
  ]);

  const [reservationList] = useState([
    {
      id: 1,
      name: "홍길동",
      event: "항공대 축제",
      phone: "010-1234-5678",
      address: "경기도 고양시",
      detailAddress: "삼성동 123-45",
      booths: 2,
      distance: "약 107km",
      price: "₩ 700,000",
      date: "2024-12-20",
    },
    {
      id: 2,
      name: "정하윤",
      event: "팝업 행사",
      phone: "010-6666-1111",
      address: "서울특별시 양천구",
      detailAddress: "삼성동 123-45",
      booths: 2,
      distance: "약 107km",
      price: "₩ 700,000",
      date: "2025-04-14",
    },
    {
      id: 3,
      name: "왕호은",
      event: "크리스마스 축제",
      phone: "010-2222-2222",
      address: "서울 마포구",
      detailAddress: "삼성동 123-45",
      booths: 2,
      distance: "약 107km",
      price: "₩ 700,000",
      date: "2024-12-25",
    },
    {
      id: 4,
      name: "양재원",
      event: "웹컴퍼니 MT",
      phone: "010-8888-9999",
      address: "제주도 애월읍",
      detailAddress: "삼성동 123-45",
      booths: 2,
      distance: "약 107km",
      price: "₩ 700,000",
      date: "2024-12-18",
    },
    {
      id: 5,
      name: "이하원",
      event: "대학 축제",
      phone: "010-0101-1010",
      address: "충청북도 홍주시",
      detailAddress: "삼성동 123-45",
      booths: 2,
      distance: "약 107km",
      price: "₩ 700,000",
      date: "2025-05-12",
    },
  ]);

  useEffect(() => {
    window.scrollTo({ top: 110, behavior: "smooth" });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null); // 탭 변경 시 선택 초기화
  };

  const handleFaqItemClick = (item) => {
    setSelectedItem(item); // FAQ 항목 선택
  };

  const handleFaqEdit = (field, value) => {
    setFaqData((prev) =>
      prev.map((faq) =>
        faq.id === selectedItem.id ? { ...faq, [field]: value } : faq
      )
    );
    setSelectedItem((prev) => ({ ...prev, [field]: value }));
  };

  const handleBackClick = () => {
    setSelectedItem(null); // 뒤로가기 시 선택 초기화
  };

  return (
    <S.AdminWrapper>
      <S.Sidebar>
        <S.AdminTitle>Welcome Admin</S.AdminTitle>
        <S.SidebarTab active={activeTab === "FAQ"} onClick={() => handleTabClick("FAQ")}>
          FAQ
        </S.SidebarTab>
        <S.SidebarTab active={activeTab === "Q&A"} onClick={() => handleTabClick("Q&A")}>
          Q&A
        </S.SidebarTab>
        <S.SidebarTab
          active={activeTab === "Reservation"}
          onClick={() => handleTabClick("Reservation")}
        >
          Reservation
        </S.SidebarTab>
      </S.Sidebar>
      <S.ContentArea>
        {activeTab === "FAQ" ? (
          selectedItem ? (
            <S.DetailWrapper>
              <S.BackButton onClick={handleBackClick}>◀︎ BACK</S.BackButton>
              <S.EditableTitle
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleFaqEdit("title", e.target.innerText)}
              >
                {selectedItem.title}
              </S.EditableTitle>
              <S.EditableContent
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleFaqEdit("content", e.target.innerText)}
              >
                {selectedItem.content}
              </S.EditableContent>
            </S.DetailWrapper>
          ) : (
            <S.ListWrapper>
              {faqData.map((item) => (
                <S.ItemBox key={item.id} onClick={() => handleFaqItemClick(item)}>
                  <S.ItemTitle>{item.title}</S.ItemTitle>
                </S.ItemBox>
              ))}
            </S.ListWrapper>
          )
        ) : activeTab === "Q&A" ? (
          <S.ListWrapper>
            {qnaData.map((item) => (
              <S.ItemBox key={item.id}>
                <S.ItemTitle>{item.title}</S.ItemTitle>
                <S.ItemTitle>{item.content}</S.ItemTitle>
                <S.StatusLabel answered={item.answered}>
                  {item.answered ? "완료" : "대기"}
                </S.StatusLabel>
              </S.ItemBox>
            ))}
          </S.ListWrapper>
        ) : activeTab === "Reservation" ? (
          <S.ListWrapper>
            {reservationList.map((item) => (
              <S.ItemBox key={item.id}>
                <S.ItemTitle>{item.name}</S.ItemTitle>
                <S.ItemTitle>{item.event}</S.ItemTitle>
                <S.ItemTitle>{item.address}</S.ItemTitle>
                <S.ItemTitle>{item.phone}</S.ItemTitle>
                <S.ItemTitle>{item.date}</S.ItemTitle>
              </S.ItemBox>
            ))}
          </S.ListWrapper>
        ) : null}
      </S.ContentArea>
    </S.AdminWrapper>
  );
}

export default Admin;
