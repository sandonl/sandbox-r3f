import { useFrame, useThree } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";

const Mouse = () => {
  const { viewport } = useThree();
  const [, api] = useBox(() => ({ type: "Kinematic" }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
};

export default Mouse;
