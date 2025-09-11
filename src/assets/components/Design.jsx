import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Design = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "bubble" },
                resize: true,
              },
              modes: {
                push: { quantity: 2 },
                bubble: {
                  distance: 180,
                  size: 7,
                  duration: 2,
                  opacity: 0.7,
                },
              },
            },
            particles: {
              color: {
                value: ["#fb7185", "#facc15", "#c084fc", "#60a5fa"], // rose, gold, purple, soft blue
              },
              move: {
                direction: "none",
                enable: true,
                speed: 0.8, // slower, calm drift
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true, area: 1200 },
                value: 40, // fewer, more elegant
              },
              opacity: {
                value: 0.6,
                random: true,
                animation: {
                  enable: true,
                  speed: 0.8,
                  minimumValue: 0.2,
                },
              },
              shape: {
                type: ["circle", "star"], // keep it artistic & light
              },
              size: {
                value: { min: 2, max: 5 },
                random: true,
                animation: {
                  enable: true,
                  speed: 1.5,
                  minimumValue: 1,
                },
              },
            },
            detectRetina: true,
            background: {
              color: "#111827", // slate background (same as navbar)
            },
          }}
        />
      )}
    </>
  );
};

export default Design;
