import { useEffect, useState } from 'react';

const useReadtext = (text: string) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const toggleMute = (): void => {
    setIsMuted(!isMuted);
  };
  useEffect(() => {
    window.speechSynthesis.speaking && window.speechSynthesis.cancel();
    speak(text);
  }, [text]);
  useEffect(() => {
    console.log('isMuted', isMuted);
    if (!isMuted) {
      window.speechSynthesis.pause();
      return;
    }
    window.speechSynthesis.resume();
    console.log('ahora puedo hablar');
  }, [isMuted]);

  const speak = (text: string) => {
    // Dividir el texto en partes más pequeñas hasta donde exista una coma
    const partesDeTexto = text
      .split(',')
      .map(function (parte, indice, arreglo) {
        if (indice < arreglo.length - 1) {
          return parte + ',';
        }
        return parte;
      });
    partesDeTexto.forEach(function (parte) {
      // Crear un objeto SpeechSynthesisUtterance para representar cada parte del texto
      const mensaje = new SpeechSynthesisUtterance();
      mensaje.rate = 1.21;
      mensaje.text = parte; // Establecer el texto que se va a leer en el mensaje
      window.speechSynthesis.speak(mensaje); // Leer el mensaje en voz alta utilizando el método speak de la API de Speech Synthesis
    });
  };

  return { toggleMute, isMuted };
};

export default useReadtext;
