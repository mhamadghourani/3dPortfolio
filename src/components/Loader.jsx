/** @format */

import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  const formattedProgress = progress ? (progress).toFixed(2) : 0;
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}>
        {formattedProgress}%
      </p>
    </Html>
  );
};

export default Loader;