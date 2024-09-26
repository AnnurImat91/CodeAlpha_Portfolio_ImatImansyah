import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words = [], initialTypingSpeed = 100, deletingSpeed = 50, pauseTime = 800 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(initialTypingSpeed);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (words.length === 0) {
      console.warn('No words provided to TypingEffect');
      return;
    }

    let timer;
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? deletingSpeed : initialTypingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime, initialTypingSpeed]);

  // Efek untuk cursor berkedip
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Kecepatan kedip cursor

    return () => clearInterval(cursorInterval);
  }, []);

  if (words.length === 0) {
    return <span>No words to display</span>;
  }

  return (
    <span className="typing-effect">
      {text}
      <span style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}>|</span>
    </span>
  );
};

export default TypingEffect;