import { useState, useEffect } from "react";

function useTypewriterEffect(text: string, loading: boolean, delay = 100) {
  const [displayText, setDisplayText] = useState(text);
  const [Loading, setLoading] = useState(loading);
  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, delay);
      }
    };
    setTimeout(typeWriter, delay);
    return () => setDisplayText("");
  }, [text, delay]);
  setInterval(() => {
    //terminar esto para mañana
    setLoading(false);
  }, 8000);
  return [displayText, Loading];
}

export default useTypewriterEffect;
