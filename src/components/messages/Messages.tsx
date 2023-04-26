import style from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={`${style.message__bubble}`}>
      <p className={style.texto}>
        "Nor again is there anyone who loves or pursues or desires to obtain
        pain of itself, because it is pain, but occasionally circumstances occur
        in which toil and pain can procure him some great pleasure". Pasando a
        la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de
        tipografía Letraset, que lo utilizó en sus campañas publicitarias.
        Letraset ofrecía páginas de Lorem Ipsum como hojas de transferencia, que
        fueron ampliamente utilizadas en la era anterior a los ordenadores para
        los diseños. Estas páginas de transferencia, conocidas como Letraset
        Body Type, se incluyeron en la publicidad de la compañía y en su popular
        catálogo. El Lorem Ipsum fue reintroducido en la década de 1980 por
        Aldus Corporation, una empresa que desarrolló Software de Publicación de
        Escritorio. Su producto más conocido PageMaker viene con gráficos y
        plantillas de procesamiento de textos previamente instaladas que
        contienen una versión del lenguaje latín falso.
      </p>
    </div>
  );
};

export default Messages;
