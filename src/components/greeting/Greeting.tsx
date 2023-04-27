import style from "./Greeting.module.css";
interface Props {
  url: string;
  width: number;
}
// }
const Greeting = ({ url, width }: Props) => {
  return (
    <div className={style.saludo}>
      <img width={width} src={url} alt="" />
    </div>
  );
};

export default Greeting;
