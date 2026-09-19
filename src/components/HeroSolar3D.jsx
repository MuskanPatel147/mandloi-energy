import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable, prefersReducedMotion } from '../utils/webgl';

/**
 * HeroSolar3D — Real-Time 3D Photovoltaic Array & Energy Atmosphere
 * Integrates directly with the locked Home Hero design.
 * Touch + Mouse + Scroll responsive with automatic performance scaling.
 */
export default function HeroSolar3D() {
  const containerRef = useRef(null);
  const isAvailable = isWebGLAvailable();

  useEffect(() => {
    if (!isAvailable || !containerRef.current) return;
    const container = containerRef.current;

    const reducedMotion = prefersReducedMotion();

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06090e, 0.035);

    // 2. Camera Setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 9.5);

    // 3. Renderer Setup
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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.opacity = '0.9';

    // 4. Lighting System
    const ambientLight = new THREE.AmbientLight(0x0a1424, 1.5);
    scene.add(ambientLight);

    // Solar Gold Key Light
    const sunLight = new THREE.DirectionalLight(0xffa028, 2.8);
    sunLight.position.set(6, 8, 5);
    scene.add(sunLight);

    // Cyan Technology Fill Light
    const cyanLight = new THREE.PointLight(0x38bdf8, 2.2, 20);
    cyanLight.position.set(-5, -2, 4);
    scene.add(cyanLight);

    // 5. Procedural 3D Photovoltaic Solar Array Group
    const solarGroup = new THREE.Group();
    solarGroup.position.set(2.8, -0.4, 0); // Positioned towards right side of Hero

    // Metallic Aluminum Frame Material
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x223244,
      metalness: 0.85,
      roughness: 0.25,
    });

    // Dark Silicon Wafer Cell Material
    const cellMaterial = new THREE.MeshStandardMaterial({
      color: 0x07111e,
      emissive: 0x051a2e,
      emissiveIntensity: 0.35,
      metalness: 0.6,
      roughness: 0.15,
    });

    // Emissive Busbar Grid Material
    const gridLineMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.3,
    });

    // Main Solar Panel Base Mesh
    const panelWidth = 4.2;
    const panelHeight = 2.4;
    const panelThickness = 0.08;

    const frameGeometry = new THREE.BoxGeometry(panelWidth, panelHeight, panelThickness);
    const frameMesh = new THREE.Mesh(frameGeometry, frameMaterial);
    solarGroup.add(frameMesh);

    // Individual Silicon Cells on Top of Frame
    const cols = 6;
    const rows = 3;
    const cellW = (panelWidth - 0.2) / cols;
    const cellH = (panelHeight - 0.2) / rows;
    const cellGeo = new THREE.BoxGeometry(cellW - 0.04, cellH - 0.04, 0.02);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = new THREE.Mesh(cellGeo, cellMaterial);
        const posX = -panelWidth / 2 + 0.1 + cellW / 2 + c * cellW;
        const posY = -panelHeight / 2 + 0.1 + cellH / 2 + r * cellH;
        cell.position.set(posX, posY, panelThickness / 2 + 0.01);
        solarGroup.add(cell);

        // Thin busbar grid lines across cell
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(posX - cellW * 0.4, posY, panelThickness / 2 + 0.02),
          new THREE.Vector3(posX + cellW * 0.4, posY, panelThickness / 2 + 0.02),
        ]);
        const line = new THREE.Line(lineGeo, gridLineMaterial);
        solarGroup.add(line);
      }
    }

    // Mounting Bracket Structure
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.2, 8);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 });
    const leg1 = new THREE.Mesh(legGeo, legMat);
    leg1.position.set(-1.6, -1.2, -0.6);
    leg1.rotation.x = Math.PI / 8;
    solarGroup.add(leg1);

    const leg2 = new THREE.Mesh(legGeo, legMat);
    leg2.position.set(1.6, -1.2, -0.6);
    leg2.rotation.x = Math.PI / 8;
    solarGroup.add(leg2);

    // Initial Tilt (Solar Azimuth Orientation)
    solarGroup.rotation.x = -0.32;
    solarGroup.rotation.y = -0.45;
    solarGroup.rotation.z = 0.06;
    scene.add(solarGroup);

    // 6. Floating Solar Photon Energy Particles
    const particleCount = window.innerWidth < 768 ? 45 : 90;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x38bdf8);
    const goldColor = new THREE.Color(0xffa028);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.3) * 14;
      particlePos[i * 3 + 1] = (Math.random() - 0.4) * 8;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const chosen = Math.random() > 0.4 ? cyanColor : goldColor;
      particleColors[i * 3] = chosen.r;
      particleColors[i * 3 + 1] = chosen.g;
      particleColors[i * 3 + 2] = chosen.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.075,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Responsive Viewport Physics & Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isVisibleInViewport = true;
    let animationFrameId = null;
    let clock = new THREE.Clock();

    // Pointer Move Handler (Desktop Mouse & Mobile Touch)
    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouseX = (clientX / window.innerWidth) * 2 - 1;
      mouseY = -(clientY / window.innerHeight) * 2 + 1;
    };

    // Passive listener on window so normal vertical scroll is never blocked
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
      const currentScrollY = window.pageYOffset || window.scrollY || 0;

      // Smooth damped rotation target
      targetX += (mouseX * 0.18 - targetX) * 0.045;
      targetY += (mouseY * 0.12 - targetY) * 0.045;

      // Subtle solar panel tilt responsiveness
      solarGroup.rotation.y = -0.45 + targetX + Math.sin(elapsedTime * 0.4) * 0.03;
      solarGroup.rotation.x = -0.32 - targetY + Math.cos(elapsedTime * 0.3) * 0.02;

      // Scroll-linked camera parallax
      const scrollOffset = currentScrollY * 0.0018;
      camera.position.y = 0.5 - scrollOffset * 0.8;
      camera.position.z = 9.5 - scrollOffset * 1.5;

      // Floating particles motion
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(elapsedTime * 0.6 + i) * 0.003;
        positions[i * 3] += Math.cos(elapsedTime * 0.4 + i) * 0.002;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Subtle cyan light oscillation
      cyanLight.position.x = -5 + Math.sin(elapsedTime * 0.8) * 0.6;
      cyanLight.position.y = -2 + Math.cos(elapsedTime * 0.7) * 0.4;

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

    // Intersection Observer to pause rendering when Hero is scrolled out of view
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

    // Responsive Canvas Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;

      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);

      // Adaptive positioning based on screen width
      if (newW < 768) {
        solarGroup.position.set(0, -0.6, -1.5);
        solarGroup.scale.set(0.72, 0.72, 0.72);
      } else if (newW < 1200) {
        solarGroup.position.set(1.2, -0.5, -0.5);
        solarGroup.scale.set(0.85, 0.85, 0.85);
      } else {
        solarGroup.position.set(2.8, -0.4, 0);
        solarGroup.scale.set(1, 1, 1);
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    startAnimation();

    // 9. Clean Lifecycle Teardown
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
      className="hero-solar-3d-canvas-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
