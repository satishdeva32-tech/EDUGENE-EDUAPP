import { create } from 'zustand';

const useAIStore = create((set) => ({
    activeLesson: null,
    isAssistantOpen: false,
    setActiveLesson: (lesson) => set({ activeLesson: lesson }),
    setAssistantOpen: (open) => set({ isAssistantOpen: open }),
    nudgeAI: (topic, context) => set({
        activeLesson: { title: topic, aiInfo: context },
        isAssistantOpen: true
    }),
    triggerAIPrompt: null,
    setTriggerAIPrompt: (prompt) => set({ triggerAIPrompt: prompt }),
}));

export default useAIStore;
