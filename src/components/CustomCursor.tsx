import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const ringPositionRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const targetPositionRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  // Check if device has mouse (desktop)
  const hasMouse = useRef(!window.matchMedia("(pointer: coarse)").matches);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (!hasMouse.current) {
      return;
    }

    setIsVisible(true);
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    let animationFrameId: number;
    let isAnimating = true;

    const updateCursor = (e: MouseEvent) => {
      targetPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!isAnimating) return;

      // Smooth follow for main cursor dot
      positionRef.current.x +=
        (targetPositionRef.current.x - positionRef.current.x) * 0.15;
      positionRef.current.y +=
        (targetPositionRef.current.y - positionRef.current.y) * 0.15;

      setPosition({
        x: positionRef.current.x,
        y: positionRef.current.y,
      });

      // Smoother follow for ring (slower, creates lag effect)
      ringPositionRef.current.x +=
        (targetPositionRef.current.x - ringPositionRef.current.x) * 0.1;
      ringPositionRef.current.y +=
        (targetPositionRef.current.y - ringPositionRef.current.y) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPositionRef.current.x}px`;
        ringRef.current.style.top = `${ringPositionRef.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const updateCursorStyle = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;

      setIsPointer(isClickable);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", updateCursorStyle);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      isAnimating = false;
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", updateCursorStyle);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isVisible || !hasMouse.current) {
    return null;
  }

  return (
    <>
      {/* Outer ring with pulse effect */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          transform: `translate(-50%, -50%) scale(${
            isPointer ? 2 : isClicking ? 0.8 : 1.5
          })`,
          opacity: isClicking ? 0.6 : 0.4,
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${
            isPointer ? 1.5 : isClicking ? 0.5 : 1
          })`,
        }}
      />

      {/* Glow effect */}
      <div
        className="cursor-glow"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${
            isPointer ? 2.5 : isClicking ? 1.5 : 2
          })`,
          opacity: isPointer ? 0.3 : isClicking ? 0.2 : 0.15,
        }}
      />
    </>
  );
};

export default CustomCursor;
