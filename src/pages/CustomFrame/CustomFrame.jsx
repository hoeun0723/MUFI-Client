import * as S from './CustomFrame.style';
import AvatarImage from '../../assets/svg/image3.svg';
import React, { useState, useRef } from 'react';  //컬러 버튼을 누르기 위한 기능
import Draggable from 'react-draggable'; //아바타 드래그 이동
import UploadIcon from '../../assets/svg/FaFileUpload.svg';
import DownloadIcon from '../../assets/svg/FaDownload.svg';
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

function CustomFrame () {
    const [avatars, setAvatars] = useState([]); // 프레임에 추가된 아바타들
    // 상태 추가: 선택된 색상
    const [frameColor, setFrameColor] = useState('#ffffff'); // 초기값은 흰색
    const frameRef = useRef(null); // 캡처 대상
    const fileInputRef = useRef(null); // 파일 업로드 인풋 참조

    // 아바타 클릭 시 추가
    const handleAvatarClick = (src, x, y) => {
        setAvatars((prev) => {
            const newAvatar = { id: Date.now(), src, x, y };
            console.log('Adding new avatar:', newAvatar);
            return [...prev, newAvatar];
        });
    };
    // 드래그 종료 시 위치 업데이트
    const handleStop = (id, data) => {
        console.log('Drag stopped for:', id, data);
        setAvatars((prev) =>
            prev.map((avatar) =>
                avatar.id === id ? { ...avatar, x: data.x, y: data.y } : avatar
            )
        );
    };

    // 색상 변경 핸들러
    const handleColorChange = (color) => {
        setFrameColor(color);
    };

    // 사용자 이미지 업로드 핸들러
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                handleAvatarClick(e.target.result, 0, 0); // 업로드한 이미지 추가
            };
            reader.readAsDataURL(file); // 이미지 미리보기
        }
    };

    //프레임 캡처 및 다운로드
    const handleDownload = async () => {
        if (!frameRef.current) return;
    
        try {
          const canvas = await html2canvas(frameRef.current, { scale: 2 });
          canvas.toBlob((blob) => {
            if (blob !== null) {
              saveAs(blob, "custom-frame.png");
            }
          });
        } catch (error) {
          console.error("Error converting frame to image:", error);
        }
      };

    return (
        <S.CustomFrameWrapper>
            <S.Background>무.피.내.프.</S.Background>
            <S.Description>
                [무피내프]는 다양한 조합으로 나만의 프레임을
                <br />
                직접 디자인해볼 수 있는 서비스입니다.
                <br />
                디자인을 완성하면, PDF로 다운받아 예약시 활용해보세요!
            </S.Description>
            <S.CallToAction>
                무피냥이와 함께 나만의 프레임을 만들어봐요!
            </S.CallToAction>

            <S.FrameEditorWrapper>
                {/* 왼쪽 섹션 */}
                <S.AvatarSection>
                    <S.AvatarLabel>무피냥이 아바타</S.AvatarLabel>
                    <S.AvatarImage
                        src={AvatarImage}
                        alt="image3"
                        onClick={() => handleAvatarClick(AvatarImage, 0, -300)}
                    />
                    <S.AvatarImage
                        src={AvatarImage}
                        alt="image3"
                        onClick={() => handleAvatarClick(AvatarImage, 0, -100)}
                    />
                    <S.AvatarImage
                        src={AvatarImage}
                        alt="image3"
                        onClick={() => handleAvatarClick(AvatarImage, 0, 100)}
                    />
                </S.AvatarSection>

                {/* 가운데 섹션 */}
                <S.PreviewSection ref={frameRef} bgColor={frameColor}>
                  {avatars.map((avatar) => (
                    <Draggable
                        key={avatar.id}
                        defaultPosition={{ x: avatar.x, y: avatar.y}}
                        onStop={(e, data) => handleStop(avatar.id, data)}
                    >
                        <S.DraggableAvatar src={avatar.src} alt="draggable-avatar" />
                    </Draggable>
                  ))}
                  <S.FrameLayer />
                  <S.FrameLayer />
                  <S.FrameLayer />
                  <S.FrameLayer />
                </S.PreviewSection>

                {/* 오른쪽 섹션 */}
                <S.ColorSection>
                    <S.ThemeLabel>프레임 색상</S.ThemeLabel>
                    <S.FrameColorGroup>
                        <S.ColorOption color="#49BEBA" onClick={() => handleColorChange('#49BEBA')} />
                        <S.ColorOption color="blue" onClick={() => handleColorChange('blue')} />
                        <S.ColorOption color="yellow" onClick={() => handleColorChange('yellow')} />
                        <S.ColorOption color="green" onClick={() => handleColorChange('green')} />
                        <S.ColorOption color="pink" onClick={() => handleColorChange('pink')} />
                        <S.ColorOption color="purple" onClick={() => handleColorChange('purple')} />
                        <S.ColorOption color="orange" onClick={() => handleColorChange('orange')} />
                        <S.ColorOption color="gray" onClick={() => handleColorChange('gray')} />
                    </S.FrameColorGroup>
                    <S.ThemeLabel>프레임 테마</S.ThemeLabel>
                    <S.FrameThemeGroup>
                        <S.ColorOption color="white" onClick={() => handleColorChange('white')} />
                        <S.ColorOption color="black" onClick={() => handleColorChange('black')} />
                        <S.ColorOption color="lightgray" onClick={() => handleColorChange('lightgray')} />
                        <S.ColorOption color="darkgray" onClick={() => handleColorChange('darkgray')} />
                    </S.FrameThemeGroup>
                </S.ColorSection>
            </S.FrameEditorWrapper>
            <S.ButtonGroup>
                <S.ButtonWrapper>
                  {/* 업로드 버튼을 이미지로 변경 */}
                  <S.ButtonIcon
                        as="img"
                        src={UploadIcon}
                        alt="Upload Avatar"
                        onClick={() => fileInputRef.current.click()}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </S.ButtonWrapper>

                <S.ButtonWrapper>
                  <S.ButtonIcon src={DownloadIcon}alt="FaDownload" />
                  <S.Button onClick={handleDownload}>완성! PDF 다운로드</S.Button>
                </S.ButtonWrapper>
            </S.ButtonGroup>
        </S.CustomFrameWrapper>
    )
}
export default CustomFrame;