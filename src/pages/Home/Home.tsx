import { Messages } from '../../components';

// styles
import style from './home.module.css';

const Home = () => {
  return (
    <div className={style.container__home}>
      <Messages
        text={
          'Hola, mi nombre es Juan, soy desarrollador web, y me encantaría presentarte mi portafolio virtual, espero sea de tu agrado. \n' +
          'Puedes navegar por las diferentes secciones usando el menú de navegación.'
        }
        delay={45}
        play={true}
      />
    </div>
  );
};

export default Home;
