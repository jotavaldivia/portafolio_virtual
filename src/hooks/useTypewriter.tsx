import { useState, useEffect } from "react";
type UseTypewriterReturn = [string, boolean, () => void, boolean];

const useTypewriter = (text: string, delay: number): UseTypewriterReturn => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Definir una función llamada "speak" que recibe un texto como parámetro
  const speak = (text: string) => {
    // Dividir el texto en partes más pequeñas hasta donde exista una coma
    const partesDeTexto = text
      .split(",")
      .map(function (parte, indice, arreglo) {
        if (indice < arreglo.length - 1) {
          return parte + ",";
        }
        return parte;
      });
    // Leer cada parte del texto en voz alta
    partesDeTexto.forEach(function (parte) {
      // Crear un objeto SpeechSynthesisUtterance para representar cada parte del texto
      const mensaje = new SpeechSynthesisUtterance();
      mensaje.text = parte; // Establecer el texto que se va a leer en el mensaje
      window.speechSynthesis.speak(mensaje); // Leer el mensaje en voz alta utilizando el método speak de la API de Speech Synthesis
    });
  };
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    window.speechSynthesis.cancel();
    speak(text);
  }, [text]);
  useEffect(() => {
    console.log("isMuted", isMuted);
    if (!isMuted) {
      window.speechSynthesis.pause();
      return;
    }

    window.speechSynthesis.resume();
    console.log("ahora puedo hablar");
  }, [isMuted]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypedText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === text.length) {
        setLoading(false);
      }
    }, delay);
    return () => clearTimeout(timer) as void;
  }, [currentIndex, delay, text]);

  return [typedText, loading, toggleMute, isMuted];
};

export default useTypewriter;
