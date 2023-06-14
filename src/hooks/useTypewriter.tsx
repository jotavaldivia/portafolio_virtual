import { useState, useEffect } from 'react';
import useReadtext from './useReadtext';
type UseTypewriterReturn = [string, boolean, () => void, boolean];

const useTypewriter = (text: string, delay: number): UseTypewriterReturn => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { toggleMute, isMuted } = useReadtext(text);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setTypedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timer) as void;
      };
    }
    console.log(delay);
    setLoading(false);
  }, [currentIndex, delay, text]);

  return [typedText, loading, toggleMute, isMuted];
};

export default useTypewriter;
