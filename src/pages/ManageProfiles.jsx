import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* тут мы создаем профиля нявчиков */
export default function ManageProfiles() {
    const [myProfiles, setMyProfiles] = useState([]);

    useEffect(() => {
        // тянем из локалсторедж
        setMyProfiles(JSON.parse(localStorage.getItem('userProfiles') || '[]'));
    }, []);

    const handleDelete = (index) => {
        // удаляем профиль по индексу
        const updated = myProfiles.filter((_, i) => i !== index);
        setMyProfiles(updated);
        localStorage.setItem('userProfiles', JSON.stringify(updated));
    };

    return (
        <div style={{ width: '100%' }}>
            {/* Навигация назад на главную страницу */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Мої створені анкети</h2>
                <Link to="/" className="btn" style={{fontSize: '1rem', padding: '10px'}}>На головну</Link>
            </div>

            <div className="grid-container">
                {/* Если нет профилей, показываем сообщение */}
                {myProfiles.length === 0 ? <p>Ви ще не створили жодного кота.</p> : myProfiles.map((cat, idx) => (
                    <div key={idx} className="grid-item">
                        <img src={cat.image} alt={cat.name} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px'}} />
                        <h3 style={{color: '#d63384', marginTop: '10px'}}>{cat.name}</h3>
                        <button 
                            onClick={() => handleDelete(idx)} 
                            className="btn btn-danger"
                            style={{marginTop: '10px', fontSize: '0.9rem', minWidth: 'auto', padding: '8px 15px'}}
                        >
                            Видалити
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}