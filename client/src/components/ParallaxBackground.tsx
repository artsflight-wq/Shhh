import { useEffect, useState, useRef } from "react";

export function ParallaxBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // Throttle to ~20fps (50ms between updates) for smooth performance
      if (now - lastUpdateRef.current < 50) {
        return;
      }
      
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Schedule update on next animation frame
      rafRef.current = requestAnimationFrame(() => {
        // Normalize mouse position to -1 to 1 range
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMousePosition({ x, y });
        lastUpdateRef.current = now;
        rafRef.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Floating orbs with parallax */}
      <div
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-20 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-3xl opacity-25 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0)`,
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl opacity-30 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x * 25}px, ${mousePosition.y * 25}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/6 to-transparent rounded-full blur-2xl opacity-35 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x * -20}px, ${mousePosition.y * -20}px, 0)`,
        }}
      />

      {/* Grid movement effect */}
      <div
        className="absolute inset-0 opacity-30 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x * 5}px, ${mousePosition.y * 5}px, 0)`,
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, rgba(136, 169, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(136, 169, 255, 0.03) 1px, transparent 1px)',
        }}
      />
    </div>
  );
}
