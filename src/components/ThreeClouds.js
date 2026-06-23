import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeClouds({ inView }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Track state in a ref to avoid recreation of WebGLRenderer on state change
  const inViewRef = useRef(inView);
  useEffect(() => {
    inViewRef.current = inView;
  }, [inView]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // --- Camera Setup ---
    const width = containerRef.current.clientWidth || 800;
    const height = containerRef.current.clientHeight || 380;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 15;

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff3d6, 1.2); // Golden sun tint
    dirLight.position.set(5, 12, 8);
    scene.add(dirLight);

    // --- Cloud Factory ---
    const sphereGeom = new THREE.SphereGeometry(1, 16, 16);
    const cloudMat = new THREE.MeshLambertMaterial({
      color: 0xfcfbfa,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
    });

    const createCloud = () => {
      const group = new THREE.Group();

      // Fluffy overlapping spheres
      const puffs = [
        { pos: [0, 0, 0], scale: [2.2, 1.4, 1.4] },
        { pos: [-1.4, -0.2, 0.3], scale: [1.4, 1.0, 1.0] },
        { pos: [1.4, -0.1, -0.3], scale: [1.3, 0.9, 0.9] },
        { pos: [-0.7, 0.7, -0.1], scale: [1.5, 1.2, 1.2] },
        { pos: [0.7, 0.6, 0.2], scale: [1.4, 1.1, 1.1] },
        { pos: [0, -0.5, 0.4], scale: [1.2, 0.8, 0.8] },
      ];

      puffs.forEach((p) => {
        const mesh = new THREE.Mesh(sphereGeom, cloudMat);
        mesh.position.set(p.pos[0], p.pos[1], p.pos[2]);
        mesh.scale.set(p.scale[0], p.scale[1], p.scale[2]);
        group.add(mesh);
      });

      return group;
    };

    // --- Create Clusters ---
    const leftCluster = new THREE.Group();
    const rightCluster = new THREE.Group();

    // Left clouds
    const c1 = createCloud();
    c1.position.set(-1.5, 0.5, 0);
    c1.scale.set(1.1, 1.0, 1.1);
    leftCluster.add(c1);

    const c2 = createCloud();
    c2.position.set(1.5, -0.5, -1);
    c2.scale.set(0.8, 0.8, 0.8);
    leftCluster.add(c2);

    // Right clouds
    const c3 = createCloud();
    c3.position.set(1.5, 0.5, 0);
    c3.scale.set(1.1, 1.0, 1.1);
    rightCluster.add(c3);

    const c4 = createCloud();
    c4.position.set(-1.5, -0.5, -1);
    c4.scale.set(0.8, 0.8, 0.8);
    rightCluster.add(c4);

    scene.add(leftCluster);
    scene.add(rightCluster);

    // Set initial positions close to center
    leftCluster.position.x = -2;
    rightCluster.position.x = 2;

    // --- Animation Variable Targets ---
    const leftTargetXActive = -12;
    const leftTargetXInactive = -2.5;

    const rightTargetXActive = 12;
    const rightTargetXInactive = 2.5;

    let reqId;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Read from the ref to avoid effect recreation crashes
      const targetLeftX = inViewRef.current ? leftTargetXActive : leftTargetXInactive;
      const targetRightX = inViewRef.current ? rightTargetXActive : rightTargetXInactive;

      // Lerp for smooth slide animation
      leftCluster.position.x += (targetLeftX - leftCluster.position.x) * 0.05;
      rightCluster.position.x += (targetRightX - rightCluster.position.x) * 0.05;

      // Add gentle vertical floating movement
      leftCluster.position.y = Math.sin(elapsedTime * 0.8) * 0.25;
      rightCluster.position.y = Math.sin(elapsedTime * 0.8 + Math.PI) * 0.25;

      // Add subtle internal cloud rotations
      c1.rotation.y = Math.sin(elapsedTime * 0.05) * 0.1;
      c2.rotation.y = Math.cos(elapsedTime * 0.04) * 0.08;
      c3.rotation.y = Math.cos(elapsedTime * 0.05) * 0.1;
      c4.rotation.y = Math.sin(elapsedTime * 0.04) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || 800;
      const h = containerRef.current.clientHeight || 380;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        renderer.dispose();
      }
      sphereGeom.dispose();
      cloudMat.dispose();
    };
  }, []); // Empty dependency list runs only ONCE on mount

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '380px',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
}
