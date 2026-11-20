// EDIT HERE: your links and content live in this one file.
export const LINKS = {
  github: 'https://github.com/Athmi-K',
  linkedin: 'https://www.linkedin.com/in/athmi-k/', // e.g. 'https://www.linkedin.com/in/athmi-k/' (hidden until filled)
  email: 'athmik908@gmail.com',    // e.g. 'athmik908@gmail.com' (shown as a placeholder until filled)
  resume: '/resume.pdf',
}
export const skills = {
  'Programming Languages': ['Python', 'Java', 'C', 'SQL'],
  'AI / ML / Data Science': ['Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Natural Language Processing', 'TensorFlow & Keras (fundamentals)'],
  Databases: ['MySQL', 'PostgreSQL', 'Firebase Realtime Database', 'SQLite'],
  'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'React'],
  'Tools & Platforms': ['Git & GitHub', 'VS Code', 'Postman', 'Google Colab', 'Tableau', 'KNIME', 'Microsoft Excel'],
}
export const projects = [
  { id: 'tri', flagship: true, theme: 'ai',
    title: 'TriDomain Meta-Agent: Adaptive and Explainable Multi-Domain Advisory Using RAG',
    short: 'An adaptive, explainable AI advisory system giving domain-specific guidance across Finance, Health and Career.',
    long: 'Three specialized domain agents and a hybrid routing mechanism direct each user query to the right agent, which answers using its own knowledge base through Retrieval-Augmented Generation.',
    features: ['Three specialized domain agents', 'Domain-specific knowledge bases', 'Retrieval-Augmented Generation (RAG)', 'FAISS-based semantic search', 'Sentence Transformers embeddings', 'Hybrid intent detection and domain routing', 'Context-aware response generation', 'Safety layer and explainability', 'Backend API integration'],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'FAISS', 'Sentence Transformers', 'Groq API', 'RAG'],
    github: 'https://github.com/Athmi-K/tri-domain-meta-agents', demo: '', image: '/shots/tri.png' },
 
  { id: 'qcare', theme: 'health',
    title: 'QCare: Real-Time Hospital Queue Management System',
    short: 'A real-time web app that improves patient flow, manages waiting times and supports hospital administration.',
    long: 'Separate patient and administrator dashboards, with priority handling for emergencies based on age, urgency and waiting time.',
    features: ['Patient and administrator dashboards', 'Firebase authentication', 'Real-time Firestore updates', 'Emergency and priority-based queue handling', 'Age, urgency and waiting-time priority calculation', 'Estimated waiting-time information', 'Appointment and patient management', 'Analytics dashboard', 'SMS notifications using Twilio', 'Health tips and patient engagement'],
    tech: ['React 19', 'Vite', 'Firebase Authentication', 'Cloud Firestore', 'JavaScript', 'Recharts', 'Twilio'],
    github: 'https://github.com/Athmi-K/Qcare', demo: '', image: '/shots/screenn.png' },
]
export const achievements = [
  { t: 'National-level hackathon', d: 'Participated in a national-level hackathon and completed a project within 24 hours.' },
  { t: 'College street play', d: 'Won a college-level street play competition.' },
  { t: 'District-level volleyball', d: 'Participated in district-level volleyball at school level.' },
]
export const posts = [] // Add { title, date, summary, url } objects here to publish blog posts.
