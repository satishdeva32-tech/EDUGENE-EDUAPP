import { create } from 'zustand';
import axios from 'axios';
import { API_URL } from '../config';

const useCourseStore = create((set, get) => ({
    courses: [],
    myCourses: [],
    loading: false,
    error: null,

    fetchCourses: async () => {
        set({ loading: true });
        try {
            const { data } = await axios.get(`${API_URL}/api/courses`);
            if (data.success) {
                set({ courses: data.data, loading: false });
            }
        } catch (err) {
            set({ error: err.response?.data?.error || 'Failed to fetch courses', loading: false });
        }
    },

    fetchMyCourses: async (token) => {
        if (!token) return;
        set({ loading: true });
        try {
            const { data } = await axios.get(`${API_URL}/api/courses/my-courses`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (data.success) {
                set({ myCourses: data.data, loading: false });
            }
        } catch (err) {
            set({ error: err.response?.data?.error || 'Failed to fetch your courses', loading: false });
        }
    },

    enrollInCourse: async (courseId, token) => {
        try {
            const { data } = await axios.post(`${API_URL}/api/courses/enroll/${courseId}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (data.success) {
                // Refresh my courses after enrollment
                get().fetchMyCourses(token);
                return true;
            }
        } catch (err) {
            set({ error: err.response?.data?.error || 'Failed to enroll in course' });
            return false;
        }
    },

    updateProgress: async (courseId, videoIndex, token) => {
        try {
            const { data } = await axios.put(`${API_URL}/api/courses/progress/${courseId}`,
                { videoIndex },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (data.success) {
                // Update specific enrollment in state
                const newMyCourses = get().myCourses.map(en =>
                    en.course._id === courseId ? { ...en, ...data.data } : en
                );
                set({ myCourses: newMyCourses });
                return true;
            }
        } catch (err) {
            set({ error: err.response?.data?.error || 'Failed to update progress' });
            return false;
        }
    }
}));

export default useCourseStore;
