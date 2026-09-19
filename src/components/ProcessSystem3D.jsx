import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable, prefersReducedMotion } from '../utils/webgl';

/**
 * ProcessSystem3D — Real-Time 3D Orbital Solar Energy Visualization
 * Enhances the existing How It Works section with genuine WebGL 3D depth,
 * orbital energy particles, interactive tilt, and active step illumination.
 */
export default function ProcessSystem3D({ activeIndex = 0 }) {
  const containerRef = useRef(null);
  const isAvailable = isWebGLAvailable();
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (!isAvailable || !containerRef.current) return;
    const container = containerRef.current;

    const reducedMotion = prefersReducedMotion();

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 1000;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 2. Renderer Setup
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1424, 2);
    scene.add(ambientLight);

    const centerPointLight = new THREE.PointLight(0xffa028, 3, 15);
    centerPointLight.position.set(0, 0, 1);
    scene.add(centerPointLight);

    const cyanPointLight = new THREE.PointLight(0x38bdf8, 2.5, 18);
    cyanPointLight.position.set(0, 0, -2);
    scene.add(cyanPointLight);

    // 4. Central 3D Orbital Energy System Group
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    // Central 3D Glowing Core Sphere
    const coreGeo = new THREE.SphereGeometry(0.75, 24, 24);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffa028,
      emissive: 0xff8c00,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.2,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    orbitGroup.add(coreMesh);

    // Concentric 3D Glowing Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.015, 8, 48);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    orbitGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xffa028,
      transparent: true,
      opacity: 0.28,
      wireframe: true,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.1, 0.015, 8, 48);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 10;
    orbitGroup.add(ring2);

    // 5. 5 Orbiting 3D Energy Nodes
    const nodeColors = [0x38bdf8, 0xffa028, 0x38bdf8, 0xffa028, 0x38bdf8];
    const nodeMeshes = [];
    const radius = 2.7;

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2; // Step 01 top center
      const posX = Math.cos(angle) * radius * 1.25;
      const posY = -Math.sin(angle) * radius * 0.85;

      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(posX, posY, 0.1);

      // Outer Glowing Sphere
      const sphereGeo = new THREE.SphereGeometry(0.24, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        emissive: nodeColors[i],
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.5,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      nodeGroup.add(sphere);

      // Orbiting Micro Halo Ring
      const haloGeo = new THREE.TorusGeometry(0.38, 0.018, 6, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: nodeColors[i],
        transparent: true,
        opacity: 0.6,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.rotation.x = Math.PI / 3;
      nodeGroup.add(halo);

      orbitGroup.add(nodeGroup);
      nodeMeshes.push({ group: nodeGroup, sphere, halo, baseMat: sphereMat });
    }

    // 6. Orbiting 3D Energy Stream Particles
    const streamCount = 70;
    const streamGeo = new THREE.BufferGeometry();
    const streamPos = new Float32Array(streamCount * 3);
    const streamColors = new Float32Array(streamCount * 3);

    for (let i = 0; i < streamCount; i++) {
      const a = (i / streamCount) * Math.PI * 2;
      const r = radius * (0.95 + Math.random() * 0.15);
      streamPos[i * 3] = Math.cos(a) * r * 1.25;
      streamPos[i * 3 + 1] = Math.sin(a) * r * 0.85;
      streamPos[i * 3 + 2] = (Math.random() - 0.5) * 0.8;

      const c = Math.random() > 0.5 ? new THREE.Color(0x38bdf8) : new THREE.Color(0xffa028);
      streamColors[i * 3] = c.r;
      streamColors[i * 3 + 1] = c.g;
      streamColors[i * 3 + 2] = c.b;
    }

    streamGeo.setAttribute('position', new THREE.BufferAttribute(streamPos, 3));
    streamGeo.setAttribute('color', new THREE.BufferAttribute(streamColors, 3));

    const streamMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const streamPoints = new THREE.Points(streamGeo, streamMat);
    orbitGroup.add(streamPoints);

    // 7. Interaction & Physics Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let isVisibleInViewport = true;
    let animationFrameId = null;
    let clock = new THREE.Clock();

    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouseX = (clientX / window.innerWidth) * 2 - 1;
      mouseY = -(clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Render loop with automatic start/stop
    const animate = () => {
      if (!isVisibleInViewport || document.hidden) {
        animationFrameId = null;
        return;
      }

      animationFrameId = requestAnimationFrame(animate);

      if (reducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Smooth interactive orbital plane tilt
      targetTiltX += (mouseY * 0.22 - targetTiltX) * 0.05;
      targetTiltY += (mouseX * 0.32 - targetTiltY) * 0.05;

      orbitGroup.rotation.x = targetTiltX + Math.sin(elapsedTime * 0.4) * 0.04;
      orbitGroup.rotation.y = targetTiltY + Math.cos(elapsedTime * 0.3) * 0.04;

      // Central core subtle spin
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.z = elapsedTime * 0.15;

      // Ring rotations
      ring1.rotation.z = elapsedTime * 0.18;
      ring2.rotation.z = -elapsedTime * 0.14;

      // Stream particles rotation around orbit
      streamPoints.rotation.z = elapsedTime * 0.35;

      // Active Node illumination & prominence
      const currentActive = activeIndexRef.current;
      nodeMeshes.forEach((node, idx) => {
        const isActive = idx === currentActive;
        const targetScale = isActive ? 1.45 : 1.0;
        node.group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);

        node.halo.rotation.z += 0.02 * (idx % 2 === 0 ? 1 : -1);
        node.baseMat.emissiveIntensity = isActive
          ? 0.95 + Math.sin(elapsedTime * 4) * 0.2
          : 0.45;
      });

      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (!animationFrameId && isVisibleInViewport && !document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleInViewport = entry.isIntersecting;
        if (isVisibleInViewport) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else if (isVisibleInViewport) {
        startAnimation();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 1000;
      const newH = container.clientHeight || 500;

      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);

      if (newW < 768) {
        orbitGroup.scale.set(0.65, 0.65, 0.65);
      } else {
        orbitGroup.scale.set(1, 1, 1);
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    startAnimation();

    return () => {
      stopAnimation();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      resizeObserver.disconnect();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }

      scene.clear();
    };
  }, [isAvailable]);

  if (!isAvailable) return null;

  return (
    <div
      ref={containerRef}
      className="process-system-3d-canvas-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
