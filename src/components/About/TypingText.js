import React, { useState, useEffect } from 'react';

export default function TypingText({ text, speed = 100 }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  // Reset if text changes
  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
  }, [text]);

  return <span>{currentText}</span>;
}
