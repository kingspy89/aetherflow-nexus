import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import FloatingShape from "./FloatingShape";

const Scene3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d9ff" />
        
        <FloatingShape position={[-3, 2, 0]} color="#00d9ff" />
        <FloatingShape position={[3, -2, -2]} color="#0099ff" />
        <FloatingShape position={[0, 3, -1]} color="#00ffcc" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
