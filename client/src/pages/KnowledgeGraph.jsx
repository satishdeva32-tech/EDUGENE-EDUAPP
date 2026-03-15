import React from 'react';
import {
    Network, Search, Filter, Maximize2, ZoomIn, ZoomOut,
    Layers, Zap, Brain, Activity, Globe, Share2,
    Database, Cpu, Radio, Fingerprint, Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const KnowledgeGraph = () => {
    const nodes = [
        { id: 1, label: 'React.js', depth: 0, color: 'primary' },
        { id: 2, label: 'Vite', depth: 1, color: 'secondary' },
        { id: 3, label: 'Tailwind', depth: 1, color: 'accent' },
        { id: 4, label: 'Framer Motion', depth: 2, color: 'success' },
        { id: 5, label: 'Redux', depth: 2, color: 'primary' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16 max-w-7xl mx-auto px-4 py-8 font-inter pb-20"
        >
            {/* Header section */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-slate-100 pb-16">
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-premium-sm text-primary text-[10px] font-black uppercase tracking-[0.25em]"
                    >
                        <Network size={14} className="animate-pulse" /> Multi-Layer Knowledge Mesh
                    </motion.div>
                    <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                        Knowledge <br />
                        <span className="text-gradient-ai">Graph</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <div className="search-wrapper group w-80">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary" size={20} />
                        <input
                            type="text"
                            placeholder="Find Node..."
                            className="search-input !h-16 !pl-16 !bg-white !border-slate-50 shadow-sm"
                        />
                    </div>
                    <button className="h-16 px-8 bg-slate-900 text-white rounded-[1.8rem] flex items-center justify-center gap-3 shadow-2xl shadow-slate-900/40">
                        <Maximize2 size={18} />
                    </button>
                </div>
            </header>

            {/* Main Graph Visualizer */}
            <div className="pro-card !p-12 !rounded-[5rem] bg-white border-slate-50 h-[650px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(#f1f5f9_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40" />

                {/* Visualizer Controls */}
                <div className="absolute top-12 left-12 flex flex-col gap-6 z-10">
                    <button className="w-16 h-16 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center text-slate-400 hover:text-primary shadow-sm hover:border-primary/20 transition-all group/btn">
                        <ZoomIn size={24} />
                    </button>
                    <button className="w-16 h-16 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center text-slate-400 hover:text-primary shadow-sm hover:border-primary/20 transition-all">
                        <ZoomOut size={24} />
                    </button>
                    <button className="w-16 h-16 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center text-slate-400 hover:text-primary shadow-sm hover:border-primary/20 transition-all">
                        <Layers size={24} />
                    </button>
                </div>

                <div className="absolute bottom-12 right-12 z-10">
                    <div className="pro-card !p-8 !rounded-[2.5rem] bg-white/80 backdrop-blur-3xl border-white/50 shadow-premium-lg flex items-center gap-8 group/info">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Nodes</span>
                            <span className="text-2xl font-black text-slate-900 tracking-tighter">1,248</span>
                        </div>
                        <div className="w-[1px] h-8 bg-slate-100" />
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Growth Velocity</span>
                            <span className="text-2xl font-black text-primary tracking-tighter">+12%</span>
                        </div>
                    </div>
                </div>

                {/* Mock Nodes - Replaced with motion elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {nodes.map((node, i) => (
                            <motion.div
                                key={node.id}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: (i - 2) * 200,
                                    y: (i % 2 === 0 ? 1 : -1) * 100
                                }}
                                whileHover={{ scale: 1.1, zIndex: 50 }}
                                className={`absolute p-8 pro-card !rounded-[3rem] bg-white border-2 border-white shadow-premium-lg cursor-pointer group/node`}
                            >
                                <div className="flex flex-col items-center gap-4 text-center">
                                    <div className={`w-14 h-14 rounded-2xl bg-${node.color}/10 text-${node.color} flex items-center justify-center`}>
                                        <Sparkles size={24} fill="currentColor" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">{node.label}</h4>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Lvl {10 - node.depth} Mastery</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-opacity bg-slate-900 text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                                    Click to Expand Node
                                </div>
                            </motion.div>
                        ))}
                        {/* Mock Connections */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
                            <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" className="text-primary" />
                            <line x1="30%" y1="30%" x2="70%" y2="70%" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" className="text-secondary" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Insight Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="pro-card !p-12 !rounded-[4.5rem] bg-slate-900 text-white border-none relative overflow-hidden group shadow-2xl shadow-slate-900/40">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-[2s]">
                        <Brain size={180} className="text-primary" />
                    </div>
                    <div className="space-y-10 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="p-4 rounded-2xl bg-white/10 ring-1 ring-white/20">
                                <Zap size={24} className="text-primary" fill="currentColor" />
                            </div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">AI Insight <br /> Extraction</h4>
                        </div>
                        <p className="text-sm font-bold text-slate-400 leading-relaxed italic">
                            "EduGenie has identified a <span className="text-white">critical nexus</span> between your Knowledge Graph and the latest AI Industry standards."
                        </p>
                        <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-primary group/link">
                            Expand Analysis <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="pro-card !p-12 !rounded-[4.5rem] bg-slate-50 border-white flex flex-col justify-between group shadow-inner">
                    <div className="space-y-10">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-premium-md border-2 border-white flex items-center justify-center text-primary group-hover:rotate-12 transition-transform">
                                <Globe size={28} />
                            </div>
                            <h4 className="text-xl font-black uppercase tracking-tighter">Global Mesh</h4>
                        </div>
                        <p className="text-sm font-bold text-slate-500 leading-relaxed border-l-4 border-primary pl-6 py-1">
                            Your nodes are synchronized across 4 primary academic clusters in the global knowledge web.
                        </p>
                    </div>
                    <div className="space-y-4 pt-10">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-slate-400 font-bold uppercase">Mesh Load</span>
                            <span className="text-slate-900">42%</span>
                        </div>
                        <div className="h-2 bg-white rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '42%' }} className="h-full bg-primary" />
                        </div>
                    </div>
                </div>

                <div className="pro-card !p-12 !rounded-[4.5rem] space-y-10 flex flex-col items-center justify-center text-center group">
                    <div className="w-24 h-24 rounded-[2.5rem] bg-white border-2 border-slate-50 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:border-primary/20 shadow-premium-lg transition-all">
                        <Share2 size={36} />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-black uppercase tracking-tighter">Export Mapping</h4>
                        <p className="text-sm font-bold text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                            Share your cognitive map with mentors or industry recruiters.
                        </p>
                    </div>
                    <button className="h-16 w-full bg-slate-900 text-white rounded-[1.8rem] font-black uppercase text-[10px] tracking-widest hover:bg-primary transition-all shadow-xl">
                        Generate Public Link
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default KnowledgeGraph;
