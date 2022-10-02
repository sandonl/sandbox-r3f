import { Physics } from "@react-three/cannon";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import Borders from "./Borders";
import Lights from "./Lights";
import Mouse from "./Mouse";

export const ThreeScene = () => {
  return (
    <Canvas>
      {/* <axesHelper /> */}
      <OrbitControls />
      <Lights />
      <Physics
        gravity={[0, -50, 0]}
        broadphase={"SAP"}
        allowSleep={true}
        defaultContactMaterial={{ restitution: 0.5 }}
      >
        <Mouse />
        <Box position={[0, 3, 0]} />
        <Box position={[0.1, 7, -0.25]} />
        <Box position={[-0.1, 6, 0.25]} />
        <Box position={[0, 9, 0.25]} />
        <Box position={[0, 9, 0.25]} />
        <Box position={[0, 9, 0.25]} />
        <Box position={[0, 9, 0.25]} />
        <Borders />
      </Physics>
    </Canvas>
  );
};
