import { FaLightbulb, FaPaintBrush, FaCode, FaLock, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';



export const assets = {
  profileImg,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and user-friendly interfaces using modern frontend technologies.',
    tags: ['React.js',
      'Next.js',
      'React Native',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating basic backend services, APIs, and authentication for web applications.',
    tags: ['Node.js',
      'Express.js',
      'Firebase',
      'Supabase']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Working with cloud databases and authentication for real-time applications.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'AI Automation & Chatbots',
    icon: FaRobot,
    description: 'Creating basic AI chatbots and automations using no-code tools and AI integrations.',
    tags: ['AI Chatbots',
      'n8n (Basics)',
      'OpenAI API',
      'Prompt Design',
      'Workflow Automation']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying web applications and understanding cloud and DevOps fundamentals.',
    tags: ['AWS', 'Docker', 'Vercel', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Figma', 'Jest', 'Asana', 'Jira', 'Agile & Scrum']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Online store with shopping cart, authentication, and payment integration. Manage products and track orders efficiently.",
    image: projectImg1,
    tech: ["React.js", "Node.js", "supabase", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "http://www.3sproshop.com/",
    code: "https://github.com/naz781/Ecommerce-Website",
  },
  {
    title: "Expense Tracker Web App",
    description: "A responsive expense tracking application that allows users to manage, categorize, and track expenses with real-time updates.",
    image: projectImg2,
    tech: ["React.js", "Firebase", "Tailwind CSS", "Vercel"],
    icons: [FaReact, FaCloud, FaDatabase],
    demo: "https://moneycanvas.vercel.app/",
    code: "https://github.com/naz781/Expense-Tracker",
  },
  {
    title: "AI Text Processing Tool",
    description: "An AI-powered text utility that provides text summarization, tone transformation, and content expansion with real-time responses.",
    image: projectImg3,
    tech: ["React.js", "OpenAI API", "FireBase", "Prompt Engineering"],
    icons: [FaReact, FaDatabase, FaRobot],
    demo: "https://github.com/naz781/ai-summary/blob/main/README.md",
    code: "https://github.com/naz781/ai-summary",
  },
  {
    title: "Family Recipe Treasure Platform",
    description: "Role-based recipe manager for adding, editing, and viewing recipes. Share recipes with friends and explore favorites.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Supabase", 'Supabase Auth'],
    icons: [FaReact, FaDatabase, FaLock],
    demo: "https://familyrecipe.vercel.app/",
    code: "https://github.com/naz781/RecipeTreasure",
  },
  {
    title: "AI-Powered LMS Chatbot",
    description: "An AI chatbot for a Learning Management System that answers student queries using organization-specific learning data.",
    image: projectImg5,
    tech: ["React.js", "Ollama", "Vector DB", "Supabase"],
    icons: [FaReact, FaRobot, FaDatabase],
    demo: "https://github.com/naz781/infoTax-react-AI-",
    code: "https://github.com/naz781/infoTax-react-AI-",
  },
  {
    title: "Hotel Booking",
    description: "A responsive and interactive website that allows users to browse, view, and book hotels, with a dashboard to track customer’s past bookings.",
    image: projectImg6,
    tech: ["React.js", "Clerk", "Tailwind CSS", 'Clerk Authentication'],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://github.com/naz781/hotelvercel/blob/main/README.md",
    code: "https://github.com/naz781/hotel"
  }
];


export const workData = [
  {
    role: "Project Manager / Full-Stack Developer",
    company: "3S-Smart Solutions Stars, Inc. (New York)",
    duration: "2019 - Present",
    description:
      "Lead the planning, execution, and delivery of multiple web projects. Collaborate closely with clients, vendors, and cross-functional teams to ensure projects are delivered on time, within scope, and aligned with business goals. By streamlining workflows and applying effective project management practices, improved project delivery timelines by 15%. Oversee projects from concept to implementation to deliver scalable, user-centric solutions.",
    color: "purple"
  },
  {
    role: " Web Developer ",
    company: "3S-Smart Solutions Stars, Inc. (New York)",
    duration: "2024 - Present",
    description:
      "Actively develop and deliver client-focused projects, including AI-powered tools, LMS chatbots, and e-commerce platforms. Work closely with project teams to translate requirements into functional, user-centric applications, contributing directly to development, testing, and deployment. Ensure responsive, scalable, and high-quality solutions that align with overall project goals and client expectations.",
    color: "pink"
  },
  {
    role: "Assistant Principal / Director of LMS",
    company: "Al-Sehar Academy, Karachi",
    duration: "2004 - 2017",
    description:
      "Led the implementation and improvement of a Learning Management System, collaborated with IT teams and educators, and digitized academic and administrative workflows, increasing operational efficiency by 20%.",
    color: "blue"
  }
];
