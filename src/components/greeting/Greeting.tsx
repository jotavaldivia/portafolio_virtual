import style from "./Greeting.module.css";
import speaking from "../../assets/images/speaking.gif";

// }
const Greeting = () => {
  return (
    <div className={style.saludo}>
      <img width={1200} src={speaking} alt="" />
    </div>
  );
};

export default Greeting;
