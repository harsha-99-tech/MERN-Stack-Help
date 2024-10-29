import React, { useEffect, useRef } from "react";

const ShootingStarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const starsArray = [];
    const numStars = 50;

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 5 + 2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.fade = Math.random() * 0.03 + 0.02;
        this.trailLength = Math.random() * 100 + 50;
      }

      update() {
        this.x += this.speed;
        this.y += this.speed;

        if (this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
        this.opacity -= this.fade;
        if (this.opacity <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x - this.trailLength, this.y - this.trailLength);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = this.size;
        ctx.stroke();
      }
    }

    const createStars = () => {
      for (let i = 0; i < numStars; i++) {
        starsArray.push(new Star());
      }
    };

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsArray.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animateStars);
    };

    createStars();
    animateStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className=" top-0 left-0 w-full h-full" />;
};

export default ShootingStarsBackground;
