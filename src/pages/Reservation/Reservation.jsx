import * as S from './Reservation.style';
import React, { useState, useEffect } from 'react';
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";
import usePostReservForm from '../../hooks/queries/usePostReservForm';
import CalendarComponent from '../../components/GoogleCalendar/GoogleCalendar';

function Reservation() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // 월은 0부터 시작하므로 +1
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
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

  const [errors, setErrors] = useState({});
  const [distance, setDistance] = useState('약 0.0km');
  const [price, setPrice] = useState('₩ 500,000');
  const postReservFormMutation = usePostReservForm();

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' }); // 입력 변경 시 에러 메시지 초기화

    if (field === 'address') {
      updateDistanceAndPrice(value);
    }
  };

  const updateDistanceAndPrice = (address) => {
    const regions = [
      { regex: /서울/, distance: '약 107km', price: '₩ 700,000' },
      { regex: /경기도/, distance: '약 71.7km', price: '₩ 600,000' },
      { regex: /강원도/, distance: '약 125km', price: '₩ 700,000' },
      { regex: /충청북도/, distance: '약 0.0km', price: '₩ 500,000' },
      { regex: /충청남도/, distance: '약 91.6km', price: '₩ 600,000' },
      { regex: /전라북도/, distance: '약 129km', price: '₩ 700,000' },
      { regex: /전라남도/, distance: '약 230km', price: '₩ 900,000' },
      { regex: /경상북도/, distance: '약 121km', price: '₩ 700,000' },
      { regex: /경상남도/, distance: '약 163km', price: '₩ 800,000' },
      { regex: /제주도/, distance: '약 395km', price: '₩ 1,000,000' },
    ];
  
    const match = regions.find((region) => region.regex.test(address));
    if (match) {
      setDistance(match.distance);
      setPrice(match.price);
    } else {
      setDistance('약 0.0km');
      setPrice('₩ 500,000');
    }
  };

  useEffect(() => {
    const days = new Date(selectedYear, selectedMonth, 0).getDate();
    setDaysInMonth(days);
  }, [selectedYear, selectedMonth]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "* 이름은 필수 항목입니다.";
    if (!formData.event.trim()) newErrors.event = "* 행사명은 필수 항목입니다.";
    if (!formData.phone1.trim() || !formData.phone2.trim() || !formData.phone3.trim()) {
      newErrors.phone = "* 전화번호는 필수 항목입니다.";
    }
    if (!formData.address.trim()) newErrors.address = "* 행사 기본 주소는 필수 항목입니다.";
    if (!formData.booths) newErrors.booths = "* 포토부스 개수를 반드시 선택해 주세요.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

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
        <S.SharedCalendar><CalendarComponent/></S.SharedCalendar>
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
                onClick={() => navigator.clipboard.writeText("ghtnakdmf123@gmail.com").then(() => alert("MUFI 이메일 주소를 복사했습니다."))}
                style={{ cursor: 'pointer' }}
              />
            </S.QuickInquireIcons>
          </S.QuickInquire>
          <S.SelectDate>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {Array.from({ length: 7 }, (_, i) => new Date().getFullYear() + i).map((year) => (
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
            {errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}
            <input
              type="text"
              placeholder="행사명을 입력해주세요."
              maxLength="15"
              value={formData.event}
              onChange={(e) => handleInputChange('event', e.target.value)}
            />
            {errors.event && <S.ErrorMessage>{errors.event}</S.ErrorMessage>}
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
            {errors.phone && <S.ErrorMessage>{errors.phone}</S.ErrorMessage>}
            <input
              type="text"
              placeholder="행사 주소"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
            {errors.address && <S.ErrorMessage>{errors.address}</S.ErrorMessage>}
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
            {errors.booths && <S.ErrorMessage>{errors.booths}</S.ErrorMessage>}
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
