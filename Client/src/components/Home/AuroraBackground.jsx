import React, { useEffect, useRef } from "react";

const AuroraBackground = () => {
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

    let auroraColors = [
      "rgba(80, 170, 255, 0.2)",
      "rgba(0, 220, 200, 0.2)",
      "rgba(150, 70, 255, 0.2)",
    ];

    class Aurora {
      constructor() {
        this.waves = [];
        this.numWaves = 3;
        this.createWaves();
      }

      createWaves() {
        for (let i = 0; i < this.numWaves; i++) {
          this.waves.push({
            amplitude: Math.random() * 50 + 50, // Wave height
            frequency: Math.random() * 0.01 + 0.005, // Wave frequency
            phase: Math.random() * Math.PI * 2, // Wave phase
            color: auroraColors[i],
          });
        }
      }

      drawWave(y, wave) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          let yOffset =
            wave.amplitude * Math.sin(wave.frequency * x + wave.phase);
          ctx.lineTo(x, y + yOffset);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      }

      animateWaves() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < this.waves.length; i++) {
          this.waves[i].phase += 0.01; // Move the waves forward
          this.drawWave(200 + i * 100, this.waves[i]);
        }
        requestAnimationFrame(() => this.animateWaves());
      }
    }

    const aurora = new Aurora();
    aurora.animateWaves();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className=" top-0 left-0 w-full h-full" />;
};

export default AuroraBackground;
