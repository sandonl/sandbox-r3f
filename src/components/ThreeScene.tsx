import { OrthographicCamera, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";

export const ThreeScene = () => {
  return (
    <Canvas>
      <OrthographicCamera />
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Text
        color="black"
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        scale={3.5}
        position={[3, 0, 0]}
      >
        Click Me
      </Text>
      <Box />
    </Canvas>
  );
};
