import Logo from "../logo/Logo";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
        <div className={style.container__logo}>
          <Logo />
        </div>

        <ul className={style.menu}>
          <Link to="/">Inicio</Link>
          <Link to="/sobremi">Sobre Mi</Link>
          <Link to="/">CV</Link>
          <Link to="/">Servicios</Link>
          <Link to="/">Contacto</Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
