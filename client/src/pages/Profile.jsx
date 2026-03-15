import React, { useState, useEffect, useRef } from 'react';
import {
    User, Mail, Shield, Bell, Settings, Award, MapPin, Calendar,
    BookOpen, Target, Zap, Activity, Clock, LogOut, Phone, Layers,
    Camera, Edit3, ChevronRight, Globe, Fingerprint, Trash2,
    Brain, Rocket, Trophy, Save
} from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import useAuthStore from '../store/useAuthStore';

const Profile = ({ setActivePage }) => {
    const { user, login } = useAuthStore(); // reuse login to update user state if needed
    const [isLoading, setIsLoading] = useState(false);

    // Core Data
    const [profileData, setProfileData] = useState({
        name: '', email: '', mobileNumber: '', dateOfBirth: '', gender: '', location: '', bio: '', avatar: '',
        educationLevel: '', institutionName: '', fieldOfStudy: '', targetExam: '', careerGoal: '', weeklyStudyHours: 10
    });

    const fileInputRef = useRef(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get('/api/user/profile', { withCredentials: true });
                if (res.data?.success) {
                    const u = res.data.data.user || {};
                    const sp = res.data.data.studentProfile || {};
                    setProfileData(prev => ({
                        ...prev, ...u, ...sp,
                        dateOfBirth: u.dateOfBirth ? u.dateOfBirth.split('T')[0] : ''
                    }));
                }
            } catch (err) {
                console.error("Failed to fetch profile");
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setIsLoading(true);
        try {
            await axios.put('/api/user/profile/update', profileData, { withCredentials: true });

            // Re-fetch or update local user state if necessary
            // For now, redirect to dashboard as requested
            if (setActivePage) {
                setActivePage('dashboard');
            }
            setIsLoading(false);
        } catch (err) {
            console.error("Save failed", err);
            setIsLoading(false);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Mocking upload visually for MVP, in production send file via FormData to backend
                setProfileData({ ...profileData, avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 max-w-6xl mx-auto px-4 py-8 font-inter pb-20"
        >
            {/* Header Hero */}
            <div className="pro-card !p-12 !rounded-[4rem] bg-white border-slate-50 relative overflow-hidden group">
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="relative group/avatar cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                        <div className="w-40 h-40 rounded-full bg-slate-50 p-2 border-4 border-white shadow-premium-lg overflow-hidden transition-transform duration-500 hover:scale-105">
                            {profileData.avatar ? (
                                <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover rounded-full" />
                            ) : (
                                <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <User size={64} />
                                </div>
                            )}
                        </div>
                        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                        <button className="absolute bottom-0 right-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-primary transition-all border-4 border-white">
                            <Camera size={18} />
                        </button>
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">{profileData.name || 'Set Your Name'}</h1>
                            <div className="px-5 py-1.5 bg-success/10 rounded-xl border border-success/20 text-[10px] font-black text-success uppercase tracking-widest text-center">
                                Verified Neural Link
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 font-bold max-w-lg">Update your global identity and AI cognitive baseline parameters.</p>

                        <div className="flex justify-center md:justify-start pt-4">
                            <button onClick={handleSave} className="h-14 px-8 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl flex items-center gap-2">
                                {isLoading ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Save size={16} />}
                                Save Identity
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Personal Information */}
                <div className="pro-card !p-8 !rounded-[3rem]">
                    <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-8 flex items-center gap-3">
                        <User className="text-primary" /> Personal Baseline
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                            <input name="name" value={profileData.name} onChange={handleChange} className="w-full bg-slate-50 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                            <input name="email" value={profileData.email} disabled className="w-full bg-slate-100 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none text-slate-400 cursor-not-allowed" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile Number</label>
                            <div className="relative">
                                <Phone size={16} className="absolute left-4 top-4 text-slate-400" />
                                <input name="mobileNumber" value={profileData.mobileNumber} onChange={handleChange} className="w-full bg-slate-50 pl-12 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20" placeholder="+1..." />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date of Birth</label>
                            <div className="relative">
                                <Calendar size={16} className="absolute left-4 top-4 text-slate-400" />
                                <input name="dateOfBirth" type="date" value={profileData.dateOfBirth} onChange={handleChange} className="w-full bg-slate-50 pl-12 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Gender</label>
                            <select name="gender" value={profileData.gender} onChange={handleChange} className="w-full bg-slate-50 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                                <option value="">Select...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location / Country</label>
                            <div className="relative">
                                <MapPin size={16} className="absolute left-4 top-4 text-slate-400" />
                                <input name="location" value={profileData.location} onChange={handleChange} className="w-full bg-slate-50 pl-12 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bio / Introduction</label>
                            <textarea name="bio" value={profileData.bio} onChange={handleChange} rows={3} className="w-full bg-slate-50 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Tell the neural network about yourself..."></textarea>
                        </div>
                    </div>
                </div>

                {/* Academic Profile */}
                <div className="pro-card !p-8 !rounded-[3rem]">
                    <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-8 flex items-center gap-3">
                        <BookOpen className="text-accent" /> Academic Trajectory
                    </h3>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Education Level</label>
                            <select name="educationLevel" value={profileData.educationLevel} onChange={handleChange} className="w-full bg-slate-50 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                                <option value="">Select Level...</option>
                                <option value="High School">High School</option>
                                <option value="Undergraduate">Undergraduate</option>
                                <option value="Postgraduate">Postgraduate</option>
                                <option value="Professional">Professional</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Institution Name</label>
                            <input name="institutionName" value={profileData.institutionName} onChange={handleChange} className="w-full bg-slate-50 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20" placeholder="Harvard, MIT, etc." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Field of Study</label>
                            <input name="fieldOfStudy" value={profileData.fieldOfStudy} onChange={handleChange} className="w-full bg-slate-50 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20" placeholder="Computer Science, Medicine..." />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Target Exam / Goal</label>
                                <input name="targetExam" value={profileData.targetExam} onChange={handleChange} className="w-full bg-slate-50 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20" placeholder="JEE, LSAT..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Weekly Study Hours</label>
                                <input name="weeklyStudyHours" type="number" value={profileData.weeklyStudyHours} onChange={handleChange} className="w-full bg-slate-50 p-4 rounded-2xl text-sm font-bold border border-slate-100 outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Sign-out / Security stub */}
            <div className="flex justify-end pt-10 border-t border-slate-100">
                <button className="flex items-center gap-2 p-4 rounded-2xl text-rose-500 hover:bg-rose-50 font-bold transition-all decoration-none">
                    <LogOut size={18} />
                    <span className="text-xs uppercase tracking-widest">Disconnect Session</span>
                </button>
            </div>
        </motion.div>
    );
};

export default Profile;
