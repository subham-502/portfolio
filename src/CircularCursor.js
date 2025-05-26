import { useEffect } from 'react';

function CircularCursor() {
  useEffect(() => {
    const cursor = document.getElementById('circular-cursor');
    // Move the cursor
    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };
    window.addEventListener('mousemove', moveCursor);

    // Add hover effect for buttons
    const buttons = document.querySelectorAll('button, .cursor-pointer');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
      btn.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      buttons.forEach(btn => {
        btn.removeEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        btn.removeEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
      });
    };
  }, []);
  return <div id="circular-cursor"></div>;
}

export default CircularCursor;
