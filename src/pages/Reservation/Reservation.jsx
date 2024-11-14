import * as S from './Reservation.style';
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";


function Reservation () {
    return (
        <S.ReservationWrapper>
          <S.ReservContainerTop>
            <S.SharedCalendar>{/* 캘린더 들어갈 위치 */}</S.SharedCalendar>
            <S.InfoMessage>견적은 행사 위치 및 이동 거리에 따라 달라질 수 있습니다.</S.InfoMessage>
            <S.QuickInquire>
              빠른 문의 
              <S.QuickInquireIcons> {/* 레드 */}
                <RiKakaoTalkFill /> 
                <MdOutlineEmail />
              </S.QuickInquireIcons>
            </S.QuickInquire>
            <S.SelectDate>{/* 날짜 선택 3종세트 */}</S.SelectDate>
            <S.InfoMessageDate>좌측 캘린더에 표시된 날짜는 선택 불가합니다.</S.InfoMessageDate>
          </S.ReservContainerTop>
          <S.ReservContainerMiddle>
            <S.FormContainer>
              예약 정보 입력
              <S.ReservationForm>
                {/* 여기에 폼 */}
                </S.ReservationForm>
            </S.FormContainer>
            <S.CheckContainer>
              예약 정보 확인
              <S.DetailCheck>{/* 예약정보 텍스트 (홍길동 ..) */}</S.DetailCheck>
              <S.DistanceCheck> {/* 레드 */}
                <CiDeliveryTruck />
                <AiOutlineUser />
              </S.DistanceCheck>
              <S.EstimateCheck>{/* 금액확인 */}</S.EstimateCheck>
              <button/> {/* 문 의 버 튼 */}
            </S.CheckContainer>
          </S.ReservContainerMiddle>
          <S.ReservContainerBottom>
            <S.TermsTitle>개인정보 수집 및 이용 동의</S.TermsTitle>
            <S.TermsAndCond>{/* 약관 1 */}</S.TermsAndCond>
            <S.TermsTitle>개인정보 제3자 제공 동의</S.TermsTitle>
            <S.TermsAndCond>{/* 약관 2 */}</S.TermsAndCond>
          </S.ReservContainerBottom>
        </S.ReservationWrapper>
    )
}
export default Reservation;