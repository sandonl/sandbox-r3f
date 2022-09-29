import { useSpring, a } from "@react-spring/three";
import { useState } from "react";

function Box({
  config = { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
}) {
  // local state, toggles between true/false, look for onClick
  const [active, set] = useState(false);
  // react-spring is a animation library that turns static values into animated springs
  const { spring } = useSpring({ spring: Number(active), config });
  // interpolate values from spring
  const scale = spring.to([0, 1], [1, 2]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#6246ea", "#e45858"]);
  // distribute the springs among the view
  return (
    <a.mesh
      castShadow
      rotation-y={rotation}
      scale-x={scale}
      scale-z={scale}
      onClick={() => set(!active)}
    >
      <boxGeometry />
      <a.meshStandardMaterial roughness={0.5} color={color} />
    </a.mesh>
  );
}
