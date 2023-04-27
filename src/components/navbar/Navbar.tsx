import Logo from "../logo/Logo";
import style from "./navbar.module.css";
Logo;
const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
        <div className={style.container__logo}>
          <Logo />
        </div>

        <ul className={style.menu}>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Sobre Mi</a>
          </li>
          <li>
            <a href="">CV</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
