import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_PROFILES = [
    {
        name: "Мурчик",
        age: "2 роки",
        description: "Ласкавий та грайливий кіт, обожнює гратися з м'ячиком",
        image: "https://placekitten.com/400/400"
    },
    {
        name: "Барсик", 
        age: "3 роки",
        description: "Спокійний та розсудливий, любить спати на сонечку",
        image: "https://placekitten.com/401/401"
    },
    {
        name: "Сніжинка",
        age: "1 рік",
        description: "Енергійна та цікава, завжди готова до пригод",
        image: "https://placekitten.com/402/402"
    }
];

export default function Swipe() {
    const [profiles, setProfiles] = useState([]); // Анкетки
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastDirection, setLastDirection] = useState(null); // Анимашка свайпа

    useEffect(() => {
        // Подтягиваем профили из localStorage
        const userProfiles = JSON.parse(localStorage.getItem('userProfiles') || '[]');
        setProfiles([...DEFAULT_PROFILES, ...userProfiles]);
    }, []);

    const handleSwipe = (direction) => {
        setLastDirection(direction);
        //сохраняем понравившийся профиль при свайпе вправо
        if (direction === 'right') {
            const currentProfile = profiles[currentIndex];
            const liked = JSON.parse(localStorage.getItem('likedProfiles') || '[]');
            // Проверка на дубль
            if (!liked.some(p => p.name === currentProfile.name)) {
                liked.push(currentProfile);
                localStorage.setItem('likedProfiles', JSON.stringify(liked));
            }
        }

        // чуток задержки(в развитии) для анимации
        setTimeout(() => {
            setLastDirection(null);
            setCurrentIndex(prev => prev + 1);
        }, 300);
    };

    if (profiles.length === 0) return <div>Завантаження...</div>;
    //конец анкет
    if (currentIndex >= profiles.length) {
        return (
            <div style={{ textAlign: 'center', color: 'white' }}>
                <h2>На жаль, коти закінчилися 😿</h2>
                <br/>
                <Link to="/" className="btn">На головну</Link>
            </div>
        );
    }

    const profile = profiles[currentIndex];

    let cardClass = 'profile-card';
    if (lastDirection === 'left') cardClass += ' swipe-left'; 
    if (lastDirection === 'right') cardClass += ' swipe-right';

    return (
        <div className="card-container">
            <div className={cardClass} style={{ zIndex: 10 }}>
                <img src={profile.image} alt={profile.name} className="profile-image" />
                <h2 style={{ color: '#d63384' }}>{profile.name}, {profile.age}</h2>
                <p style={{ marginTop: '10px', fontSize: '1.1em', color: '#555' }}>
                    {profile.description}
                </p>
                {/* Кнопочки лайк и дизлайк */}
                <div className="card-actions">
                    <button className="btn-circle btn-dislike" onClick={() => handleSwipe('left')}>👎</button>
                    <button className="btn-circle btn-like" onClick={() => handleSwipe('right')}>❤️</button>
                </div>
            </div>
            
            {/* Картину снизу накидываем для красоты как у вас */}
            {currentIndex + 1 < profiles.length && (
                <div className="profile-card" style={{ 
                    zIndex: 5, 
                    transform: 'scale(0.95) translateY(10px)', 
                    opacity: 0.5 
                }}>
                    <img src={profiles[currentIndex + 1].image} className="profile-image" style={{height: '100%'}} />
                </div>
            )}
            
            <div style={{ marginTop: '650px', textAlign: 'center' }}>
                <Link to="/" className="btn">Стоп</Link>
            </div>
        </div>
    );
}