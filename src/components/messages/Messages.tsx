import style from "./Messages.module.css";
import useTypewriterEffect from "../../hooks/useTypewriterEffect";
import { Greeting } from "../../components";

import speaking from "../../assets/images/speaking.gif";
import staticimg from "../../assets/images/static.jpg";
interface Props {
  text: string;
  loading: boolean;
  delay?: number;
}
const Messages = (prop: Props) => {
  console.log(prop);
  const { text, loading, delay = 100 } = prop;
  const [setText, Loading] = useTypewriterEffect(text, loading, delay);
  console.log(Loading);
  return (
    <div className={`${style.message__bubble}`}>
      <p>{setText}</p>
      {Loading ? <Greeting url={speaking} /> : <Greeting url={staticimg} />}
    </div>
  );
};

export default Messages;
