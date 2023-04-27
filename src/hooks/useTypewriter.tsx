import { useState, useEffect } from "react";
type UseTypewriterReturn = [string, boolean, () => void, boolean];

const useTypewriter = (text: string, delay: number): UseTypewriterReturn => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance) as void;
    console.log(window.speechSynthesis);
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
