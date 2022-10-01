import { OrbitControls, OrthographicCamera, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import Borders from "./Borders";
import { Physics } from "@react-three/cannon";
import Mouse from "./Mouse";

export const ThreeScene = () => {
  return (
    <Canvas>
      {/* <axesHelper /> */}
      <OrbitControls />
      <OrthographicCamera />
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Physics
        gravity={[0, -50, 0]}
        defaultContactMaterial={{ restitution: 0.5 }}
      >
        <Mouse />
        <Box position={[0, 3, 0]} />
        <Box position={[0.1, 7, -0.25]} />
        <Box position={[-0.1, 6, 0.25]} />
        <Box position={[0, 9, 0.25]} />
        <Borders />
      </Physics>
    </Canvas>
  );
};
