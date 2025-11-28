import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="nav-menu">
      <div className="nav-img">
         {/*  картинки нет в срс? Кинь её в паблик и ссылайся на загрушку фрейм1.ПиЕнДжи */}
        <img src="/Frame 1.png" alt="Cute Cat" style={{ maxWidth: '300px' }} />
      </div>
      <div className="nav-buttons">
        <Link to="/swipe" className="btn">Старт</Link>
        <Link to="/add" className="btn">Додати кота</Link>
        <Link to="/liked" className="btn">Сподобані</Link>
        <Link to="/manage" className="btn">Мої анкети</Link>
      </div>
    </div>
  );
}