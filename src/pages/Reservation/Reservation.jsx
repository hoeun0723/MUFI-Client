import * as S from './Reservation.style';
import React, { useState, useEffect } from 'react';
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";

function Reservation() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [daysInMonth, setDaysInMonth] = useState(31);

  const [formData, setFormData] = useState({
    name: '',
    event: '',
    phone1: '',
    phone2: '',
    phone3: '',
    address: '',
    detailAddress: '',
    booths: '',
    fileName: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  useEffect(() => {
    const days = new Date(selectedYear, selectedMonth, 0).getDate();
    setDaysInMonth(days);
  }, [selectedYear, selectedMonth]);

  return (
    <S.ReservationWrapper>
      <S.ReservContainerTop>
        <S.SharedCalendar />
        <S.TopHalf>
          <S.InfoMessage>견적은 행사 위치 및 이동 거리에 따라 달라질 수 있습니다.</S.InfoMessage>
          <S.QuickInquire>
            빠른 문의
            <S.QuickInquireIcons>
              <RiKakaoTalkFill />
              <MdOutlineEmail />
            </S.QuickInquireIcons>
          </S.QuickInquire>
          <S.SelectDate>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {Array.from({ length: 7 }, (_, i) => 2024 + i).map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(Number(e.target.value))}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {month}월
                </option>
              ))}
            </select>
            <select>
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}일
                </option>
              ))}
            </select>
          </S.SelectDate>
          <S.InfoMessageDate>좌측 캘린더에 표시된 날짜는 선택 불가합니다.</S.InfoMessageDate>
        </S.TopHalf>
      </S.ReservContainerTop>
      <S.ReservContainerMiddle>
        <S.FormContainer>
          예약 정보 입력
          <S.ReservationForm>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              maxLength="10"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <input
              type="text"
              placeholder="행사명을 입력해주세요."
              maxLength="10"
              value={formData.event}
              onChange={(e) => handleInputChange('event', e.target.value)}
            />
            <S.PhoneNumber>
              <input
                type="text"
                placeholder="010"
                maxLength="3"
                value={formData.phone1}
                onChange={(e) => handleInputChange('phone1', e.target.value.replace(/\D/g, ''))}
              />
              <BsDashLg />
              <input
                type="text"
                placeholder="1234"
                maxLength="4"
                value={formData.phone2}
                onChange={(e) => handleInputChange('phone2', e.target.value.replace(/\D/g, ''))}
              />
              <BsDashLg />
              <input
                type="text"
                placeholder="5678"
                maxLength="4"
                value={formData.phone3}
                onChange={(e) => handleInputChange('phone3', e.target.value.replace(/\D/g, ''))}
              />
            </S.PhoneNumber>
            <input
              type="text"
              placeholder="행사 주소"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
            <input
              type="text"
              placeholder="상세 주소"
              value={formData.detailAddress}
              onChange={(e) => handleInputChange('detailAddress', e.target.value)}
            />
            <input
              type="number"
              placeholder="필요한 포토부스 개수를 입력해주세요."
              min="1"
              max="100"
              value={formData.booths}
              onChange={(e) => handleInputChange('booths', e.target.value)}
            />
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  handleInputChange('fileName', file.name);
                }
              }}
            />
          </S.ReservationForm>
        </S.FormContainer>
        <S.CheckContainer>
          <strong>예약 정보 확인</strong>
          <S.DetailCheck>
            <strong>{formData.name || '이름'}</strong>
            <br />
            <strong>{formData.event || '행사명'}</strong>
            <br />
            <strong>
              {formData.phone1 && formData.phone2 && formData.phone3
                ? `${formData.phone1}-${formData.phone2}-${formData.phone3}`
                : '전화번호'}
            </strong>
            <br />
            <strong>{formData.address || '행사 주소'}</strong>
            <br />
            <strong>{formData.detailAddress || '상세 주소'}</strong>
            <br />
            포토부스 개수: <strong>{formData.booths || '0'}</strong>
          </S.DetailCheck>
          <S.DistanceCheck>
            <S.DistanceContainer>
              <S.StyledDeliveryTruck />
              <S.StyledUserIcon />
            </S.DistanceContainer>
            <S.StyledLine />
            약 4.4km
          </S.DistanceCheck>
          <S.EstimateCheck>
            <S.EstimateText>
              예상 금액:
            </S.EstimateText>
            <S.EstimateAmount>
              ₩ 999,999 
            </S.EstimateAmount>
          </S.EstimateCheck>
          <S.EstimateInfo>표시되는 예상 금액은 실제 견적과 다를 수 있습니다.</S.EstimateInfo>
          <S.InquiryButton />
        </S.CheckContainer>
      </S.ReservContainerMiddle>
      <S.ReservContainerBottom>
        <S.TermsTitle>개인정보 수집 및 이용 동의</S.TermsTitle>
        <S.TermsAndCond>
          개인정보 수집 및 이용 동의 내용
        </S.TermsAndCond>
        <S.TermsTitle>개인정보 제3자 제공 동의</S.TermsTitle>
        <S.TermsAndCond>
          개인정보 제3자 제공 동의 내용
        </S.TermsAndCond>
      </S.ReservContainerBottom>
    </S.ReservationWrapper>
  );
}

export default Reservation;