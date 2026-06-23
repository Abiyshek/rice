import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import worldMapTexture from '../assets/bg/world_map_texture.png';

const locations = [
  { name: 'Saudi Arabia', lat: 24.7136, lon: 46.6753, desc: 'Premium Basmati & Raw Ponni bulk supply.' },
  { name: 'UAE (Dubai)', lat: 25.2048, lon: 55.2708, desc: 'Flagship VIP Krishna Rice distribution hub.' },
  { name: 'Singapore', lat: 1.3521, lon: 103.8198, desc: 'Export-grade Sona Masuri & Ponni varieties.' },
  { name: 'Malaysia', lat: 3.1390, lon: 101.6869, desc: 'Aromatic Ponni & Jeeraga Samba supplying supermarkets.' },
  { name: 'Europe', lat: 50.1109, lon: 8.6821, desc: 'Organic rice grains certified to EU standards.' },
  { name: 'Sri Krishna Mill (Origin)', lat: 11.9416, lon: 79.8083, isOrigin: true, desc: 'Our state-of-the-art 8-acre milling facility in Puducherry.' }
];

export default function ThreeGlobe({ onHoverPoint }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Use ref to keep track of hover callback without re-instantiating the WebGL context
  const onHoverPointRef = useRef(onHoverPoint);
  useEffect(() => {
    onHoverPointRef.current = onHoverPoint;
  }, [onHoverPoint]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth || 500;
    const height = containerRef.current.clientHeight || 350;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 10;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x2c6b37, 0.4); // soft green accent light
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // --- Globe Group ---
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const radius = 3.0;

    // Inner core sphere
    const coreGeom = new THREE.SphereGeometry(radius - 0.05, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xfcfbfa });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    globeGroup.add(coreMesh);

    // Globe Sphere with map texture
    const globeGeom = new THREE.SphereGeometry(radius, 64, 64);
    const loader = new THREE.TextureLoader();
    
    let globeMaterial;
    const texture = loader.load(worldMapTexture, () => {
      renderer.render(scene, camera);
    });

    globeMaterial = new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
      shininess: 12,
      specular: new THREE.Color(0x2c6b37),
    });

    const globeMesh = new THREE.Mesh(globeGeom, globeMaterial);
    globeGroup.add(globeMesh);

    // --- Geolocation conversion ---
    const convertLatLngToVector3 = (lat, lon, r) => {
      const phi = (lat * Math.PI) / 180;
      const theta = (lon * Math.PI) / 180;

      const x = r * Math.cos(phi) * Math.sin(theta);
      const y = r * Math.sin(phi);
      const z = r * Math.cos(phi) * Math.cos(theta);

      return new THREE.Vector3(x, y, z);
    };

    // --- Generate Markers & Arcs ---
    const markerGroup = new THREE.Group();
    globeGroup.add(markerGroup);

    const markerMeshes = [];
    const pulsingSpheres = [];

    const origin = locations.find((l) => l.isOrigin);
    const originVec = convertLatLngToVector3(origin.lat, origin.lon, radius);

    locations.forEach((loc, idx) => {
      const vec = convertLatLngToVector3(loc.lat, loc.lon, radius);

      // Create visual marker
      const markerGeom = new THREE.SphereGeometry(0.09, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: loc.isOrigin ? 0x2c6b37 : 0xc99414,
      });
      const markerMesh = new THREE.Mesh(markerGeom, markerMat);
      markerMesh.position.copy(vec);
      markerGroup.add(markerMesh);
      pulsingSpheres.push(markerMesh);

      // Create invisible larger hover mesh for easy raycasting
      const hoverGeom = new THREE.SphereGeometry(0.32, 8, 8);
      const hoverMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        visible: false,
      });
      const hoverMesh = new THREE.Mesh(hoverGeom, hoverMat);
      hoverMesh.position.copy(vec);
      hoverMesh.userData = { index: idx };
      markerGroup.add(hoverMesh);
      markerMeshes.push(hoverMesh);

      // Draw curve if not origin
      if (!loc.isOrigin) {
        const destVec = vec;
        const mid = new THREE.Vector3().addVectors(originVec, destVec).multiplyScalar(0.5);
        const dist = originVec.distanceTo(destVec);
        
        const controlVec = mid.clone().normalize().multiplyScalar(radius + dist * 0.35);

        const curve = new THREE.QuadraticBezierCurve3(originVec, controlVec, destVec);
        
        const tubeGeom = new THREE.TubeGeometry(curve, 24, 0.015, 6, false);
        const tubeMat = new THREE.MeshBasicMaterial({
          color: 0xc99414,
          transparent: true,
          opacity: 0.5,
        });
        const tubeMesh = new THREE.Mesh(tubeGeom, tubeMat);
        globeGroup.add(tubeMesh);

        // Add a traveling pulse along the line
        const pulseGeom = new THREE.SphereGeometry(0.04, 8, 8);
        const pulseMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const pulseMesh = new THREE.Mesh(pulseGeom, pulseMat);
        globeGroup.add(pulseMesh);

        pulsingSpheres.push({
          mesh: pulseMesh,
          curve: curve,
          offset: Math.random(),
        });
      }
    });

    // Default angle rotation to center India/Asia in the viewport
    globeGroup.rotation.y = 1.6;
    globeGroup.rotation.x = 0.2;

    // --- Raycasting & Interaction ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-9999, -9999);
    let hoveredIdx = null;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y,
        };

        globeGroup.rotation.y += deltaMove.x * 0.005;
        globeGroup.rotation.x += deltaMove.y * 0.005;

        globeGroup.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, globeGroup.rotation.x));

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const canvas = canvasRef.current;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // --- Animation loop ---
    let reqId;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Auto-rotate slowly when not dragging
      if (!isDragging) {
        globeGroup.rotation.y += 0.003;
      }

      // Pulse normal markers scale slightly
      locations.forEach((loc, idx) => {
        const normalMarker = pulsingSpheres[idx * 2];
        if (normalMarker instanceof THREE.Mesh) {
          const pulseScale = 1.0 + Math.sin(elapsedTime * 5 + idx) * 0.15;
          normalMarker.scale.set(pulseScale, pulseScale, pulseScale);
        }
      });

      // Animate line travel pulses
      pulsingSpheres.forEach((p) => {
        if (p.curve) {
          const t = (elapsedTime * 0.25 + p.offset) % 1.0;
          const pos = p.curve.getPointAt(t);
          p.mesh.position.copy(pos);
        }
      });

      // Raycast hover check
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerMeshes);

      if (intersects.length > 0) {
        const targetIdx = intersects[0].object.userData.index;
        if (hoveredIdx !== targetIdx) {
          hoveredIdx = targetIdx;
          if (onHoverPointRef.current) {
            onHoverPointRef.current(targetIdx);
          }
        }
      } else {
        if (hoveredIdx !== null) {
          hoveredIdx = null;
          if (onHoverPointRef.current) {
            onHoverPointRef.current(null);
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerup', handlePointerUp);
      if (canvas) {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointermove', handlePointerMove);
      }
      if (renderer) {
        renderer.dispose();
      }
      coreGeom.dispose();
      coreMat.dispose();
      globeGeom.dispose();
      if (globeMaterial) globeMaterial.dispose();
      texture.dispose();
    };
  }, []); // Run only ONCE on mount

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '350px',
        cursor: 'grab',
        overflow: 'hidden',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', outline: 'none' }} />
    </div>
  );
}
