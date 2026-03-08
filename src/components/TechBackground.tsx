import { useEffect, useRef } from "react";

const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    // Data streams (vertical falling lines)
    const streams: { x: number; y: number; speed: number; length: number; a: number }[] = [];
    for (let i = 0; i < 15; i++) {
      streams.push({
        x: Math.random() * w,
        y: Math.random() * h,
        speed: Math.random() * 1 + 0.5,
        length: Math.random() * 80 + 40,
        a: Math.random() * 0.08 + 0.02,
      });
    }

    const primaryH = 212, primaryS = 100, primaryL = 50;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw grid
      ctx.strokeStyle = `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, 0.03)`;
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw & update particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, ${p.a})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw data streams
      for (const s of streams) {
        const gradient = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.length);
        gradient.addColorStop(0, `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, 0)`);
        gradient.addColorStop(0.5, `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, ${s.a})`);
        gradient.addColorStop(1, `hsla(${primaryH}, ${primaryS}%, ${primaryL}%, 0)`);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x, s.y + s.length);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        s.y += s.speed;
        if (s.y > h) {
          s.y = -s.length;
          s.x = Math.random() * w;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    // Resize canvas when page height changes
    const observer = new ResizeObserver(resize);
    observer.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default TechBackground;
