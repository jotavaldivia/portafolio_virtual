import Error from '../../assets/images/error404.gif';
import ErrorMobile from '../../assets/images/error404mobile.gif';
import style from './error404.module.css';
const Error404 = () => {
  const imageUrl = window.innerWidth >= 768 ? Error : ErrorMobile;

  return (
    <div className={style.container__error}>
      {}
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default Error404;
