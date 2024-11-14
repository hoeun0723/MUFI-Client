import * as S from './QnA.style';
import React, { useState } from 'react';


function QnA () {
    const [activeTab, setActiveTab] = useState("FAQ"); //usestate 이용
    const [isWriting, setIsWriting] = useState(false); //작성모드상태 추가

    // FAQ와 Q&A의 질문 목록
    const faqQuestions = [
        "인화사이즈는 어떻게 되나요?",
        "촬영부스 인원 제한이 있나요?",
        "부스는 최대 몇 개까지 대여 가능한가요?",
        "예약을 취소하거나 변경하고 싶습니다."
    ];

    const qnaQuestions = [
        { question: "인화사이즈는 어떻게 되나요?", answered: false },
        { question: "촬영부스 인원 제한이 있나요?", answered: true },
        { question: "부스는 최대 몇 개까지 대여 가능한가요?", answered: true }
    ];

    const handleWriteButtonClick = () => {
        setIsWriting(true); // 작성 모드로 전환
        setActiveTab("Q&A"); //작성 모드를 활성화하면 q&a 탭이 진하게 보이도록 설정
    };

    const handleSave = () => {
        // 저장 버튼을 눌렀을 때 수행할 동작
        setIsWriting(false); // 작성 모드를 종료
    };

    // 각 질문 버튼을 클릭할 때 호출되는 함수
    const handleQuestionClick = (question) => {
        console.log("Selected question:", question);
        // 이곳에 상세 페이지 이동 또는 팝업 표시 등의 동작을 추가할 수 있습니다.
    };
    
    return (
        <S.QnAWrapper>
            <S.TitleGroup>
                {/*QnA와 FAQ 타이틀 그룹 */}
                <S.SectionTitle
                    active={activeTab === "FAQ"}
                    onClick={() => setActiveTab("FAQ")}
                >
                FAQ
                </S.SectionTitle>
                <S.Divider />
                <S.SectionTitle
                    active={activeTab === "Q&A"}
                    onClick={() => setActiveTab("Q&A")}
                >
                Q&A
                </S.SectionTitle>
            </S.TitleGroup>

            {/* Q&A 탭이고 작성 모드가 아닐 때만 작성하기 버튼 표시 */}
            {activeTab === "Q&A" && !isWriting && (
                <S.WriteButton onClick={handleWriteButtonClick}>
                    <S.PencilIcon />
                    질문 등록
                </S.WriteButton>
            )}

            {/* 질문 박스 그룹 */}
            <S.QuestionGroup>
            {isWriting ? (
                    // 작성 모드일 때 입력 폼을 렌더링
                    <>
                        <S.Input placeholder="제목을 입력하세요." />
                        <S.TextArea placeholder="내용을 입력하세요." />
                        <S.SaveButton onClick={handleSave}>등록</S.SaveButton>
                    </>
                ) : (
                    activeTab === "FAQ"
                    ? faqQuestions.map((question, index) => (
                        <S.QuestionBox key={index} activeTab={activeTab}>
                                {question}
                            </S.QuestionBox>
                        ))
                        : qnaQuestions.map((item, index) => (
                            <S.QuestionContainer key={index}> {/* 수정된 부분: Q&A에서도 QuestionContainer 사용 */}
                                <S.QuestionBox onClick={() => handleQuestionClick(item.question)}>
                                    {item.question}
                                </S.QuestionBox>
                                <S.AnswerStatus >
                                    <S.StatusIcon answered={item.answered} />
                                    {item.answered ? "답변 완료" : "답변 대기"}
                                </S.AnswerStatus>
                            </S.QuestionContainer>
                    ))
                )}
            </S.QuestionGroup>

            
            {/* Q&A 탭일 때만 페이지네이션을 표시 */}
            {activeTab === "Q&A" && (
                <S.PaginationWrapper>
                    <S.PageDot />
                    <S.PageDot />
                </S.PaginationWrapper>
            )}

        </S.QnAWrapper>
    )
}

export default QnA;



