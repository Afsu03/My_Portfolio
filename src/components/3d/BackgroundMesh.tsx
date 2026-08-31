import React from 'react';

export const BackgroundMesh: React.FC = () => {
  return (
    <>
      {/* Ambient and directional lights */}
      <ambientLight intensity={0.85} />
      
      {/* Key light with warm soft pink */}
      <directionalLight position={[10, 10, 8]} intensity={1.2} color="#FFFFFF" />
      
      {/* Fill light with vibrant pastel pink */}
      <pointLight position={[-8, 4, 6]} intensity={1.8} color="#FFB3D1" distance={20} />
      
      {/* Rim light with futuristic rose glow */}
      <pointLight position={[6, -8, 4]} intensity={2.0} color="#F472B6" distance={25} />

      {/* Deep back light for soft iridescent reflections */}
      <pointLight position={[0, 0, -8]} intensity={1.0} color="#E8D5FF" distance={18} />
    </>
  );
};
