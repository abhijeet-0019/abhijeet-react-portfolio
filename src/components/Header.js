import NavLinks from "./NavLinks";
import react2 from "../images/react2.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={react2} alt="logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
