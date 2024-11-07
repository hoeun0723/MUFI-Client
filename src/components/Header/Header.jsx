import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';

function Header() {
    const navigate = useNavigate();
    const navItems = [
        { label: '기업소개', path: '/introduce' },
        { label: '갤러리', path: '/gallery' },
        { label: '견적 문의', path: '/reservation' },
        { label: '내 프레임', path: '/custom-frame' },
        { label: 'QnA', path: '/qna' }
    ];

    return (
        <S.HeaderWrapper>
            {navItems.map((item, index) => (
                <S.NavBtn key={index} onClick={() => navigate(item.path)}>
                    {item.label}
                </S.NavBtn>
            ))}
        </S.HeaderWrapper>
    );
}

export default Header;
