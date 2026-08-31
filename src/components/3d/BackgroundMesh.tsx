import React from 'react';

export const BackgroundMesh: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.9} />
      
      {/* Key light with warm clean white */}
      <directionalLight position={[10, 10, 8]} intensity={1.3} color="#FFFFFF" />
      
      {/* Fill light with rich royal dark pink */}
      <pointLight position={[-8, 4, 6]} intensity={2.2} color="#BE185D" distance={22} />
      
      {/* Rim light with royal fuchsia glow */}
      <pointLight position={[6, -8, 4]} intensity={2.4} color="#DB2777" distance={25} />

      {/* Deep back light for velvet reflection */}
      <pointLight position={[0, 0, -8]} intensity={1.2} color="#9D174D" distance={20} />
    </>
  );
};
