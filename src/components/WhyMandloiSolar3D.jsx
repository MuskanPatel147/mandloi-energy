import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable, prefersReducedMotion } from '../utils/webgl';

/**
 * WhyMandloiSolar3D — Real-Time 3D Clean-Energy Moving Environment
 * Primary 3D WebGL experience for the "Why Mandloi Energy" section.
 * Features continuous automatic rotation, orbiting photon particles,
 * dynamic solar lighting, and touch/mouse responsive depth.
 */
export default function WhyMandloiSolar3D() {
  const containerRef = useRef(null);
  const isAvailable = isWebGLAvailable();

  useEffect(() => {
    if (!isAvailable || !containerRef.current) return;
    const container = containerRef.current;

    const reducedMotion = prefersReducedMotion();

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06090e, 0.04);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 700;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.opacity = '0.75';

    // 3. Dynamic Solar Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1424, 1.6);
    scene.add(ambientLight);

    // Orbiting Solar Sun Key Light
    const sunLight = new THREE.PointLight(0xffa028, 3.2, 25);
    sunLight.position.set(4, 5, 4);
    scene.add(sunLight);

    // Cyan Technology Fill Light
    const cyanLight = new THREE.PointLight(0x38bdf8, 2.4, 25);
    cyanLight.position.set(-4, -4, 3);
    scene.add(cyanLight);

    // 4. Central 3D Solar Matrix & Clean-Energy Structure
    const solarStructure = new THREE.Group();
    scene.add(solarStructure);

    // Central Crystalline Solar Icosahedron Core
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0a1828,
      emissive: 0x051a2e,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    solarStructure.add(coreMesh);

    // Wireframe Lattice Cage
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    solarStructure.add(wireMesh);

    // Concentric Gyroscopic Solar Orbit Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xffa028,
      transparent: true,
      opacity: 0.4,
      wireframe: true,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.015, 8, 64);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 4;
    solarStructure.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.2, 0.015, 8, 64);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3;
    solarStructure.add(ring2);

    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xffa028,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const ringGeo3 = new THREE.TorusGeometry(4.0, 0.012, 8, 64);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = Math.PI / 6;
    solarStructure.add(ring3);

    // 5. Flowing 3D Photon Energy Particles
    const particleCount = window.innerWidth < 768 ? 45 : 85;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleRadii = new Float32Array(particleCount);
    const particleSpeeds = new Float32Array(particleCount);
    const particleAngles = new Float32Array(particleCount);

    const cyanColor = new THREE.Color(0x38bdf8);
    const goldColor = new THREE.Color(0xffa028);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.8 + Math.random() * 3.2;
      const angle = Math.random() * Math.PI * 2;
      particleRadii[i] = r;
      particleSpeeds[i] = (0.2 + Math.random() * 0.3) * (Math.random() > 0.5 ? 1 : -1);
      particleAngles[i] = angle;

      particlePos[i * 3] = Math.cos(angle) * r;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
      particlePos[i * 3 + 2] = Math.sin(angle) * r;

      const chosen = Math.random() > 0.45 ? cyanColor : goldColor;
      particleColors[i * 3] = chosen.r;
      particleColors[i * 3 + 1] = chosen.g;
      particleColors[i * 3 + 2] = chosen.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interaction Tracking & Viewport Gating
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
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

    // 7. Continuous Seamless Animation Loop (Automatic Motion)
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

      // Smooth interaction interpolation
      targetX += (mouseX * 0.22 - targetX) * 0.045;
      targetY += (mouseY * 0.15 - targetY) * 0.045;

      // CONTINUOUS AUTOMATIC ROTATION (Smooth, seamless loop)
      solarStructure.rotation.y = elapsedTime * 0.18 + targetX;
      solarStructure.rotation.x = Math.sin(elapsedTime * 0.12) * 0.15 - targetY;
      solarStructure.rotation.z = Math.cos(elapsedTime * 0.15) * 0.08;

      // Gyroscopic Ring Rotations
      ring1.rotation.y = elapsedTime * 0.22;
      ring2.rotation.x = -elapsedTime * 0.18;
      ring3.rotation.z = elapsedTime * 0.14;

      // Orbiting Light Dynamics
      sunLight.position.x = Math.cos(elapsedTime * 0.4) * 6;
      sunLight.position.z = Math.sin(elapsedTime * 0.4) * 6;
      cyanLight.position.x = -Math.cos(elapsedTime * 0.35) * 5;
      cyanLight.position.z = -Math.sin(elapsedTime * 0.35) * 5;

      // Orbiting Photon Energy Particles (Continuous Elliptical Paths)
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        particleAngles[i] += particleSpeeds[i] * 0.02;
        const r = particleRadii[i];
        positions[i * 3] = Math.cos(particleAngles[i]) * r;
        positions[i * 3 + 1] = Math.sin(elapsedTime * 0.5 + i) * 0.9 + Math.sin(particleAngles[i] * 2) * 0.4;
        positions[i * 3 + 2] = Math.sin(particleAngles[i]) * r;
      }
      particleGeo.attributes.position.needsUpdate = true;

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
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || 700;

      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);

      if (newW < 768) {
        solarStructure.scale.set(0.68, 0.68, 0.68);
        camera.position.z = 10;
      } else if (newW < 1200) {
        solarStructure.scale.set(0.85, 0.85, 0.85);
        camera.position.z = 9.5;
      } else {
        solarStructure.scale.set(1.05, 1.05, 1.05);
        camera.position.z = 9;
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    startAnimation();

    // 8. Clean Lifecycle Teardown
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
      className="why-mandloi-solar-3d-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
