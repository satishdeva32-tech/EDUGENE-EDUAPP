import React from 'react';
import {
    Clock, CheckCircle2, Circle, Target, Zap, Activity,
    Calendar, ArrowRight, Play, Maximize2, RefreshCw,
    Brain, Rocket, Award, ListTodo, Timer, Layout
} from 'lucide-react';
import { motion } from 'framer-motion';

const Productivity = () => {
    const tasks = [
        { id: 1, title: 'Synthesize Architecture Patterns', priority: 'High', status: 'Completed', deadline: '2h' },
        { id: 2, title: 'Deep Work: Vector Analysis', priority: 'Critical', status: 'In Progress', deadline: 'Today' },
        { id: 3, title: 'Course: Neural UI Design', priority: 'Medium', status: 'Todo', deadline: 'Tomorrow' },
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
                        <Timer size={14} className="animate-pulse" /> Focus Velocity Matrix
                    </motion.div>
                    <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                        Focus <br />
                        <span className="text-gradient-ai">Flow</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button className="h-16 px-8 bg-slate-50 border-2 border-white rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-slate-200 transition-all shadow-sm">
                        <Calendar size={18} /> Schedule
                    </button>
                    <button className="h-16 px-8 bg-slate-900 text-white rounded-[1.8rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl shadow-slate-900/40">
                        <Play size={18} fill="currentColor" /> Start Sprint
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Active Sprint Section */}
                <div className="lg:col-span-2 pro-card !p-12 !rounded-[4.5rem] bg-slate-900 text-white border-none relative overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-30 group-hover:scale-125 transition-transform duration-[4s]" />

                    <div className="flex justify-between items-start mb-20 relative z-10">
                        <div className="space-y-3">
                            <h3 className="text-4xl font-black uppercase tracking-tighter leading-none text-white">Neural Sprint <span className="text-primary italic">04</span></h3>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Deep-Work Protocol</p>
                        </div>
                        <div className="text-right">
                            <p className="text-5xl font-black tracking-tighter text-white">45:00</p>
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-2">Remaining Cycle</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 relative z-10">
                        <div className="flex-1 space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 border-b border-white/5 pb-4">Sprint Goals</h4>
                            <div className="space-y-6">
                                {tasks.map((task, i) => (
                                    <div key={task.id} className="flex items-center gap-6 group/item cursor-pointer">
                                        <div className={`w-8 h-8 rounded-xl border-2 ${task.status === 'Completed' ? 'bg-primary border-primary text-white' : 'border-white/10 text-white/20'} flex items-center justify-center transition-all`}>
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <p className={`text-lg font-bold ${task.status === 'Completed' ? 'text-slate-400 line-through' : 'text-white'}`}>{task.title}</p>
                                        </div>
                                        <span className={`text-[10px] font-black px-3 py-1 rounded-lg border ${task.priority === 'Critical' ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                                            {task.priority}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-80 space-y-10 border-l border-white/5 pl-12 flex flex-col justify-center">
                            <div className="space-y-1">
                                <p className="text-[32px] font-black tracking-tighter">82%</p>
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Intensity Score</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[32px] font-black tracking-tighter text-primary">12.4k</p>
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Synapse Activations</p>
                            </div>
                            <button className="h-16 w-full bg-white text-slate-900 rounded-[1.8rem] font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
                                End Session
                            </button>
                        </div>
                    </div>
                </div>

                {/* Productivity Stats */}
                <div className="space-y-10">
                    <div className="pro-card !p-10 !rounded-[4rem] space-y-10 group bg-white border-slate-100 flex flex-col justify-between h-fit min-h-[400px]">
                        <div className="space-y-10">
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary border-2 border-white shadow-premium-md flex items-center justify-center group-hover:rotate-12 transition-transform">
                                <Award size={32} />
                            </div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Weekly <br /> Milestones</h4>
                            <p className="text-sm font-bold text-slate-500 leading-relaxed border-l-4 border-primary pl-6 py-1">
                                Your focus intensity has improved by <span className="text-primary">+15.2%</span> compared to the last cycle.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-slate-400 px-2">
                                <span>Mastery Target</span>
                                <span className="text-slate-900">85%</span>
                            </div>
                            <div className="progress-bar-container">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} className="progress-bar-fill" />
                            </div>
                        </div>
                    </div>

                    <div className="pro-card !p-10 !rounded-[4rem] bg-slate-50 border-slate-100 space-y-8 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-[2s]">
                            <Rocket size={120} />
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-400 group-hover:text-primary transition-colors">
                                <Brain size={24} />
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="text-lg font-black uppercase tracking-tighter italic">Deep Logic Hub</h4>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Neural Link</p>
                            </div>
                        </div>
                        <button className="w-full py-4 border-2 border-white bg-transparent rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                            Configure Hub
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Productivity;
