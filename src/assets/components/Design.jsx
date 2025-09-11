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
                onClick: false, // no push mode for smoother performance
                onHover: false,
                resize: true,
              },
            },
            particles: {
              color: {
                value: ["#60a5fa", "#c084fc", "#facc15"], // fewer colors = smoother
              },
              move: {
                enable: true,
                speed: 0.5, // ultra-smooth drifting
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true, area: 1800 }, // larger area = spread out
                value: 20, // fewer particles
              },
              opacity: {
                value: 0.4, // static, no recalculation
              },
              shape: {
                type: "star", // cheapest shape
              },
              size: {
                value: 3, // consistent size (no animation)
              },
            },
            detectRetina: true,
            background: {
              color: "#111827", // slate background
            },
          }}
        />
      )}
    </>
  );
};

export default Design;
