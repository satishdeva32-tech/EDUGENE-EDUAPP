import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Mic, MicOff, Volume2, VolumeX, Sparkles, Zap, Bot, ChevronLeft, LayoutGrid, Wand2, BookOpen, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import useAIStore from '../store/useAIStore';
import useAuthStore from '../store/useAuthStore';
import { API_URL } from '../config';
import AgentSelector, { AGENTS } from './AgentSelector';

const AIAssistant = () => {
    const isAssistantOpen = useAIStore(state => state.isAssistantOpen);
    const setAssistantOpen = useAIStore(state => state.setAssistantOpen);
    const [view, setView] = useState('chat'); // 'chat' or 'agents'
    const [activeAgent, setActiveAgent] = useState('master');
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([{ sender: 'ai', text: "Hey! I'm your EduGenie AI assistant. Ready to crush your learning goals today? ✨" }]);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const recognitionRef = useRef(null);
    const scrollRef = useRef(null);
    const { token } = useAuthStore();

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setMessage(transcript);
                handleSend(transcript);
                setIsListening(false);
            };

            recognitionRef.current.onerror = () => setIsListening(false);
            recognitionRef.current.onend = () => setIsListening(false);
        }
    }, [isSpeaking]);

    const activeLesson = useAIStore(state => state.activeLesson);
    const lastActiveLessonRef = useRef(null);

    useEffect(() => {
        if (activeLesson && activeLesson !== lastActiveLessonRef.current) {
            lastActiveLessonRef.current = activeLesson;
            // If the assistant isn't open, open it
            if (!isAssistantOpen) setAssistantOpen(true);

            // Auto-send the context if it's a nudge
            if (activeLesson.aiInfo) {
                handleSend(`Regarding "${activeLesson.title}": ${activeLesson.aiInfo}`);
            }
        }
    }, [activeLesson, isAssistantOpen, setAssistantOpen]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chat]);

    const handleSend = async (textToSend = message) => {
        if (textToSend.trim() && !isLoading) {
            const userMsg = { sender: 'user', text: textToSend };
            setChat((prev) => [...prev, userMsg]);
            setMessage("");
            setIsLoading(true);

            try {
                const response = await axios.post(`${API_URL}/api/agent/chat`,
                    { message: textToSend, agentId: activeAgent },
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                const aiMsg = { sender: 'ai', text: response.data.data };
                setChat((prev) => [...prev, aiMsg]);
                if (isSpeaking) speak(aiMsg.text);
            } catch (error) {
                console.error("AI Assistant Error:", error);

                let errorText = "Sorry, I lost my connection for a second. Can you try again?";

                if (error.response?.status === 401) {
                    errorText = "Your session has expired. Please refresh the page or log in again to continue chatting.";
                }

                setChat((prev) => [...prev, {
                    sender: 'ai',
                    text: errorText
                }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleQuickAction = (action) => {
        let text = "";
        switch (action) {
            case 'notes': text = "Generate structured smart notes for this topic."; break;
            case 'quiz': text = "Create a 5-question practice quiz for me."; break;
            case 'explain': text = "Explain this concept in a very simple way."; break;
            default: return;
        }
        handleSend(text);
    };

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const speak = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    };

    const currentAgentData = AGENTS.find(a => a.id === activeAgent) || { name: 'EduGenie Master AI', icon: <Bot size={28} /> };

    return (
        <>
            <AnimatePresence>
                {isAssistantOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                        className="fixed bottom-0 right-0 md:bottom-28 md:right-10 w-full h-[100dvh] md:w-[450px] md:h-[700px] z-50 overflow-hidden flex flex-col md:rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-white/10"
                    >
                        {/* Header */}
                        <div className="vibrant-gradient p-6 flex justify-between items-center text-white relative overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                className="absolute -top-10 -right-10 opacity-10"
                            >
                                <Sparkles size={120} />
                            </motion.div>
                            <div className="flex items-center gap-4 relative z-10">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setView(view === 'chat' ? 'agents' : 'chat')}
                                    className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner group"
                                >
                                    {view === 'chat' ? <LayoutGrid size={24} className="group-hover:rotate-90 transition-transform" /> : <ChevronLeft size={24} />}
                                </motion.button>
                                <div>
                                    <h3 className="font-black tracking-tight leading-tight flex items-center gap-2">
                                        {view === 'chat' ? currentAgentData.name : 'Choose Your Specialist'}
                                    </h3>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                        {view === 'chat' ? 'Active Assistant' : 'Multi-Agent Suite'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 relative z-10">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsSpeaking(!isSpeaking)}
                                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    {isSpeaking ? <Volume2 size={18} /> : <VolumeX size={18} />}
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setAssistantOpen(false)}
                                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <X size={18} />
                                </motion.button>
                            </div>
                        </div>

                        {view === 'chat' ? (
                            <>
                                {/* Chat Body */}
                                <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-hide bg-slate-50 dark:bg-[#020617]/50">
                                    {chat.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`p-4 rounded-3xl text-sm font-medium max-w-[85%] leading-relaxed shadow-sm ${msg.sender === 'user'
                                                ? 'bg-primary-600 text-white rounded-tr-none shadow-primary-500/20'
                                                : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-tl-none text-slate-700 dark:text-slate-200'
                                                }`}>
                                                {msg.text}
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isLoading && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 p-4 rounded-3xl rounded-tl-none flex gap-1">
                                                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" />
                                                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Quick Actions */}
                                <div className="px-6 py-2 overflow-x-auto scrollbar-hide flex gap-2 bg-slate-50 dark:bg-[#020617]/50">
                                    <button onClick={() => handleQuickAction('notes')} className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:border-indigo-500 transition-colors">
                                        <Wand2 size={12} className="text-indigo-500" /> Generate Notes
                                    </button>
                                    <button onClick={() => handleQuickAction('quiz')} className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:border-emerald-500 transition-colors">
                                        <BookOpen size={12} className="text-emerald-500" /> Create Quiz
                                    </button>
                                    <button onClick={() => handleQuickAction('explain')} className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:border-orange-500 transition-colors">
                                        <Sparkles size={12} className="text-orange-500" /> Explain Simply
                                    </button>
                                </div>

                                {/* Input Area */}
                                <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/5 relative">
                                    <div className="relative flex items-center gap-3">
                                        <motion.input
                                            whileFocus={{ scale: 1.01 }}
                                            type="text"
                                            placeholder={`Message ${currentAgentData.name}...`}
                                            className="w-full bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-indigo-500 rounded-2xl pl-5 pr-14 py-4 text-sm font-semibold outline-none transition-all"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        />
                                        <div className="absolute right-2 flex items-center gap-1">
                                            <motion.button
                                                whileTap={{ scale: 0.9 }}
                                                onClick={toggleListening}
                                                className={`p-2.5 rounded-xl transition-all ${isListening ? 'bg-rose-500 text-white shadow-lg animate-pulse' : 'text-slate-400 hover:text-indigo-500'}`}
                                            >
                                                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                                            </motion.button>
                                            <motion.button
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => handleSend()}
                                                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl p-2.5 shadow-xl shadow-indigo-600/30"
                                            >
                                                <Send size={18} strokeWidth={2.5} />
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 bg-slate-50 dark:bg-[#020617]/50 overflow-y-auto">
                                <div className="p-6 pb-0">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Choose a specialized AI to help you</p>
                                </div>
                                <AgentSelector
                                    activeAgent={activeAgent}
                                    onSelect={(id) => {
                                        setActiveAgent(id);
                                        setView('chat');
                                        const agent = AGENTS.find(a => a.id === id);
                                        setChat(prev => [...prev, { sender: 'ai', text: `Agent ${agent.name} is now active. How can I help you with ${agent.desc.toLowerCase()}?` }]);
                                    }}
                                />
                                <div className="p-6">
                                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-white/5 flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600">
                                            <BarChart2 size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold">Deep Learning Analytics</h4>
                                            <p className="text-[10px] text-slate-500">Track your progress and predicted scores across all subjects.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAssistantOpen(!isAssistantOpen)}
                className="vibrant-gradient p-5 rounded-[2rem] shadow-2xl text-white relative group border-4 border-white dark:border-slate-800 overflow-hidden"
            >
                <motion.div
                    animate={{ x: [-20, 100], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1 }}
                    className="absolute inset-0 bg-white/20 skew-x-12 -z-10"
                />
                <MessageCircle size={32} fill="currentColor" strokeWidth={2.5} />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-slate-800"></span>
                </span>
            </motion.button>
        </>
    );
};

export default AIAssistant;
