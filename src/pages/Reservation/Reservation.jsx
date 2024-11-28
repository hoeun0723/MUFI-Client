import * as S from './Reservation.style';
import React, { useState, useEffect } from 'react';
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";
import usePostReservForm from '../../hooks/queries/usePostReservForm';

function Reservation() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
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

  const [distance, setDistance] = useState('약 0.0km');
  const [price, setPrice] = useState('₩ 500,000');

  const postReservFormMutation = usePostReservForm();

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    if (field === 'address') {
      updateDistanceAndPrice(value);
    }
  };

  const updateDistanceAndPrice = (address) => {
    if (address.includes('서울')) {
      setDistance('약 107km');
      setPrice('₩ 700,000');
    } else if (address.includes('경기도')) {
      setDistance('약 71.7km');
      setPrice('₩ 600,000');
    } else if (address.includes('강원도')) {
      setDistance('약 125km');
      setPrice('₩ 700,000');
    } else if (address.includes('충청북도')) {
      setDistance('약 0.0km');
      setPrice('₩ 500,000');
    } else if (address.includes('충청남도')) {
      setDistance('약 91.6km');
      setPrice('₩ 600,000');
    } else if (address.includes('전라북도')) {
      setDistance('약 129km');
      setPrice('₩ 700,000');
    } else if (address.includes('전라남도')) {
      setDistance('약 230km');
      setPrice('₩ 900,000');
    } else if (address.includes('경상북도')) {
      setDistance('약 121km');
      setPrice('₩ 700,000');
    } else if (address.includes('경상남도')) {
      setDistance('약 163km');
      setPrice('₩ 800,000');
    } else if (address.includes('제주도')) {
      setDistance('약 395km');
      setPrice('₩ 1,000,000');
    } else {
      setDistance('약 0.0km');
      setPrice('₩ 500,000');
    }
  };

  useEffect(() => {
    const days = new Date(selectedYear, selectedMonth, 0).getDate();
    setDaysInMonth(days);
  }, [selectedYear, selectedMonth]);

  const handleEmailClick = () => {
    const email = "ghtnakdmf123@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("MUFI 이메일 주소를 복사했습니다.");
    });
  };

  const handleSubmit = () => {
    const formattedDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
    const requestBody = {
      Date: formattedDate,
      userName: formData.name,
      fesName: formData.event,
      phone: Number(`${formData.phone1}${formData.phone2}${formData.phone3}`),
      address: formData.address,
      addtionalAddress: formData.detailAddress,
      photobooth: Number(formData.booths),
    };

    postReservFormMutation.mutate(requestBody, {
      onSuccess: () => {
        alert("문의해주셔서 감사합니다. 자세한 견적 메세지가 카카오톡 ‘무피'에서 전송될 예정입니다.");
      },
      onError: () => {
        alert('요청 처리 중 문제가 발생했습니다. 다시 시도해주세요.');
      },
    });
  };

  return (
    <S.ReservationWrapper>
      <S.ReservContainerTop>
        <S.SharedCalendar />
        <S.TopHalf>
          <S.InfoMessage>견적은 행사 위치 및 이동 거리에 따라 달라질 수 있습니다.</S.InfoMessage>
          <S.QuickInquire>
            빠른 문의
            <S.QuickInquireIcons>
              <RiKakaoTalkFill
                onClick={() => window.open('https://url.kr/5bi34w', '_blank')}
                style={{ cursor: 'pointer' }}
              />
              <MdOutlineEmail
                onClick={handleEmailClick}
                style={{ cursor: 'pointer' }}
              />
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
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(Number(e.target.value))}
            >
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
              maxLength="15"
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
              onChange={(e) => {
                const value = Math.min(Number(e.target.value), 100); 
                handleInputChange('booths', value >= 1 ? value : ''); 
              }}
            />
            <label className="custom-file-upload">
              {formData.fileName || '프레임 PDF 파일이 있다면 업로드해주세요.'}
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
            </label>
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
            {distance}
          </S.DistanceCheck>
          <S.EstimateCheck>
            <S.EstimateText>
              예상 금액:
            </S.EstimateText>
            <S.EstimateAmount>
              {price}
            </S.EstimateAmount>
          </S.EstimateCheck>
          <S.EstimateInfo>표시되는 예상 금액은 실제 견적과 다를 수 있습니다.</S.EstimateInfo>
        </S.CheckContainer>
      </S.ReservContainerMiddle>
      <S.InquiryButton onClick={handleSubmit} />
    </S.ReservationWrapper>
  );
}

export default Reservation;
