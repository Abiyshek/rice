import React from 'react';
import worldMapTexture from '../assets/bg/world_map_texture_new.png';

export default function ThreeGlobe({ onHoverPoint, isMobile }) {
  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        aspectRatio: isMobile ? '4 / 3' : '2 / 1',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio={isMobile ? "xMidYMid slice" : "xMidYMid meet"}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'absolute',
          inset: 0,
        }}
      >
        {/* World Map Texture Image (pre-marked pins embedded in image) */}
        <image
          href={worldMapTexture}
          x="0"
          y="0"
          width="1000"
          height="500"
          preserveAspectRatio="none"
          style={{
            opacity: 1.0,
          }}
        />
      </svg>
    </div>
  );
}
