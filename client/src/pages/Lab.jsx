import React from 'react';
import {
    Terminal, Zap, Sparkles, Code, Cpu, Activity,
    FlaskConical, ArrowRight, Play, Database, Search,
    Layers, Fingerprint, Box
} from 'lucide-react';
import { motion } from 'framer-motion';

const Lab = () => {
    const experiments = [
        {
            title: 'Prompt Sandbox',
            desc: 'Test LLM responses with multi-vector system prompts and context injection.',
            icon: MessageSquareIcon,
            color: 'text-primary',
            bg: 'bg-primary/5',
            status: 'Ready'
        },
        {
            title: 'Neural Visualizer',
            desc: '3D rendering of model weight distributions and attention head activations.',
            icon: Box,
            color: 'text-secondary',
            bg: 'bg-secondary/5',
            status: 'Internal Beta'
        },
        {
            title: 'Dataset Forge',
            desc: 'Generate high-fidelity synthetic data for specific domain fine-tuning.',
            icon: Database,
            color: 'text-accent',
            bg: 'bg-accent/5',
            status: 'Alpha'
        }
    ];

    const logs = [
        { node: 'Head-12', event: 'Attention Divergence', status: 'Stable', latency: '2ms' },
        { node: 'Layer-4', event: 'Gradient Synthesis', status: 'Optimizing', latency: '15ms' },
        { node: 'Output-X', event: 'Vector Collapse', status: 'Safeguarded', latency: '1ms' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16 max-w-7xl mx-auto px-4 py-8 font-inter pb-20"
        >
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-slate-100 pb-16">
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-premium-sm text-primary text-[10px] font-black uppercase tracking-[0.25em]"
                    >
                        <FlaskConical size={14} className="animate-pulse" /> Neural Prototype Lab
                    </motion.div>
                    <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                        Academic <br />
                        <span className="text-gradient-ai">Forge</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button className="h-16 px-8 bg-slate-50 border-2 border-white rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-slate-200 transition-all shadow-sm">
                        <Database size={18} /> Node Assets
                    </button>
                    <button className="h-16 px-8 bg-primary rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white hover:shadow-primary/40 transition-all shadow-xl">
                        <Play size={18} fill="currentColor" /> Initiate Multi-Cycle
                    </button>
                </div>
            </header>

            {/* Experiment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {experiments.map((exp, index) => {
                    const Icon = exp.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="pro-card group cursor-pointer overflow-hidden border-none !rounded-[4rem] flex flex-col justify-between"
                        >
                            <div className="p-12 space-y-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-[2s] -z-10 text-slate-900">
                                    <Fingerprint size={140} />
                                </div>
                                <div className={`w-18 h-18 rounded-[2rem] ${exp.bg} ${exp.color} border-2 border-white shadow-premium-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    <Icon size={32} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">{exp.title}</h3>
                                    <p className="text-sm font-bold text-slate-500 leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="px-12 pb-12">
                                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border-2 border-white shadow-inner group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                                    <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 group-hover:text-primary">{exp.status}</span>
                                    <ArrowRight className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} strokeWidth={3} />
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Neural Visualizer Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 pro-card !p-12 !rounded-[4.5rem] bg-slate-950 text-white border-none relative overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-30 group-hover:scale-125 transition-transform duration-[4s]" />
                    <div className="flex justify-between items-center mb-16 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="p-4 rounded-3xl bg-white/5 border border-white/10 text-primary">
                                <Activity size={32} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-3xl font-black uppercase tracking-tighter">Neural Stream</h3>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Real-time weight activation telemetry</p>
                            </div>
                        </div>
                        <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                            Filter Nodes
                        </button>
                    </div>

                    <div className="space-y-8 relative z-10">
                        {logs.map((log, i) => (
                            <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-3xl group/log cursor-pointer hover:bg-white/5 transition-all">
                                <div className="flex items-center gap-10">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest w-20">{log.node}</span>
                                    <div className="w-[1px] h-6 bg-white/10" />
                                    <span className="text-sm font-bold text-slate-100">{log.event}</span>
                                </div>
                                <div className="flex items-center gap-10">
                                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{log.latency}</span>
                                    <div className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border ${log.status === 'Optimizing' ? 'bg-primary/20 border-primary/40 text-primary animate-pulse' : 'bg-success/10 border-success/30 text-success'}`}>
                                        {log.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/5 relative z-10 flex items-center justify-between">
                        <div className="flex gap-16">
                            <div className="space-y-1">
                                <p className="text-[32px] font-black tracking-tighter text-white">4.2 TFlops</p>
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Neural Compute Velocity</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[32px] font-black tracking-tighter text-secondary">82%</p>
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Efficiency Overclock</p>
                            </div>
                        </div>
                        <button className="h-16 px-12 bg-white text-slate-900 rounded-[1.8rem] font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl">
                            Overclock Core
                        </button>
                    </div>
                </div>

                <div className="space-y-10">
                    <div className="pro-card !p-12 !rounded-[4.5rem] bg-white border-slate-100 flex flex-col justify-between group h-fit min-h-[400px]">
                        <div className="space-y-10">
                            <div className="w-16 h-16 rounded-[1.8rem] bg-primary/5 text-primary border-2 border-white shadow-premium-md flex items-center justify-center group-hover:rotate-12 transition-transform">
                                <Layers size={32} />
                            </div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Multi-Layer <br /> Synthesis</h4>
                            <p className="text-sm font-bold text-slate-500 leading-relaxed border-l-4 border-primary pl-6">
                                Experiments here directly influence your neural digital twin's strategic performance algorithms.
                            </p>
                        </div>
                        <button className="btn-premium w-full mt-10">Sync Results</button>
                    </div>

                    <div className="pro-card !p-12 !rounded-[4rem] bg-slate-50 border-slate-100 group relative overflow-hidden">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                <Cpu size={24} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Node Status</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                                <span className="text-slate-900">Lab Sync</span>
                                <span className="text-primary">Live</span>
                            </div>
                            <div className="h-2 bg-white rounded-full overflow-hidden border border-slate-100">
                                <motion.div animate={{ x: [-100, 300] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Mock for missing icon in my snippet
const MessageSquareIcon = ({ size }) => <MessageSquare size={size} />;
import { MessageSquare } from 'lucide-react';

export default Lab;
