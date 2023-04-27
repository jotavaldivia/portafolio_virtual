import style from "./messages.module.css";
import { Greeting } from "../../components";

import speaking from "../../assets/images/speaking.gif";
import staticimg from "../../assets/images/static.png";
import useTypewriter from "../../hooks/useTypewriter";

interface Props {
  text: string;
  delay: number;
  play: boolean;
}

const Messages = (prop: Props) => {
  const { text, delay } = prop;
  const [typedText, loading, toggleMute, isMuted] = useTypewriter(text, delay);

  return (
    <div className={style.container__messages}>
      <div className={`${style.message__bubble}`}>
        <p className={style.typewriter}>{typedText}</p>
      </div>
      {loading ? (
        <Greeting width={300} url={speaking} />
      ) : (
        <Greeting width={300} url={staticimg} />
      )}
      <button onClick={() => toggleMute()} className={style.button__muted}>
        {isMuted ? "Desmutear" : "Silenciar"}
      </button>
    </div>
  );
};

export default Messages;
