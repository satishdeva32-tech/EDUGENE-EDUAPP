import React from 'react';
import {
    Activity, Brain, Zap, Shield, Target, TrendingUp,
    ArrowRight, Maximize2, RefreshCw, Layers, Database,
    Cpu, Radio, Fingerprint
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';

const DigitalTwin = () => {
    const cognitiveData = [
        { subject: 'Memory', value: 85, fullMark: 100 },
        { subject: 'Logic', value: 92, fullMark: 100 },
        { subject: 'Speed', value: 78, fullMark: 100 },
        { subject: 'Focus', value: 88, fullMark: 100 },
        { subject: 'Creative', value: 95, fullMark: 100 },
    ];

    const growthData = [
        { name: 'W1', value: 400 },
        { name: 'W2', value: 300 },
        { name: 'W3', value: 600 },
        { name: 'W4', value: 800 },
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
                        <Activity size={14} className="animate-pulse" /> Neural Clone Active
                    </motion.div>
                    <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                        Digital <br />
                        <span className="text-gradient-ai">Twin</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button className="h-16 px-8 bg-slate-50 border-2 border-white rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-slate-200 transition-all shadow-sm">
                        <RefreshCw size={18} /> Sync State
                    </button>
                    <button className="h-16 px-8 bg-slate-900 text-white rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl shadow-slate-900/40">
                        <Maximize2 size={18} /> Deep Dive
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cognitive Radar */}
                <div className="lg:col-span-2 pro-card !p-12 !rounded-[4.5rem] bg-white border-slate-50 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-[2s] -z-10">
                        <Fingerprint size={280} />
                    </div>
                    <div className="flex justify-between items-center mb-16 relative z-10">
                        <div className="space-y-1">
                            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Cognitive Profile</h3>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Multi-dimensional synaptic mapping</p>
                        </div>
                        <div className="px-6 py-2 bg-slate-50 rounded-2xl border border-slate-100 text-[10px] font-black text-primary uppercase tracking-widest">
                            Sync Stability: 98.4%
                        </div>
                    </div>
                    <div className="h-[450px] w-full relative z-10">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={cognitiveData}>
                                <PolarGrid stroke="#f1f5f9" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 900 }} />
                                <PolarRadiusAxis hide />
                                <Radar name="Digital Twin" dataKey="value" stroke="#6C63FF" strokeWidth={3} fill="#6C63FF" fillOpacity={0.1} />
                                <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 32px 64px -16px rgba(0,0,0,0.15)', padding: '24px' }} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Strategy Cards */}
                <div className="space-y-10">
                    <div className="pro-card !p-10 !rounded-[4rem] bg-slate-900 text-white border-none relative overflow-hidden group shadow-2xl shadow-slate-900/40">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-[2s] -z-10">
                            <Layers size={140} />
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-8 flex items-center gap-3 relative z-10 text-primary">
                            <Zap size={20} fill="currentColor" /> Neural Overclock
                        </h3>
                        <p className="text-sm font-bold text-slate-400 mb-10 relative z-10 leading-relaxed italic">
                            Your digital twin suggests a <span className="text-white">15% load increase</span> in Logic Synthesis to reach the Next-Level Alpha state.
                        </p>
                        <button className="w-full h-16 bg-white/5 border border-white/10 rounded-3xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">
                            Accept Prediction
                        </button>
                    </div>

                    <div className="pro-card !p-10 !rounded-[4rem] bg-white border-slate-100 flex flex-col justify-center gap-8 group">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary border-2 border-white shadow-premium-md flex items-center justify-center group-hover:rotate-12 transition-transform">
                                <Database size={28} />
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-slate-900 uppercase italic">Memory Hub</h4>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cached Logic Units: 4k</p>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-slate-500 leading-relaxed border-l-4 border-primary pl-4 py-1">
                            Your long-term retention nodes have stabilized by <span className="text-primary">+12.4%</span> since the last sync.
                        </p>
                    </div>
                </div>
            </div>

            {/* Growth Visualization */}
            <div className="pro-card !p-16 !rounded-[5rem] overflow-hidden relative group">
                <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 -z-10" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 relative z-10">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-secondary/5 rounded-full text-[10px] font-black text-secondary uppercase tracking-[0.3em] border border-secondary/10">
                            <TrendingUp size={14} className="animate-pulse" /> Alpha Trajectory
                        </div>
                        <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">Synapse Growth</h3>
                        <p className="text-lg text-slate-500 font-bold">Scaling Velocity across Knowledge Cycles</p>
                    </div>
                </div>

                <div className="h-64 w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#6C63FF" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }} />
                            <YAxis hide />
                            <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 32px 64px -16px rgba(0,0,0,0.06)', padding: '20px' }} />
                            <Area type="monotone" dataKey="value" stroke="#6C63FF" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    );
};

export default DigitalTwin;
