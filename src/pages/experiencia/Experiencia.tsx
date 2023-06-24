import style from './Experience.module.css';
console.log(style);
const Experiencia = () => {
  return (
    <div className={`${style.container__experience} fade-in`}>
      <div className={style.container__aboutus}>
        <h1>Acerca de mi</h1>

        <p>
          Me considero una persona dinámica, trabajadora y con gran voluntad
          para aprender, por eso, considero que podría encajar dentro de
          cualquier empresa. Entre mis habilidades están: buena comunicación y
          pensamiento estratégico, autodidacta, altamente adaptable y con una
          gran motivación en participar en proyectos desafiantes
        </p>
      </div>
      <section className={style.container_eduction}>
        <div className={style.academic}>
          <p className={style.icons}>💼</p>
          <h2>Fromación ademica</h2>
          <p>
            Ingeniero en Informática con más de un año de experiencia enfocado
            al desarrollo web. Poseo conocimientos en distintas tecnologías,
            tales como Html5, Css3, JavaScript, Angular, Vuejs, Nodejs. Además,
            he participado en bootcamps como ayudante y relator, trabajando con
            la metodología ágil Scrum. He tenido un buen desempeño trabajando en
            equipo, apoyando en las distintas labores necesarias para el
            cumplimento de metas.
          </p>
        </div>
        <div className={style.courses}>
          <p className={style.icons}>💻</p>
          <h2>Certificados y Cursos</h2>
          <p>
            Curso fundamentos del desarrollo web - Udemy Curso Scrum Master -
            linkedin learning Curso Nodejs - linkedin learning Curso de Angular
            -linkedin learning Curso JavaScript - CoderHouse Curso Fundamento de
            servidores y redes informáticas - Cisco Netacad Curso sistemas
            operativos - Microfost MTA
          </p>
        </div>
        <div className={style.personal__information}>
          <p className={style.icons}>📒</p>
          <h2>Datos Personales</h2>
          <p>
            Nombre: Juan Valdebenito Lugar de Nacimiento: Hualañé Fecha de
            nacimiento: 25/04/1994
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experiencia;
