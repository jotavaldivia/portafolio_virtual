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
      mensaje.rate = 1.2;
      mensaje.pitch = 1;
      mensaje.lang = 'es-ES';
      mensaje.text = parte; // Establecer el texto que se va a leer en el mensaje
      // Obtener la lista de voces disponibles en el navegador
      const voices = window.speechSynthesis.getVoices();

      // Encontrar una voz masculina en español neutro
      const voice = voices?.find(function (voice) {
        return (
          voice.lang === 'es-ES' &&
          voice.name === 'Microsoft David Desktop - Spanish (Spain)'
        );
      });

      // Configurar la voz del mensaje
      if (voice) {
        mensaje.voice = voice;
      } else {
        console.error('No se encontró una voz masculina en español neutro');
      }
      window.speechSynthesis.speak(mensaje); // Leer el mensaje en voz alta utilizando el método speak de la API de Speech Synthesis
    });
  };

  return { toggleMute, isMuted };
};

export default useReadtext;
