import style from "./Greeting.module.css";
interface Props {
  url: string;
}
// }
const Greeting = ({ url }: Props) => {
  return (
    <div className={style.saludo}>
      <img width={1200} src={url} alt="" />
    </div>
  );
};

export default Greeting;
