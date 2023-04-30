import logo from '../../assets/images/Logo.svg';
import style from './logo.module.css';
const Logo = () => {
  return (
    <div className={style.logo}>
      <img width={120} src={logo} alt="" />;
    </div>
  );
};

export default Logo;
