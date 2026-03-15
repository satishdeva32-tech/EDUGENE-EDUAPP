import React, { useState } from 'react';
import {
    Mail, Lock, User, ArrowRight, Github,
    Chrome, Sparkles, Shield, Zap, Brain, Rocket,
    ChevronRight, Eye, EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--color-bg)] font-inter flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[4.5rem] shadow-premium-lg border-8 border-white overflow-hidden relative"
            >
                {/* Visual Side */}
                <div className="hidden lg:flex flex-col justify-between p-20 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/10 backdrop-blur-3xl border border-white/20 p-5 rounded-[2rem] w-fit mb-12"
                        >
                            <Brain size={40} className="text-primary" />
                        </motion.div>
                        <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                            Your <br /> Academic <br /> <span className="text-primary italic">OS</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-bold max-w-sm leading-relaxed">
                            Join the global mesh of elite learners and synchronize your cognitive potential.
                        </p>
                    </div>

                    <div className="relative z-10 mt-20">
                        <div className="space-y-8">
                            {[
                                { icon: Shield, text: 'Neural-Sync Protected' },
                                { icon: Database, text: 'Multi-Vector Knowledge Graph' },
                                { icon: Rocket, text: 'Alpha-Trajectory Enabled' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-16 lg:p-24 flex flex-col justify-center bg-white">
                    <div className="mb-16">
                        <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                            {isLogin ? 'Initialize' : 'Register'} <span className="text-primary">Session</span>
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">
                            {isLogin ? "Welcome back to the Neural Hub." : "Join the next generation of academic intelligence."}
                        </p>
                    </div>

                    <form className="space-y-8">
                        {!isLogin && (
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-4">Cognitive Alias</label>
                                <div className="search-wrapper group">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={20} />
                                    <input type="text" placeholder="Your Name" className="search-input !h-16 !pl-16 !text-sm !bg-slate-50 border-transparent focus:!border-primary/20" />
                                </div>
                            </div>
                        )}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-4">Neural Auth ID</label>
                            <div className="search-wrapper group">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={20} />
                                <input type="email" placeholder="email@address.com" className="search-input !h-16 !pl-16 !text-sm !bg-slate-50 border-transparent focus:!border-primary/20" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center pr-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-4">Access Protocol</label>
                                {isLogin && <button type="button" className="text-[9px] font-black uppercase text-primary hover:underline">Reset Sync</button>}
                            </div>
                            <div className="search-wrapper group">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••••••"
                                    className="search-input !h-16 !pl-16 !text-sm !bg-slate-50 border-transparent focus:!border-primary/20"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-primary transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button className="btn-premium w-full text-center py-6 text-sm tracking-[0.3em] flex items-center justify-center gap-4 group">
                            {isLogin ? 'Initiate Link' : 'Generate Core'}
                            <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-12 space-y-10">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
                            <div className="relative flex justify-center"><span className="bg-white px-6 text-[10px] font-black text-slate-300 uppercase tracking-widest italic">External Mesh</span></div>
                        </div>

                        <div className="flex gap-6">
                            <button className="flex-1 h-16 bg-white border-2 border-slate-50 rounded-3xl flex items-center justify-center gap-4 hover:border-primary/20 hover:bg-slate-50 transition-all shadow-sm group">
                                <Chrome size={20} className="group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Google</span>
                            </button>
                            <button className="flex-1 h-16 bg-white border-2 border-slate-50 rounded-3xl flex items-center justify-center gap-4 hover:border-primary/20 hover:bg-slate-50 transition-all shadow-sm group">
                                <Github size={20} className="group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Github</span>
                            </button>
                        </div>

                        <p className="text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">
                            {isLogin ? "New to the mesh?" : "Already synchronized?"}{' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-primary hover:underline ml-2"
                            >
                                {isLogin ? 'Register Node' : 'Initialize Link'}
                            </button>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// Mock for missing component in my snippet
import { Database } from 'lucide-react';

export default Auth;
