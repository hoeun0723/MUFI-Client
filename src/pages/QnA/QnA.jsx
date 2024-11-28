import * as S from './QnA.style';
import React, { useState } from 'react';
import usePostQNAForm from '../../hooks/queries/usePostQNAForm';

function QnA() {
    const [activeTab, setActiveTab] = useState("FAQ");
    const [isWriting, setIsWriting] = useState(false);
    const [selectedFaq, setSelectedFaq] = useState(null);
    const [formData, setFormData] = useState({ title: "", content: "" });

    const { mutate: submitQNAForm, isLoading } = usePostQNAForm();

    const faqQuestions = [
        { id: 1, title: "인화사이즈는 어떻게 되나요?", content: "인화사이즈는 A4, A5 사이즈를 지원합니다." },
        { id: 2, title: "촬영부스 인원 제한이 있나요?", content: "촬영부스는 최대 4명까지 가능합니다." },
        { id: 3, title: "부스는 최대 몇 개까지 대여 가능한가요?", content: "최대 3개까지 대여가 가능합니다." },
        { id: 4, title: "예약을 취소하거나 변경하고 싶습니다.", content: "예약 취소 및 변경은 예약일 기준 3일 전까지 가능합니다." },
    ];

    const qnaQuestions = [
        { question: "인화사이즈는 어떻게 되나요?", answered: false },
        { question: "촬영부스 인원 제한이 있나요?", answered: true },
        { question: "부스는 최대 몇 개까지 대여 가능한가요?", answered: true }
    ];

    const handleWriteButtonClick = () => {
        setIsWriting(true);
        setActiveTab("Q&A");
    };

    const handleSave = () => {
        if (formData.title.trim() && formData.content.trim()) {
            submitQNAForm(formData, {
                onSuccess: (data) => {
                    alert("질문이 등록되었습니다. 관리자 답변을 기다려주세요.");
                    console.log('저장 성공:', data);
                    setFormData({ title: "", content: "" }); 
                    setIsWriting(false); 
                },
                onError: (error) => {
                    alert('요청 처리 중 문제가 발생했습니다. 다시 시도해주세요.');
                    console.error('저장 실패:', error.message);
                },
            });
        } else {
            alert("제목과 내용을 모두 입력해주세요.");
        }
    };

    const handleFaqClick = (faq) => {
        setSelectedFaq(faq);
    };

    const handleBackClick = () => {
        setSelectedFaq(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <S.QnAWrapper>
            {selectedFaq ? (
                <>
                    <S.BackButton onClick={handleBackClick}>← BACK</S.BackButton>
                    <S.FaqDetailWrapper>
                        <S.FaqDetailTitle>{selectedFaq.title}</S.FaqDetailTitle>
                        <S.DividerLine />
                        <S.FaqDetailContent>{selectedFaq.content}</S.FaqDetailContent>
                    </S.FaqDetailWrapper>
                </>
            ) : (
                <>
                    <S.TitleGroup>
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

                    {activeTab === "Q&A" && !isWriting && (
                        <S.WriteButton onClick={handleWriteButtonClick}>
                            <S.PencilIcon />
                            질문 등록
                        </S.WriteButton>
                    )}

                    <S.QuestionGroup>
                        {isWriting ? (
                            <>
                                <S.Input
                                    name="title"
                                    placeholder="제목을 입력하세요."
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                                <S.TextArea
                                    name="content"
                                    placeholder="내용을 입력하세요."
                                    value={formData.content}
                                    onChange={handleInputChange}
                                />
                                <S.SaveButton onClick={handleSave} disabled={isLoading}>
                                    {isLoading ? "등록 중..." : "등록"}
                                </S.SaveButton>
                            </>
                        ) : (
                            activeTab === "FAQ"
                                ? faqQuestions.map((faq) => (
                                    <S.QuestionBox key={faq.id} onClick={() => handleFaqClick(faq)}>
                                        {faq.title}
                                    </S.QuestionBox>
                                ))
                                : qnaQuestions.map((item, index) => (
                                    <S.QuestionContainer key={index}>
                                        <S.QuestionBox>
                                            {item.question}
                                        </S.QuestionBox>
                                        <S.AnswerStatus>
                                            <S.StatusIcon answered={item.answered} />
                                            {item.answered ? "답변 완료" : "답변 대기"}
                                        </S.AnswerStatus>
                                    </S.QuestionContainer>
                                ))
                        )}
                    </S.QuestionGroup>

                    {activeTab === "Q&A" && (
                        <S.PaginationWrapper>
                            <S.PageDot />
                            <S.PageDot />
                        </S.PaginationWrapper>
                    )}
                </>
            )}
        </S.QnAWrapper>
    );
}

export default QnA;
