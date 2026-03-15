import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Sparkles, Trophy, Globe, Zap, Cpu, ArrowRight, Activity, Layers, Fingerprint } from 'lucide-react';

const AI_Avatar = () => {
    return (
        <Float speed={5} rotationIntensity={2} floatIntensity={2}>
            <mesh>
                <sphereGeometry args={[1.2, 64, 64]} />
                <MeshDistortMaterial
                    color="#6C63FF"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    metalness={0.8}
                />
            </mesh>
            <Text
                position={[0, 2.5, 0]}
                fontSize={0.4}
                color="white"
                anchorX="center"
                anchorY="middle"
                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
            >
                OSCAR-9 AI MENTOR
            </Text>
        </Float>
    );
};

const Metaverse = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[calc(100vh-140px)] flex flex-col gap-8 max-w-[1600px] mx-auto px-4 py-8 font-inter pb-20"
        >
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-slate-100 pb-16">
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-premium-sm text-primary text-[10px] font-black uppercase tracking-[0.25em]"
                    >
                        <Globe size={14} className="animate-pulse" /> Immersive Neural Mapping Active
                    </motion.div>
                    <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                        Learning <br />
                        <span className="text-gradient-ai">Metaverse</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button className="h-16 px-8 bg-white border-2 border-slate-50 rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-slate-200 transition-all shadow-sm">
                        <GraduationCap size={18} /> Sync Classroom
                    </button>
                    <button className="h-16 px-10 bg-slate-900 text-white rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl shadow-slate-900/40">
                        <Sparkles size={18} fill="currentColor" /> Generate Simulation
                    </button>
                </div>
            </header>

            <div className="flex-1 bg-slate-950 rounded-[5rem] border-4 border-white shadow-[0_64px_128px_-32px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none z-10" />

                <Suspense fallback={
                    <div className="flex flex-col items-center justify-center h-full text-white space-y-6">
                        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                        <p className="font-black text-[10px] uppercase tracking-[0.5em] text-primary">Initializing Neural Lattice</p>
                    </div>
                }>
                    <Canvas shadows dpr={[1, 2]}>
                        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
                        <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 10, 10]} intensity={1.5} color="#6C63FF" />
                        <spotLight position={[-10, 20, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />

                        <AI_Avatar />

                        <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                            <planeGeometry args={[150, 150]} />
                            <meshStandardMaterial color="#020617" transparent opacity={0.6} metalness={0.9} roughness={0.1} />
                        </mesh>

                        <gridHelper args={[100, 50, "#1e293b", "#0f172a"]} position={[0, -2.4, 0]} />
                    </Canvas>
                </Suspense>

                {/* Overlay UI - Left */}
                <div className="absolute top-12 left-12 p-12 bg-slate-900/60 backdrop-blur-3xl rounded-[4rem] border border-white/10 text-white w-96 shadow-2xl z-20 group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="flex items-center gap-6 mb-10">
                        <div className="p-4 bg-primary/20 rounded-2xl border border-primary/30">
                            <Cpu size={28} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Simulation Active</p>
                            <h4 className="text-3xl font-black tracking-tighter">Quantum Lattice</h4>
                        </div>
                    </div>

                    <p className="text-sm font-bold text-slate-400 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                        Real-time visualization of multi-body particle interaction across 11 cognitive dimensions.
                    </p>

                    <div className="mt-12 space-y-8">
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Cognitive Load</span>
                                <span className="text-primary font-black text-sm">88% Optimal</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '88%' }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Focus Depth</span>
                                <span className="text-accent font-black text-sm">Alpha Sync</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '94%' }}
                                    transition={{ duration: 1.5, delay: 1.2 }}
                                    className="h-full bg-accent"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="w-full mt-12 h-18 bg-white/10 border border-white/10 rounded-3xl flex items-center justify-center gap-4 font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all group">
                        Adjust Heuristic <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                {/* Overlay UI - Bottom Right */}
                <div className="absolute bottom-12 right-12 flex gap-8 z-20">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-10 bg-white/95 backdrop-blur-3xl rounded-[4rem] border-2 border-white shadow-premium-lg flex items-center gap-8 group/stat"
                    >
                        <div className="w-20 h-20 rounded-[2.5rem] bg-amber-50 text-amber-500 flex items-center justify-center border border-amber-100 group-hover:rotate-12 transition-transform shadow-sm">
                            <Trophy size={36} strokeWidth={2.5} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Matrix Standing</p>
                            <p className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Grandmaster</p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-4">
                        {[Zap, Shield, Globe].map((Icon, i) => (
                            <button key={i} className="w-16 h-16 bg-slate-900 border-2 border-white/20 text-white rounded-[1.8rem] flex items-center justify-center hover:bg-primary hover:scale-110 transition-all shadow-2xl group">
                                <Icon size={24} className="group-hover:animate-pulse" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Metaverse;
