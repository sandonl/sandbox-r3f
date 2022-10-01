import { OrbitControls, OrthographicCamera, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import Borders from "./Borders";
import { Physics } from "@react-three/cannon";

export const ThreeScene = () => {
  return (
    <Canvas>
      {/* <axesHelper /> */}
      <OrbitControls />
      <OrthographicCamera />
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      {/* <Text
        color="black"
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        scale={3.5}
        position={[3, 0, 0]}
      >
        Click Me
      </Text> */}
      <Physics>
        <Box position={[0, 3, 0]} />
        <Box position={[0, 7, -0.25]} />
        <Box position={[0, 9, 0.25]} />
        <Box position={[0, 9, 0.25]} />
        <Borders />
      </Physics>
    </Canvas>
  );
};
