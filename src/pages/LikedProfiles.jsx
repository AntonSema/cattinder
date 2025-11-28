import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LikedProfiles() {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        setLikes(JSON.parse(localStorage.getItem('likedProfiles') || '[]'));
    }, []);

    const clearLikes = () => {
        localStorage.removeItem('likedProfiles');
        setLikes([]);
    };

    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Ваші улюбленці ❤️</h2>
                <div style={{display: 'flex', gap: '10px'}}>
                    <button onClick={clearLikes} className="btn btn-danger" style={{fontSize: '1rem', padding: '10px'}}>Очистити</button>
                    <Link to="/" className="btn" style={{fontSize: '1rem', padding: '10px'}}>На головну</Link>
                </div>
            </div>

            <div className="grid-container">
                {likes.length === 0 ? <p>Поки що нікого немає...</p> : likes.map((cat, idx) => (
                    <div key={idx} className="grid-item">
                        <img src={cat.image} alt={cat.name} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px'}} />
                        <h3 style={{color: '#d63384', marginTop: '10px'}}>{cat.name}</h3>
                        <p>{cat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}