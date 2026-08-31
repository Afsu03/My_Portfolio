import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { HeroGem } from './HeroGem';
import { FloatingOrbits } from './FloatingOrbits';
import { BackgroundMesh } from './BackgroundMesh';

// Camera Choreographer that smoothly interpolates camera position & rotation based on scroll
function CameraRig({
  scrollProgress,
  mousePos
}: {
  scrollProgress: React.MutableRefObject<number>;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 0, 5.5));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    const progress = scrollProgress.current;
    
    // Calculate target camera path along the page:
    // 0.00 - 0.15: Hero -> [0, 0, 5.5] looking at [0, 0, 0]
    // 0.15 - 0.35: About -> [2.4, -4.5, 5.8] looking at [-0.5, -4.5, 0]
    // 0.35 - 0.55: Skills -> [-2.2, -10.5, 6.2] looking at [0.5, -10.5, 0]
    // 0.55 - 0.75: Projects -> [0, -16.5, 6.8] looking at [0, -16.5, 0]
    // 0.75 - 0.90: Experience/Certs -> [2.0, -22.5, 6.0] looking at [-0.4, -22.5, 0]
    // 0.90 - 1.00: Contact -> [0, -28.5, 5.5] looking at [0, -28.5, 0]

    const totalDistance = 28.5;
    const targetY = -progress * totalDistance;
    
    // Lateral camera arc
    const targetX = Math.sin(progress * Math.PI * 3) * 2.2 + mousePos.current.x * 0.4;
    const targetZ = 5.5 + Math.sin(progress * Math.PI * 2) * 1.0;

    // Smooth dampening
    currentPos.current.x = THREE.MathUtils.damp(currentPos.current.x, targetX, 3.5, delta);
    currentPos.current.y = THREE.MathUtils.damp(currentPos.current.y, targetY + mousePos.current.y * 0.3, 3.5, delta);
    currentPos.current.z = THREE.MathUtils.damp(currentPos.current.z, targetZ, 3.5, delta);

    camera.position.copy(currentPos.current);

    const lookTargetY = targetY;
    currentLookAt.current.x = THREE.MathUtils.damp(currentLookAt.current.x, -mousePos.current.x * 0.2, 3.5, delta);
    currentLookAt.current.y = THREE.MathUtils.damp(currentLookAt.current.y, lookTargetY, 3.5, delta);
    currentLookAt.current.z = 0;

    camera.lookAt(currentLookAt.current);
  });

  return null;
}

export const Scene3D: React.FC = () => {
  const scrollProgress = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        scrollProgress.current = Math.min(1, Math.max(0, window.scrollY / totalHeight));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 48 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <BackgroundMesh />
        <CameraRig scrollProgress={scrollProgress} mousePos={mousePos} />
        
        {/* Section 3D Objects positioned across the vertical dimension */}
        <HeroGem mousePos={mousePos} />
        
        {/* Ambient floating orbits & particle clusters */}
        <FloatingOrbits />
      </Canvas>
    </div>
  );
};
