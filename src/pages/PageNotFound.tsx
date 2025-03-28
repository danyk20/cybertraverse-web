import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

const PageNotFound: React.FC = () => {
    const navigate = useNavigate();
    const canvasContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const colors = ["#0acf9d", "#ff0000", "#00ffff", "#ff00ff"];

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;
            alpha: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.alpha = Math.random();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                const r = parseInt(this.color.slice(1, 3), 16);
                const g = parseInt(this.color.slice(3, 5), 16);
                const b = parseInt(this.color.slice(5, 7), 16);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function createParticles() {
            for (let i = 0; i < 200; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!ctx || !canvas) return;

            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        createParticles();
        animate();

        const handleResize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);



        if (!canvasContainerRef.current) return;

        // Set up the scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x0B0E13, 0.1);
        canvasContainerRef.current.appendChild(renderer.domElement);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040, 5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x4ADE80, 5);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const pointLight2 = new THREE.PointLight(0x4ADE80, 100);
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
            opacity: 1
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
        const handleResize_cubes = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize_cubes);

        // Animation loop
        function animate_cubes() {
            requestAnimationFrame(animate_cubes);

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

        animate_cubes();

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', () => { isDragging = true; });
            document.removeEventListener('mouseup', () => { isDragging = false; });
            document.removeEventListener('mousemove', () => {});
            document.removeEventListener('touchstart', () => {});
            document.removeEventListener('touchmove', () => {});
            document.removeEventListener('touchend', () => {});
            window.removeEventListener('resize', handleResize_cubes);
            window.removeEventListener('resize', handleResize);

            if (canvasContainerRef.current) {
                while (canvasContainerRef.current.firstChild) {
                    canvasContainerRef.current.removeChild(canvasContainerRef.current.firstChild);
                }
            }

            renderer.dispose();
        };
    }, []);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    return (

        <div className="min-h-screen bg-[#1A1F2C] flex flex-col items-center justify-center p-4 overflow-hidden">
            <canvas
                ref={canvasRef}
                id="particle-background"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 0, // Ensures it stays behind other content
                    display: 'block'
                }}
            />
            <div ref={canvasContainerRef} className="absolute inset-0 z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="z-10 max-w-md w-full"
            >
                <div className="bg-[#1A1F2C]/70 backdrop-blur-md rounded-lg border border-primary/80 p-8 text-center shadow-xl">
                    <h2 className="text-3xl font-bold text-white mb-4">ACCESS DENIED</h2>
                    <p className="text-gray-300 mb-8">
                        The path you entered doesn't exist or isn't publicly available yet. I'm constantly building new content.
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
