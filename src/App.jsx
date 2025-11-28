import { Routes, Route } from 'react-router-dom'; // тянем компоненты из react-router-dom
import Home from './pages/Home'; 
import Swipe from './pages/Swipe';
import AddProfile from './pages/AddProfile';
import LikedProfiles from './pages/LikedProfiles';
import ManageProfiles from './pages/ManageProfiles';
import Header from './components/Header';
import Footer from './components/Footer';
// вытягиваем страницы и компоненты
function App() {
  return (
    <div className="app-container"> {/*мейн контейнер приложения*/}
      <Header />
      <main>
        <Routes> {/*обертка для роутов*/}
          <Route path="/" element={<Home />} /> {/* добавляем роуты*/}
          <Route path="/swipe" element={<Swipe />} /> {/* добавляем роуты*/}
          <Route path="/add" element={<AddProfile />} />{/* добавляем роуты*/}
          <Route path="/liked" element={<LikedProfiles />} />
          <Route path="/manage" element={<ManageProfiles />} />{/* не поверите... добавляем роуты*/}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; // экспортируем компонент App