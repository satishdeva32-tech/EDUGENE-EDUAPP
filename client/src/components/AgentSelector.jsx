import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Rocket, Brain, BarChart2, Target, Notebook,
    Mic, TestTube, Search, Calendar, GraduationCap,
    Sparkles, Zap, Fingerprint, Eye, Boxes, TrendingUp,
    RefreshCw, Globe, Wand2, Calculator, Activity
} from 'lucide-react';

const AGENTS = [
    // Core Agents
    { id: 'planner', name: "Smart Study Planner", icon: <Rocket size={20} />, color: "bg-blue-500", desc: "Adaptive daily study schedule", category: 'core' },
    { id: 'explainer', name: "AI Concept Explainer", icon: <Brain size={20} />, color: "bg-purple-500", desc: "3 Modes: Beginner, Exam, Real-world", category: 'core' },
    { id: 'performance', name: "Performance Prediction", icon: <BarChart2 size={20} />, color: "bg-orange-500", desc: "Predict scores & identify weaknesses", category: 'core' },
    { id: 'goal', name: "Goal-to-Action", icon: <Target size={20} />, color: "bg-rose-500", desc: "Micro-tasks & deadline tracking", category: 'core' },
    { id: 'notes', name: "AI Notes Generator", icon: <Notebook size={20} />, color: "bg-emerald-500", desc: "Structured smart notes & tricks", category: 'core' },
    { id: 'voice', name: "Voice Tutor Mode", icon: <Mic size={20} />, color: "bg-indigo-500", desc: "Conversational learning & Q&A", category: 'core' },
    { id: 'simulator', name: "Exam Simulator", icon: <TestTube size={20} />, color: "bg-cyan-500", desc: "Timed mock tests & revision plans", category: 'core' },
    { id: 'research', name: "Autonomous Research", icon: <Search size={20} />, color: "bg-amber-500", desc: "Deep research, summaries & PPTs", category: 'core' },
    { id: 'routine', name: "Routine Optimizer", icon: <Calendar size={20} />, color: "bg-teal-500", desc: "Analyze routine & optimize breaks", category: 'core' },
    { id: 'career', name: "AI Career Mentor", icon: <GraduationCap size={20} />, color: "bg-violet-500", desc: "Career paths & learning roadmaps", category: 'core' },

    // Ultra Agents (2026 Suite)
    { id: 'autonomous_7day', name: "7-Day Auto Mode", icon: <Zap size={20} />, color: "bg-yellow-500", desc: "AI manages everything for 7 days", category: 'ultra' },
    { id: 'digital_twin', name: "Digital Twin Model", icon: <Fingerprint size={20} />, color: "bg-pink-500", desc: "Predictions based on your persona", category: 'ultra' },
    { id: 'cognitive_state', name: "Cognitive State AI", icon: <Activity size={20} />, color: "bg-red-500", desc: "Detects stress, boredom & fatigue", category: 'ultra' },
    { id: 'ar_vr_visualizer', name: "AR/VR 3D Visualizer", icon: <Eye size={20} />, color: "bg-sky-500", desc: "3D concept simulation steps", category: 'ultra' },
    { id: 'predictive_rank', name: "Predicted Rank Model", icon: <TrendingUp size={20} />, color: "bg-green-500", desc: "Percentile & rank range prediction", category: 'ultra' },
    { id: 'self_improvement', name: "Self-Improvement Loop", icon: <RefreshCw size={20} />, color: "bg-stone-500", desc: "Agents optimize themselves weekly", category: 'ultra' },
    { id: 'global_skill', name: "Global Skill Alignment", icon: <Globe size={20} />, color: "bg-emerald-600", desc: "2026 job market trend matching", category: 'ultra' },
    { id: 'voice_personality', name: "Personality Voice Mentor", icon: <Wand2 size={20} />, color: "bg-fuchsia-500", desc: "Switchable personality modes", category: 'ultra' },
    { id: 'gap_scanner', name: "Hidden Gap Scanner", icon: <Search size={20} />, color: "bg-orange-600", desc: "Finds hidden conceptual weak areas", category: 'ultra' },
    { id: 'brain_optimizer', name: "Brain-Based Optimizer", icon: <Calculator size={20} />, color: "bg-blue-600", desc: "Sci-optimized study timetable", category: 'ultra' },
];

const AgentSelector = ({ onSelect, activeAgent }) => {
    const [activeTab, setActiveTab] = useState('core');

    return (
        <div className="flex flex-col h-full">
            {/* Tabs */}
            <div className="flex px-4 pt-2 gap-4 border-b border-slate-100 dark:border-white/5">
                {['core', 'ultra'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 text-[11px] font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-indigo-600' : 'text-slate-400'
                            }`}
                    >
                        {tab} suite
                        {activeTab === tab && (
                            <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
                        )}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 max-h-[400px] overflow-y-auto scrollbar-hide">
                <AnimatePresence mode="wait">
                    {AGENTS.filter(a => a.category === activeTab).map((agent) => (
                        <motion.button
                            key={agent.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onSelect(agent.id)}
                            className={`relative flex flex-col items-start p-3 rounded-2xl border transition-all text-left ${activeAgent === agent.id
                                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 ring-2 ring-indigo-500/20'
                                : 'border-slate-100 dark:border-white/5 bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800'
                                }`}
                        >
                            <div className={`p-2 rounded-xl ${agent.color} text-white mb-2 shadow-lg`}>
                                {agent.icon}
                            </div>
                            <span className="text-[13px] font-bold text-slate-800 dark:text-slate-100 leading-tight mb-1">
                                {agent.name}
                            </span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 leading-tight">
                                {agent.desc}
                            </span>
                            {activeAgent === agent.id && (
                                <motion.div
                                    layoutId="activeAgent"
                                    className="absolute top-2 right-2 text-indigo-500"
                                >
                                    <Sparkles size={14} />
                                </motion.div>
                            )}
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AgentSelector;
export { AGENTS };
