import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

const PageNotFound: React.FC = () => {
    const navigate = useNavigate();
    const canvasContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasContainerRef.current) return;

        // Set up the scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x1A1F2C, 1);
        canvasContainerRef.current.appendChild(renderer.domElement);
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0x4ADE80, 2);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);
        
        const pointLight2 = new THREE.PointLight(0x4ADE80, 1);
        pointLight2.position.set(-5, -5, -5);
        scene.add(pointLight2);
        
        // Create objects that represent "404"
        const cubes = [];
        const targets = [];
        
        // Create a group of floating cubes that will form a 404 shape when aligned
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x4ADE80,
            metalness: 0.5,
            roughness: 0.1,
            transparent: true,
            opacity: 0.7
        });
        
        // Create a formation that looks like "404"
        const formation = [
            // "4"
            {x: -3, y: 2, z: 0}, {x: -3, y: 1, z: 0}, {x: -3, y: 0, z: 0}, {x: -3, y: -1, z: 0},
            {x: -2, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: -1, y: 2, z: 0}, {x: -1, y: 1, z: 0}, {x: -1, y: -1, z: 0},
            // "0"
            {x: 0.5, y: 2, z: 0}, {x: 0.5, y: 1, z: 0}, {x: 0.5, y: 0, z: 0}, {x: 0.5, y: -1, z: 0},
            {x: 1.5, y: 2, z: 0}, {x: 1.5, y: -1, z: 0},
            {x: 2.5, y: 2, z: 0}, {x: 2.5, y: 1, z: 0}, {x: 2.5, y: 0, z: 0}, {x: 2.5, y: -1, z: 0},
            // "4"
            {x: 4, y: 2, z: 0}, {x: 4, y: 1, z: 0}, {x: 4, y: 0, z: 0}, {x: 4, y: -1, z: 0},
            {x: 5, y: 0, z: 0}, {x: 6, y: 0, z: 0}, {x: 6, y: 2, z: 0}, {x: 6, y: 1, z: 0}, {x: 6, y: -1, z: 0},
        ];
        
        // Create cubes in random positions
        for (let i = 0; i < formation.length; i++) {
            const cube = new THREE.Mesh(geometry, material);
            
            // Start at random positions
            cube.position.x = (Math.random() - 0.5) * 20;
            cube.position.y = (Math.random() - 0.5) * 20;
            cube.position.z = (Math.random() - 0.5) * 20;
            
            // Store target positions
            targets.push({
                x: formation[i].x,
                y: formation[i].y,
                z: formation[i].z
            });
            
            cube.rotation.x = Math.random() * Math.PI;
            cube.rotation.y = Math.random() * Math.PI;
            
            scene.add(cube);
            cubes.push(cube);
        }
        
        // Set camera position
        camera.position.z = 8;
        
        // Mouse interaction
        let isDragging = false;
        let previousMousePosition = {
            x: 0,
            y: 0
        };
        
        // Animation state
        let formed = false;
        let formationTimer = 0;
        const formationDelay = 150; // frames delay before formation
        
        document.addEventListener('mousedown', () => {
            isDragging = true;
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaMove = {
                    x: e.clientX - previousMousePosition.x,
                    y: e.clientY - previousMousePosition.y
                };
                
                // Rotate the entire scene based on mouse movement
                scene.rotation.y += deltaMove.x * 0.005;
                scene.rotation.x += deltaMove.y * 0.005;
            }
            
            previousMousePosition = {
                x: e.clientX,
                y: e.clientY
            };
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        // Handle touch events for mobile
        document.addEventListener('touchstart', (e) => {
            isDragging = true;
            previousMousePosition = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        });
        
        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                const deltaMove = {
                    x: e.touches[0].clientX - previousMousePosition.x,
                    y: e.touches[0].clientY - previousMousePosition.y
                };
                
                scene.rotation.y += deltaMove.x * 0.005;
                scene.rotation.x += deltaMove.y * 0.005;
            }
            
            previousMousePosition = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        });
        
        document.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Animation loop
        function animate() {
            const animationId = requestAnimationFrame(animate);
            
            if (!formed) {
                formationTimer++;
                
                if (formationTimer >= formationDelay) {
                    // Move cubes toward their formation positions
                    let allInPlace = true;
                    
                    for (let i = 0; i < cubes.length; i++) {
                        // Ease cubes toward their targets
                        cubes[i].position.x += (targets[i].x - cubes[i].position.x) * 0.05;
                        cubes[i].position.y += (targets[i].y - cubes[i].position.y) * 0.05;
                        cubes[i].position.z += (targets[i].z - cubes[i].position.z) * 0.05;
                        
                        // Slow down rotation
                        cubes[i].rotation.x *= 0.95;
                        cubes[i].rotation.y *= 0.95;
                        
                        // Check if cube is still moving significantly
                        const distanceToTarget = Math.sqrt(
                            Math.pow(targets[i].x - cubes[i].position.x, 2) +
                            Math.pow(targets[i].y - cubes[i].position.y, 2) +
                            Math.pow(targets[i].z - cubes[i].position.z, 2)
                        );
                        
                        if (distanceToTarget > 0.01) {
                            allInPlace = false;
                        }
                    }
                    
                    if (allInPlace) {
                        formed = true;
                    }
                } else {
                    // Keep cubes floating randomly until timer runs out
                    for (let i = 0; i < cubes.length; i++) {
                        cubes[i].rotation.x += 0.01;
                        cubes[i].rotation.y += 0.01;
                    }
                }
            } else {
                // After formation, gentle floating animation
                const time = Date.now() * 0.001;
                
                scene.rotation.y += 0.002;
                for (let i = 0; i < cubes.length; i++) {
                    // Subtle hover effect
                    cubes[i].position.y += Math.sin(time + i) * 0.003;
                }
            }
            
            renderer.render(scene, camera);
        }
        
        animate();

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', () => { isDragging = true; });
            document.removeEventListener('mouseup', () => { isDragging = false; });
            document.removeEventListener('mousemove', () => {});
            document.removeEventListener('touchstart', () => {});
            document.removeEventListener('touchmove', () => {});
            document.removeEventListener('touchend', () => {});
            window.removeEventListener('resize', handleResize);

            if (canvasContainerRef.current) {
                while (canvasContainerRef.current.firstChild) {
                    canvasContainerRef.current.removeChild(canvasContainerRef.current.firstChild);
                }
            }
            
            renderer.dispose();
        };
    }, []);
    
    return (
        <div className="min-h-screen bg-[#1A1F2C] flex flex-col items-center justify-center p-4 overflow-hidden">
            <div ref={canvasContainerRef} className="absolute inset-0 z-0"></div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="z-10 max-w-md w-full"
            >
                <div className="bg-[#1A1F2C]/70 backdrop-blur-md rounded-lg border border-primary/20 p-8 text-center shadow-xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
                    <p className="text-gray-300 mb-8">
                        The path you entered doesn't exist or isn't publicly available yet. We're constantly building new content.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Return Home
                    </button>
                </div>
            </motion.div>
            
            <div className="absolute bottom-4 text-xs text-gray-500 z-10">
                Click and drag to interact with the 3D objects
            </div>
        </div>
    );
};

export default PageNotFound;
