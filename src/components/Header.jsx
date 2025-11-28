// тут нужны коменты?
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>KITITINDER 😻</h1>
      </Link>
    </header>
  );
}

