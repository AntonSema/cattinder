import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* профиля варит, если в двух словах */
export default function AddProfile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        description: '',
        image: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const existing = JSON.parse(localStorage.getItem('userProfiles') || '[]');
        localStorage.setItem('userProfiles', JSON.stringify([...existing, formData]));
        
        alert('Кота додано!');
        navigate('/');
    };

    return (
        <div className="form-container">
            <h2 style={{ textAlign: 'center', color: '#d63384' }}>Додати нового кота</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input 
                    placeholder="Ім'я кота" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                    placeholder="Вік (напр. 2 роки)" 
                    required
                    value={formData.age}
                    onChange={e => setFormData({...formData, age: e.target.value})}
                />
                <textarea 
                    placeholder="Опис" 
                    required
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                />
                <input 
                    placeholder="URL зображення" 
                    required
                    value={formData.image}
                    onChange={e => setFormData({...formData, image: e.target.value})}
                />
                <button type="submit" className="btn" style={{background: '#d63384', color: 'white', width: '100%'}}>
                    Створити анкету
                </button>
            </form>
            <button onClick={() => navigate('/')} className="btn" style={{width: '100%'}}>На головну</button>
        </div>
    );
}