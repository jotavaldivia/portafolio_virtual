import style from './messages.module.css';
import { Greeting } from '../../components';

import speaking from '../../assets/images/speaking.gif';
import staticimg from '../../assets/images/static.png';
import useTypewriter from '../../hooks/useTypewriter';

interface Props {
  text: string;
  delay: number;
  play: boolean;
  stylesContainer?: React.CSSProperties;
  stylesParrafo?: React.CSSProperties;
}

const Messages = (prop: Props) => {
  const { text, delay, stylesContainer, stylesParrafo } = prop;
  const [typedText, loading, toggleMute, isMuted] = useTypewriter(text, delay);

  return (
    <div
      className={`${style.container__messages} fade-in`}
      style={stylesContainer}
    >
      <div className={`${style.message__bubble}`}>
        <p className={style.typewriter} style={stylesParrafo}>
          {typedText}
        </p>
      </div>
      {loading ? (
        <Greeting width={300} url={speaking} />
      ) : (
        <Greeting width={300} url={staticimg} />
      )}
      <button onClick={() => toggleMute()} className={style.button__muted}>
        {isMuted ? '🔊' : '🔇'}
      </button>
    </div>
  );
};

export default Messages;
