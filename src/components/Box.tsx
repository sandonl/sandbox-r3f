import { a, config, useSpring } from "@react-spring/three";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import { BufferGeometry, Mesh } from "three";

interface BoxProps {
  position: [x: number, y: number, z: number];
}

const Box = (props: BoxProps) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const [active, setActive] = useState(false);

  const { spring } = useSpring({
    spring: active ? 1 : 0,
    config: config.wobbly,
  });

  const scale = spring.to([0, 1], [1, 2]);
  const rotationY = spring.to([0, 1], [0, Math.PI]);
  const rotationX = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#5e7fb5", "#e45858"]);

  return (
    <a.group>
      <a.mesh
        rotation-y={rotationY}
        rotation-x={rotationX}
        scale={scale}
        onClick={() => setActive(!active)}
        ref={ref as React.RefObject<Mesh<BufferGeometry>>}
      >
        <boxGeometry />
        {/* @ts-ignore */}
        <a.meshStandardMaterial roughness={0.5} color={color} />
      </a.mesh>
    </a.group>
  );
};

export default Box;
