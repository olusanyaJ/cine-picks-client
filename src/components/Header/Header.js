import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h1 className="header__title">CinePicks</h1>
      </Link>
    </header>
  );
};

export default Header;
