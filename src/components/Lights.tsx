interface LightsProps {}

const Lights = ({}: LightsProps) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <directionalLight
        castShadow
        intensity={4}
        position={[50, 50, 25]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};
export default Lights;
