import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import {
    Download, Calendar, Filter, Target, Zap, Brain, Rocket,
    ArrowRight, Globe, TrendingUp, Award, Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

const Analytics = () => {
    const skillData = [
        { subject: 'Architecture', A: 120, B: 110, fullMark: 150 },
        { subject: 'Logic', A: 98, B: 130, fullMark: 150 },
        { subject: 'Data Flow', A: 86, B: 130, fullMark: 150 },
        { subject: 'UI Systems', A: 99, B: 100, fullMark: 150 },
        { subject: 'AI Design', A: 85, B: 90, fullMark: 150 },
        { subject: 'Deployment', A: 65, B: 85, fullMark: 150 },
    ];

    const marketData = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 800 },
        { name: 'May', value: 500 },
        { name: 'Jun', value: 900 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 max-w-7xl mx-auto px-4 py-8 font-inter pb-20"
        >
            {/* Header section */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-slate-100 pb-16">
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/10"
                    >
                        <Zap size={14} fill="currentColor" /> Live Performance Stream
                    </motion.div>
                    <h1 className="text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                        Cognitive <span className="text-gradient-ai">Vault</span>
                    </h1>
                    <p className="text-lg text-slate-500 font-bold max-w-lg">Deep-cycle analysis of your learning nodes, retention velocities, and market alignment vectors.</p>
                </div>
                <div className="flex gap-4">
                    <button className="h-16 px-8 bg-white border-2 border-slate-50 rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-slate-200 transition-all shadow-sm">
                        <Calendar size={18} /> Cycle View
                    </button>
                    <button className="h-16 px-8 bg-slate-900 border-none rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white hover:bg-primary transition-all shadow-2xl shadow-slate-900/20">
                        <Download size={18} /> Export Data
                    </button>
                </div>
            </header>

            {/* Main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Skill Mastery (Radar Chart) */}
                <div className="lg:col-span-2 pro-card !p-12 !rounded-[4.5rem] space-y-12">
                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Skill Multi-Vector</h3>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cross-domain proficiency mapping</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">You</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Avg</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-[450px] w-full mt-8">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                                <PolarGrid stroke="#f1f5f9" />
                                <PolarAngleAxis
                                    dataKey="subject"
                                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 900, textTransform: 'uppercase' }}
                                />
                                <PolarRadiusAxis hide />
                                <Radar
                                    name="Actual"
                                    dataKey="A"
                                    stroke="#6C63FF"
                                    strokeWidth={3}
                                    fill="#6C63FF"
                                    fillOpacity={0.15}
                                />
                                <Radar
                                    name="Benchmark"
                                    dataKey="B"
                                    stroke="#0EA5E9"
                                    strokeWidth={2}
                                    fill="#0EA5E9"
                                    fillOpacity={0.05}
                                    strokeDasharray="5 5"
                                />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: '24px',
                                        border: 'none',
                                        boxShadow: '0 32px 64px -16px rgba(0,0,0,0.15)',
                                        padding: '24px',
                                        background: '#fff'
                                    }}
                                    itemStyle={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '11px', textTransform: 'uppercase' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Focus Stats */}
                <div className="space-y-12">
                    <div className="pro-card !p-12 !rounded-[4.5rem] bg-gradient-to-br from-primary to-secondary text-white border-none relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(108,99,255,0.3)]">
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-[2s]">
                            <Target size={180} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-10 flex items-center gap-4 relative z-10">
                            <Rocket size={24} /> Focus Velocity
                        </h3>
                        <div className="space-y-12 relative z-10">
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <span className="text-4xl font-black tracking-tighter">92%</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Deep Work Sync</span>
                                </div>
                                <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} className="h-full bg-white" transition={{ duration: 1.5 }} />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <span className="text-4xl font-black tracking-tighter">18h</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Weekly Peak</span>
                                </div>
                                <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} className="h-full bg-white" transition={{ duration: 1.5, delay: 0.2 }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pro-card !p-12 !rounded-[4.5rem] bg-slate-50 border-slate-100 flex flex-col justify-center gap-10 group">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-[1.8rem] bg-white shadow-premium-md flex items-center justify-center text-primary border-2 border-white group-hover:rotate-12 transition-transform">
                                <Award size={32} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">Top 3% Globally</h4>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">In Logic Synthesis</p>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-slate-600 leading-relaxed border-l-4 border-primary pl-6 py-2">
                            Your retention velocity has increased by 15% following the last 3 research micro-cycles.
                        </p>
                    </div>
                </div>
            </div>

            {/* Market Alignment Area Chart */}
            <div className="pro-card !p-16 !rounded-[5rem] relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 -z-10" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 relative z-10">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-secondary/5 rounded-full text-[10px] font-black text-secondary uppercase tracking-[0.3em] border border-secondary/10">
                            <Globe size={14} className="animate-pulse" /> Industry Vectors
                        </div>
                        <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">Market Synergy</h3>
                        <p className="text-lg text-slate-500 font-bold">Alignment with High-Frequency Tech Demands</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-1">
                            <p className="text-[32px] font-black text-slate-900 tracking-tighter leading-none">8.4k</p>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Global Node Matches</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[32px] font-black text-primary tracking-tighter leading-none">+22%</p>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Alpha-Trajectory</p>
                        </div>
                    </div>
                </div>

                <div className="h-[300px] w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={marketData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#6C63FF" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900, textTransform: 'uppercase' }}
                                dy={15}
                            />
                            <YAxis hide />
                            <Tooltip
                                contentStyle={{
                                    borderRadius: '20px',
                                    border: 'none',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                    padding: '20px',
                                    background: '#fff'
                                }}
                                itemStyle={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '11px', textTransform: 'uppercase' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#6C63FF"
                                strokeWidth={4}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    );
};

export default Analytics;
