import React from 'react';
import {
    AlertTriangle, Shield, TrendingUp, Zap, Target,
    ArrowRight, Activity, Brain, Rocket, Clock,
    Download, RefreshCw, BarChart
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';

const RiskPrediction = () => {
    const projectionData = [
        { name: 'Start', current: 65, project: 65 },
        { name: 'Cycle 1', current: 72, project: 75 },
        { name: 'Cycle 2', current: 78, project: 82 },
        { name: 'Cycle 3', project: 88 },
        { name: 'End', project: 92 },
    ];

    const radarData = [
        { subject: 'Consistency', A: 85, fullMark: 100 },
        { subject: 'Attention', A: 72, fullMark: 100 },
        { subject: 'Retention', A: 90, fullMark: 100 },
        { subject: 'Speed', A: 65, fullMark: 100 },
        { subject: 'Accuracy', A: 88, fullMark: 100 },
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
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-rose-50 border border-rose-100 shadow-sm text-rose-500 text-[10px] font-black uppercase tracking-[0.25em]"
                    >
                        <AlertTriangle size={14} className="animate-pulse" /> Risk Vector Analysis Active
                    </motion.div>
                    <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                        Risk <br />
                        <span className="text-gradient-ai">Forecast</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button className="h-16 px-8 bg-slate-50 border-2 border-white rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-slate-200 transition-all shadow-sm">
                        <RefreshCw size={18} /> Re-Calculate
                    </button>
                    <button className="h-16 px-8 bg-rose-500 text-white rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-all shadow-2xl shadow-rose-500/20">
                        <Target size={18} /> Action Plan
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Grade Projection */}
                <div className="lg:col-span-2 pro-card !p-12 !rounded-[4.5rem] bg-white border-slate-50 overflow-hidden group">
                    <div className="flex justify-between items-center mb-16 relative z-10">
                        <div className="space-y-1">
                            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Grade Trajectory</h3>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Synaptic performance forecasting</p>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Current</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Projected</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-[400px] w-full relative z-10">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={projectionData}>
                                <defs>
                                    <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#6C63FF" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }} dy={10} />
                                <YAxis hide domain={[0, 100]} />
                                <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 32px 64px -16px rgba(0,0,0,0.06)', padding: '20px' }} />
                                <Area type="monotone" dataKey="project" stroke="#f1f5f9" strokeWidth={3} fill="none" strokeDasharray="10 10" />
                                <Area type="monotone" dataKey="current" stroke="#6C63FF" strokeWidth={5} fillOpacity={1} fill="url(#colorCurrent)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Risk Radar */}
                <div className="pro-card !p-12 !rounded-[4.5rem] bg-slate-50 border-slate-100 flex flex-col items-center justify-between group">
                    <div className="w-full space-y-2 text-center mb-8">
                        <h3 className="text-xl font-black uppercase tracking-tighter">Cognitive Vectors</h3>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Stability Analysis</p>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                <PolarGrid stroke="#e2e8f0" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 9, fontWeight: 900 }} />
                                <Radar name="Profile" dataKey="A" stroke="#F43F5E" strokeWidth={2} fill="#F43F5E" fillOpacity={0.1} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-8 p-6 bg-white rounded-3xl border border-slate-100 w-full group-hover:scale-105 transition-transform shadow-sm">
                        <div className="flex items-center gap-4 text-rose-500 mb-2">
                            <Activity size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Critical Alert</span>
                        </div>
                        <p className="text-xs font-bold text-slate-600 leading-relaxed">
                            Synaptic speed has dropped by <span className="text-rose-500">8%</span> in the last session. Mitigation recommended.
                        </p>
                    </div>
                </div>
            </div>

            {/* AI Action Plan */}
            <div className="pro-card !p-16 !rounded-[5rem] bg-slate-900 text-white border-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-[3s]">
                    <Activity size={300} strokeWidth={0.5} />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10 mb-20">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/20 rounded-full text-[10px] font-black text-primary uppercase tracking-[0.3em] border border-primary/30">
                            <Rocket size={14} className="animate-pulse" /> Strategic Recovery
                        </div>
                        <h3 className="text-5xl font-black uppercase tracking-tighter leading-none">Neural Recovery <span className="text-primary italic">Plan</span></h3>
                    </div>
                    <button className="h-18 px-12 bg-white text-slate-900 rounded-[2rem] font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-2xl flex items-center gap-4">
                        Initialize Rescue Cycle <ArrowRight size={20} strokeWidth={3} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                    {[
                        { title: 'Focus Sprint', desc: '15-minute high-intensity logic block with neuro-audio assistance.', icon: Target, time: '15m' },
                        { title: 'Pattern Flush', desc: 'Refresh cognitive caches via rapid visual synthesis training.', icon: Activity, time: '10m' },
                        { title: 'Gap Fill', desc: 'Targeted AI content generation for weak retention nodes.', icon: Brain, time: '20m' }
                    ].map((step, i) => (
                        <div key={i} className="p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group/step">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover/step:text-primary transition-colors">
                                <step.icon size={28} />
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xl font-black uppercase tracking-tight">{step.title}</h4>
                                    <span className="text-[10px] font-bold opacity-40 italic">{step.time}</span>
                                </div>
                                <p className="text-sm text-slate-400 font-bold leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default RiskPrediction;
