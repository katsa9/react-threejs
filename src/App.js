import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import './App.css';

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./avatar.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.6} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Canvas className="Canvas"
      shadows
      camera={{position: [10, 0, 80], fov: 45}}>
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]}/>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
