import React from 'react';
import {
    TrendingUp, CheckCircle, Clock, Sparkles, ChevronRight, Users,
    Trophy, Brain, Fingerprint, Activity, Star, Zap, ArrowUpRight,
    Search, Layout, User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import axios from 'axios';
import useAuthStore from '../store/useAuthStore';

const Dashboard = ({ setActivePage }) => {
    const { user } = useAuthStore();
    const [profileData, setProfileData] = React.useState(null);

    React.useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const res = await axios.get('/api/user/profile', { withCredentials: true });
                if (res.data?.success) {
                    setProfileData({ ...res.data.data.user, ...res.data.data.studentProfile });
                }
            } catch (err) {
                console.error("Failed to fetch profile on dashboard");
            }
        };
        fetchProfileData();
    }, []);

    const stats = [
        { label: 'Course Progress', value: '78%', icon: TrendingUp, color: 'text-primary', bg: 'bg-primary/5', detail: '+5% this week' },
        { label: 'Tasks Completed', value: '24/30', icon: CheckCircle, color: 'text-success', bg: 'bg-success/5', detail: '2 left today' },
        { label: 'Study Time', value: '12.5h', icon: Clock, color: 'text-secondary', bg: 'bg-secondary/5', detail: 'On track' },
        { label: 'Active Mentors', value: '3', icon: Users, color: 'text-accent', bg: 'bg-accent/5', detail: 'Online now' },
    ];

    const roadmap = [
        { title: 'React Architecture', progress: 100, time: 'Completed', difficulty: 'Intermediate', icon: Layout },
        { title: 'Advanced State Systems', progress: 65, time: '2h left', difficulty: 'Advanced', icon: Zap },
        { title: 'Neural Vector Mapping', progress: 0, time: 'Locked', difficulty: 'Expert', icon: Brain },
    ];

    const weeklyData = [
        { day: 'Mon', score: 60 },
        { day: 'Tue', score: 85 },
        { day: 'Wed', score: 45 },
        { day: 'Thu', score: 95 },
        { day: 'Fri', score: 70 },
        { day: 'Sat', score: 40 },
        { day: 'Sun', score: 90 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16 max-w-7xl mx-auto px-4 py-8 font-inter pb-20"
        >
            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row items-center justify-between gap-16 py-10 border-b border-slate-100 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />

                <div className="space-y-10 flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-premium-sm text-primary text-[10px] font-black uppercase tracking-[0.25em]"
                    >
                        <Sparkles size={14} className="animate-pulse" /> Neural Learning Engine Active
                    </motion.div>

                    <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
                        Welcome back,<br />
                        <span className="text-gradient-ai">{profileData?.name?.split(' ')[0] || user?.name?.split(' ')[0] || 'Student'} 👋</span>
                    </h1>

                    <p className="text-xl text-slate-500 max-w-lg font-bold leading-relaxed mx-auto lg:mx-0 pr-10">
                        Neural performance increased by <span className="text-primary font-black underline decoration-primary/20 underline-offset-8">15%</span> this cycle. Your academic trajectory is currently <span className="text-slate-900">Alpha-Optimal</span>.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
                        <button
                            onClick={() => setActivePage('courses')}
                            className="btn-premium flex items-center gap-4 group"
                        >
                            Resume Journey <div className="p-1 bg-white/20 rounded-lg group-hover:translate-x-1 transition-transform"><ChevronRight size={18} strokeWidth={3} /></div>
                        </button>
                        <button className="btn-secondary">
                            View Matrix
                        </button>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-sm bg-white/60 backdrop-blur-3xl rounded-[3rem] p-8 border border-white shadow-premium-lg flex flex-col items-center text-center relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-[2s]" />
                    <div className="w-32 h-32 rounded-[2rem] overflow-hidden bg-slate-50 border-4 border-white shadow-xl mb-6 relative group-hover:rotate-6 transition-all duration-500 group-hover:shadow-primary/20">
                        {profileData?.profilePicture ? (
                            <img src={profileData.profilePicture} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <User size={48} className="text-slate-300 absolute inset-0 m-auto" />
                        )}
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{profileData?.name || user?.name || 'Student'}</h2>
                    <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest">{profileData?.email || user?.email}</p>
                    <div className="w-full h-px bg-slate-200/50 my-6"></div>
                    <p className="text-sm font-bold text-slate-600 mb-6 px-4 italic">
                        "{profileData?.bio || 'Your AI study assistant is ready.'}"
                    </p>
                    <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-500 bg-white px-5 py-2.5 rounded-2xl border border-slate-100 shadow-sm">
                        <Activity size={16} className="text-primary animate-pulse" /> {profileData?.mobileNumber || "Mobile Unset"}
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8, type: 'spring' }}
                        className="pro-card !p-10 !rounded-[4rem] group"
                    >
                        <div className={`p-5 rounded-[2rem] ${stat.bg} ${stat.color} w-fit mb-8 shadow-sm ring-1 ring-current/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <stat.icon size={32} strokeWidth={2.5} />
                        </div>
                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">{stat.value}</h3>
                                <span className="text-[10px] font-black text-success uppercase tracking-widest bg-success/5 px-2 py-1 rounded-lg border border-success/10">{stat.detail}</span>
                            </div>
                            <div className="progress-bar-container mt-4">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: stat.value.includes('%') ? stat.value : '75%' }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                    className="progress-bar-fill"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Learning Roadmap */}
                <div className="lg:col-span-2 space-y-12">
                    <div className="flex items-center justify-between px-4">
                        <div className="space-y-1">
                            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Active Roadmap</h2>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your synchronized learning nodes</p>
                        </div>
                        <button
                            onClick={() => setActivePage('courses')}
                            className="h-12 px-6 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-3 shadow-sm group"
                        >
                            Global Catalog <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={3} />
                        </button>
                    </div>

                    <div className="space-y-8">
                        {roadmap.map((module, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ x: 15 }}
                                className="pro-card !p-10 !rounded-[4rem] flex flex-col sm:flex-row items-center gap-12 group cursor-pointer"
                            >
                                <div className="w-20 h-20 rounded-[2.5rem] bg-slate-50 border-4 border-white shadow-premium-md flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-500">
                                    <module.icon size={36} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1 space-y-5 text-center sm:text-left w-full">
                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{module.title}</h3>
                                        <span className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border-2 ${module.difficulty === 'Intermediate' ? 'bg-primary/5 text-primary border-primary/10' :
                                            module.difficulty === 'Advanced' ? 'bg-secondary/5 text-secondary border-secondary/10' :
                                                'bg-slate-900 text-white border-slate-800'
                                            }`}>
                                            {module.difficulty}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                        <span className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg"><Clock size={16} /> {module.time}</span>
                                        <span className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg text-primary"><Star size={16} fill="currentColor" /> 120 XP Core</span>
                                    </div>
                                    <div className="progress-bar-container">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${module.progress}%` }}
                                            transition={{ duration: 1.5, delay: 0.2 }}
                                            className="progress-bar-fill"
                                        />
                                    </div>
                                </div>
                                <button className={`
                                    h-16 px-10 rounded-[1.8rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap shadow-xl
                                    ${module.progress === 100
                                        ? 'bg-success/5 text-success border-2 border-success/10 shadow-success/5'
                                        : module.progress > 0
                                            ? 'bg-slate-900 text-white shadow-slate-900/20 hover:bg-primary'
                                            : 'bg-slate-50 text-slate-300 cursor-not-allowed border-2 border-slate-100 shadow-none'}
                                `}>
                                    {module.progress === 100 ? 'Audit Module' : module.progress > 0 ? 'Continue' : 'Locked'}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* AI Mentor & Gamification */}
                <div className="space-y-12">
                    {/* Mentor Insight */}
                    <div className="pro-card !p-12 !rounded-[4.5rem] bg-slate-900 text-white border-none relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)]">
                        <div className="absolute top-0 right-0 p-10 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-[2s]">
                            <Fingerprint size={200} className="text-primary" strokeWidth={0.5} />
                        </div>
                        <div className="flex items-center gap-5 mb-12 relative z-10">
                            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/10 ring-1 ring-white/20">
                                <Activity size={28} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Mentor Insight</h3>
                        </div>
                        <p className="text-slate-300 text-xl font-medium leading-relaxed mb-16 relative z-10 italic">
                            "Optimal learning pulse detected. Elevate <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8">State Architecture</span> mastery via SSR patterns."
                        </p>
                        <button className="w-full h-18 bg-primary text-white rounded-3xl font-black uppercase text-xs tracking-[0.25em] shadow-[0_20px_40px_-10px_rgba(108,99,255,0.4)] hover:scale-[1.03] active:scale-95 transition-all relative z-10">
                            Accept Vector
                        </button>
                    </div>

                    {/* Gamification */}
                    <div className="pro-card !p-12 !rounded-[4.5rem] space-y-12 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-black flex items-center gap-5 uppercase tracking-tighter">
                                <div className="p-3 bg-accent/10 rounded-2xl text-accent ring-1 ring-accent/20">
                                    <Trophy size={28} />
                                </div>
                                Neural Rank
                            </h3>
                            <span className="px-5 py-2 bg-amber-50 text-amber-600 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 border-amber-100 shadow-sm">Top 5%</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="w-24 h-24 rounded-[3rem] bg-slate-50 flex items-center justify-center text-accent shadow-inner border-4 border-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                                <Zap size={56} strokeWidth={2.5} fill="currentColor" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">Master</p>
                                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mt-2">Level 12 • 4,500 XP Legacy</p>
                            </div>
                        </div>
                        <div className="space-y-5 pt-10 border-t border-slate-50">
                            <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.3em]">
                                <span className="text-slate-400">Node Sync</span>
                                <span className="text-primary">85% Complete</span>
                            </div>
                            <div className="progress-bar-container">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '85%' }}
                                    transition={{ duration: 2 }}
                                    className="progress-bar-fill"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Weekly Performance with Recharts */}
            <div className="pro-card !p-16 !rounded-[5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[120px] rounded-full translate-x-1/4 -z-10" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-20 relative z-10">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-secondary/5 rounded-full text-[10px] font-black text-secondary uppercase tracking-[0.3em] border border-secondary/10">
                            <Activity size={14} className="animate-pulse" /> Neural Audit Mode
                        </div>
                        <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Cognitive Activity
                        </h3>
                    </div>
                    <div className="px-6 py-3 bg-slate-50 border-2 border-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-premium-sm">
                        Past 7 Micro-Cycles Sync
                    </div>
                </div>

                <div className="h-[400px] w-full relative z-10 px-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                            <defs>
                                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6C63FF" stopOpacity={1} />
                                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity={1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 11, fontWeight: 900, fill: '#94a3b8', dy: 20 }}
                                interval={0}
                            />
                            <YAxis hide />
                            <Tooltip
                                cursor={{ fill: '#f8fafc', radius: 24 }}
                                contentStyle={{
                                    borderRadius: '24px',
                                    border: 'none',
                                    boxShadow: '0 32px 64px -16px rgba(0,0,0,0.15)',
                                    padding: '24px',
                                    background: '#fff',
                                    backdropFilter: 'blur(20px)'
                                }}
                                itemStyle={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase' }}
                                labelStyle={{ display: 'none' }}
                            />
                            <Bar
                                dataKey="score"
                                radius={[24, 24, 12, 12]}
                                barSize={60}
                            >
                                {weeklyData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.score > 80 ? 'url(#barGradient)' : '#f1f5f9'}
                                        className="hover:opacity-80 transition-opacity cursor-pointer shadow-premium-lg"
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;

