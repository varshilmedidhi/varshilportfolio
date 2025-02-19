import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTrails(prev => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 5),
      ]);
    };

    const updateCursorStyle = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateCursorStyle);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateCursorStyle);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: 1 - index * 0.2,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;