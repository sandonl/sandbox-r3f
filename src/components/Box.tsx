import { useSpring, config, a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";

const Box = () => {
  const myMesh = useRef<Mesh>(null);
  const [active, setActive] = useState(false);

  const { spring } = useSpring({
    spring: active ? 1 : 0,
    config: config.wobbly,
  });

  const scale = spring.to([0, 1], [1, 2]);
  const rotationY = spring.to([0, 1], [0, Math.PI]);
  const rotationX = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#6246ea", "#e45858"]);

  useFrame(() => {
    if (myMesh.current) {
      // myMesh.current.rotation.x += 0.01;
      // myMesh.current.rotation.y += 0.01;
    }
  });

  return (
    <a.group>
      <a.mesh
        rotation-y={rotationY}
        rotation-x={rotationX}
        scale={scale}
        onClick={() => setActive(!active)}
        ref={myMesh}
      >
        <boxGeometry />
        {/* @ts-ignore */}
        <a.meshStandardMaterial roughness={0.5} color={color} />
      </a.mesh>
    </a.group>
  );
};

export default Box;
