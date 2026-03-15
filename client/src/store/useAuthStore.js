import { create } from 'zustand';

const useAuthStore = create((set) => {
    // Get initial data from localStorage
    const initialToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const initialUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
    const initialOnboarded = initialUser?.isOnboarded || (typeof window !== 'undefined' ? localStorage.getItem('onboarded') === 'true' : false);

    return {
        user: initialUser,
        token: initialToken,
        isAuthenticated: !!initialToken,
        onboarded: initialOnboarded,

        setOnboarded: (value) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('onboarded', value);
            }
            set({ onboarded: value });
        },

        setUser: (user) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(user));
            }
            set({ user, isAuthenticated: true, onboarded: user?.isOnboarded || false });
        },

        setToken: (token) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', token);
            }
            set({ token, isAuthenticated: true });
        },

        // Combined login function to avoid multiple re-renders
        login: (user, token) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
            }
            set({ user, token, isAuthenticated: true, onboarded: user?.isOnboarded || false });
        },

        logout: () => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
            set({ user: null, token: null, isAuthenticated: false });
        },
    };
});

export default useAuthStore;
