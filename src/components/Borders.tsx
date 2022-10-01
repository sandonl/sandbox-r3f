import { usePlane } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";

interface PlaneProps {
  rotation: [x: number, y: number, z: number];
  position: [x: number, y: number, z: number];
}

const Plane = (props: PlaneProps) => {
  const { rotation, position } = props;
  const [ref] = usePlane(() => ({ rotation, position }));
  return (
    // @ts-ignore
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[25, 25]} />
      <meshStandardMaterial color="royalBlue" />
    </mesh>
  );
};

const Borders = () => {
  const { viewport } = useThree();
  return (
    <>
      {/* Bottom Plane */}
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -viewport.height / 4, 0]}
      />
      {/*  Left Plane  */}
      <Plane
        rotation={[0, Math.PI / 2, 0]}
        position={[-viewport.width / 2 - 1, 0, 0]}
      />
      {/* Right Plane */}
      <Plane
        rotation={[0, -Math.PI / 2, 0]}
        position={[viewport.width / 2 + 1, 0, 0]}
      />
      {/* Back Plane */}
      <Plane rotation={[Math.PI * 2, 0, 0]} position={[0, 0, -2]} />
      {/* Front Plane */}
      <Plane rotation={[Math.PI, 0, 0]} position={[0, 0, 2]} />
    </>
  );
};
export default Borders;
