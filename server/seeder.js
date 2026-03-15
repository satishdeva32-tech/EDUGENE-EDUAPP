const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');

dotenv.config();

const courses = [
    {
        title: "Advanced React Mastering",
        description: "Deep dive into React performance, advanced patterns, and enterprise scalability.",
        difficulty: "Intermediate",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
        videos: [
            { title: "Introduction to Concurrent Mode", duration: "12:45", youtubeId: "0S1fH_J6kMo", aiInfo: "Concurrent Mode is a set of new features that help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed." },
            { title: "Advanced Reconciliation Algorithms", duration: "18:20", youtubeId: "ZCuYPiUIONs", aiInfo: "React's diffing algorithm is O(n). We explore how Fiber architecture allows for interruptible rendering and priority-based updates." },
            { title: "Profiling Production Apps", duration: "15:10", youtubeId: "7k7GMB05fSg", aiInfo: "Learn how to use the React DevTools Profiler to identify 'wasted' renders and bottleneck components in a real-world production environment." },
            { title: "Implementing Server Components", duration: "22:00", youtubeId: "t2ykisGisV0", aiInfo: "Zero-bundle-size components that run on the server. We'll build a data-heavy dashboard using RSC and Suspense for fetching." },
        ]
    },
    {
        title: "Node.js & Express Pro",
        description: "Build robust backend architectures with production-grade security and middleware.",
        difficulty: "Beginner",
        category: "Backend Development",
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=800&auto=format&fit=crop",
        videos: [
            { title: "Node.js Event Loop Deep Dive", duration: "10:30", youtubeId: "8aGhZQkoFbQ" },
            { title: "Express Middleware Patterns", duration: "14:50", youtubeId: "lY6icfhap2o" },
            { title: "Database Security Best Practices", duration: "11:15", youtubeId: "Wv_p1_HkXjY" },
        ]
    },
    {
        title: "AI Workflows with LangChain",
        description: "Build adaptive AI agents that can reason, plan, and execute complex business tasks.",
        difficulty: "Advanced",
        category: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
        videos: [
            { title: "Introduction to LLMs", duration: "08:20", youtubeId: "5sLYAQS9s88" },
            { title: "Vector Stores and Embeddings", duration: "20:45", youtubeId: "ySEx_Bqxlmc" },
            { title: "Building Autonomous Agents", duration: "25:30", youtubeId: "h-B920gK6Xg" },
        ]
    }
];

const seedCourses = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // Remove existing courses
        await Course.deleteMany();

        // Add new courses
        await Course.insertMany(courses);

        console.log('Courses seeded successfully!');
        process.exit();
    } catch (err) {
        console.error('Error seeding courses:', err);
        process.exit(1);
    }
};

seedCourses();
