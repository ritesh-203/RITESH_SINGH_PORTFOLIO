/**
 * Ritesh Singh - Portfolio Data Source
 * Centralized, structured data for easy maintenance and updates.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Ritesh Singh",
    role: "Upcoming Developer",
    subtitle: "Aspiring Software Engineer & Full-Stack Web Developer",
    bio: "Hi, I’m Ritesh Singh, a B.Tech student and aspiring developer passionate about building creative, user-friendly, and impactful digital experiences. I’m currently developing my skills in programming, web development, and software development, while exploring new technologies and turning ideas into real-world projects.",
    location: "Greater Noida / Delhi NCR, India",
    college: "GL Bajaj Institute of Technology and Management",
    status: "Open to Internships & Junior Roles",
    statusDetail: "Actively seeking summer/fall developer internships, open source collaborations, and entry-level engineering opportunities.",
    email: "rriteshsingh1601@gmail.com",
    github: "https://github.com/ritesh-203",
    linkedin: "https://www.linkedin.com/in/ritesh-singh-396528345?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    resumeLink: "#contact",
  },

  stats: [
    { label: "1st Year B.Tech YGPA", value: "7.00", suffix: "/10", detail: "Strong engineering core foundation" },
    { label: "Class X Academic Score", value: "84.34", suffix: "%", detail: "Distinction in secondary education" },
    { label: "Class XII Science Score", value: "73.2", suffix: "%", detail: "Physics, Chemistry, Mathematics" },
    { label: "Verified Certificates", value: "3", suffix: " Verified", detail: "IBM, Edunet & Vodafone Idea" },
    { label: "DSA Practice Problems", value: "150", suffix: "+", detail: "C++ & problem-solving practice" },
  ],

  // Specific 7 skills requested: C, C++, JavaScript, HTML & CSS, Python, AI, DSA
  skills: [
    {
      id: "c",
      name: "C",
      category: "languages",
      categoryTitle: "Programming Languages",
      level: "Proficient",
      badge: "Core Systems & Logic",
      icon: "terminal",
      description: "Memory management, pointers, structures, file I/O, and foundational systems programming."
    },
    {
      id: "cpp",
      name: "C++",
      category: "languages",
      categoryTitle: "Programming Languages",
      level: "Proficient",
      badge: "Primary Language / OOP",
      icon: "cpu",
      description: "Object-oriented architecture, STL containers, pointers, algorithms, and modular design."
    },
    {
      id: "dsa",
      name: "Data Structures & Algorithms (DSA)",
      category: "dsa",
      categoryTitle: "CS Fundamentals",
      level: "Active Practice (150+ Solved)",
      badge: "Arrays, Trees, Stacks, Big-O",
      icon: "git-branch",
      description: "Time & space complexity analysis, sorting algorithms, searching, recursion, and problem solving."
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "web",
      categoryTitle: "Web & Frontend",
      level: "Working Knowledge",
      badge: "Modern ES6+ & DOM",
      icon: "file-code",
      description: "Asynchronous programming, promises, DOM manipulation, events, and modern client-side scripting."
    },
    {
      id: "html-css",
      name: "HTML & CSS",
      category: "web",
      categoryTitle: "Web & Frontend",
      level: "Advanced",
      badge: "Semantic & Responsive UI",
      icon: "layout",
      description: "Semantic HTML5 markup, modern CSS3 layouts, Flexbox, Grid, media queries, and accessibility."
    },
    {
      id: "python",
      name: "Python",
      category: "languages",
      categoryTitle: "Programming Languages",
      level: "Foundational",
      badge: "Scripting & Basics",
      icon: "code-2",
      description: "Core syntax, data structures, automation scripting, and algorithmic problem solving."
    },
    {
      id: "ai",
      name: "Artificial Intelligence (AI)",
      category: "ai",
      categoryTitle: "Emerging Tech",
      level: "IBM SkillsBuild Certified",
      badge: "Machine Learning & Ethics",
      icon: "sparkles",
      description: "AI terminology, machine learning fundamentals, computer vision, NLP concepts, and ethical AI."
    }
  ],

  certificates: [
    {
      id: "edunet-fullstack",
      title: "Introduction to Full-Stack Web Development",
      issuer: "Vodafone Idea Foundation • _VOIS • Edunet Foundation",
      badge: "Course Completion Certificate",
      category: "web",
      issueDate: "August 19, 2026",
      credentialId: "VFLMS26_168494",
      verifyUrl: "assets/cert-fullstack-edunet.png",
      image: "assets/cert-fullstack-edunet.png",
      shortDesc: "Official Certificate of Completion awarded for the successful completion of the Introduction to Full-Stack Web Development curriculum.",
      fullDesc: "Presented to Ritesh Singh by Vodafone Idea Foundation, _VOIS, and Edunet Foundation in recognition of the successful completion of 'Introduction to Full-Stack Web Development'. The credential validates end-to-end web fundamentals including frontend page design, server-side communication concepts, client-server architecture, and web development best practices.",
      topics: [
        "Full-Stack Web Architecture & Application Lifecycle",
        "Frontend Page Structure with HTML5 & Styling with CSS3",
        "Client-Side Interactivity with JavaScript",
        "Client-Server Communication & API Concepts",
        "Professional Developer Workflow Standards"
      ],
      skillsLearned: ["Full-Stack Web Dev", "HTML & CSS", "JavaScript", "Edunet Foundation", "Vodafone Idea Foundation"],
      isCredly: false,
      isImage: true
    },
    {
      id: "ibm-ai",
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      badge: "Credly Verified Badge",
      category: "ai",
      issueDate: "Aug 18, 2026",
      credentialId: "a3aa8984-b8c5-4b84-8140-0664c4903df2",
      verifyUrl: "https://www.credly.com/badges/a3aa8984-b8c5-4b84-8140-0664c4903df2",
      image: "assets/cert-ibm-ai.svg",
      shortDesc: "Comprehensive certification by IBM validating commitment to professional excellence and foundational mastery of Artificial Intelligence concepts.",
      fullDesc: "Earned from IBM SkillsBuild in recognition of the commitment to achieve professional excellence. This credential certifies an understanding of foundational Artificial Intelligence terminology, the evolution of AI systems, machine learning concepts, natural language processing, neural networks, and ethical considerations surrounding modern AI deployment.",
      topics: [
        "Foundational Artificial Intelligence Concepts",
        "Machine Learning & Pattern Recognition Basics",
        "Natural Language Processing & Computer Vision Overview",
        "AI Ethics, Bias, and Trustworthy Technology",
        "Real-World Industry Applications of AI"
      ],
      skillsLearned: ["Artificial Intelligence", "Machine Learning", "IBM SkillsBuild", "Tech Ethics", "Emerging Tech"],
      isCredly: true,
      isImage: false
    },
    {
      id: "ibm-troubleshoot",
      title: "Lab: Troubleshoot Your Code Using IBM Bob",
      issuer: "IBM SkillsBuild",
      badge: "Hands-on Lab Certificate",
      category: "labs",
      issueDate: "18 Aug 2026 (GMT)",
      courseId: "ALM-COURSE_4071307",
      credentialId: "ALM-COURSE_4071307",
      verifyUrl: "https://www.credly.com/badges/a3aa8984-b8c5-4b84-8140-0664c4903df2",
      systemOfRecord: "Adobe Learning Manager system of record",
      duration: "30 mins (Intensive Lab)",
      image: "assets/cert-ibm-troubleshoot.svg",
      shortDesc: "Official completion certificate for the hands-on technical laboratory focusing on automated code debugging and troubleshooting with IBM Bob.",
      fullDesc: "Successfully satisfied the requirements for the practical laboratory 'Troubleshoot Your Code Using IBM Bob' issued by IBM SkillsBuild according to the Adobe Learning Manager system of record. Covered systematic runtime exception tracing, code debugging strategies, and developer workflow enhancement through automated troubleshooting assistants.",
      topics: [
        "Hands-on Code Debugging & Exception Tracing",
        "Automated Troubleshooting Workflows with IBM Bob",
        "Error Diagnostic Log Inspection & Root Cause Analysis",
        "Code Reliability & Maintenance Best Practices"
      ],
      skillsLearned: ["Code Troubleshooting", "Debugging", "IBM Bob", "Developer Productivity", "Software Quality"],
      isCredly: false,
      isImage: false
    }
  ],

  education: [
    {
      period: "2025 - 2029",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering Stream",
      institution: "GL Bajaj Institute of Technology and Management",
      score: "7.00 YGPA (Year 1 Overall)",
      badge: "Current Degree",
      highlights: [
        "Completed 1st Year Engineering foundation with an overall 7.00 YGPA",
        "Active coursework in Programming Principles (C/C++), Mathematics, and Computer Fundamentals",
        "Consistent hands-on practice in Data Structures, Problem Solving, and Web Technologies",
        "Certified in AI (IBM), Full-Stack (Vodafone Idea / Edunet), and Code Debugging"
      ]
    },
    {
      period: "Completed 2024",
      degree: "Higher Secondary Certificate (Class XII)",
      field: "Science Stream (PCM - Physics, Chemistry, Mathematics)",
      institution: "Senior Secondary Board Examination",
      score: "73.20%",
      badge: "Merit",
      highlights: [
        "Solid grounding in advanced mathematics, analytical thinking, and physics principles",
        "Built problem-solving habits that laid the foundation for computer programming and algorithmic logic"
      ]
    },
    {
      period: "Completed 2022",
      degree: "Secondary School Examination (Class X)",
      field: "General Academic Curriculum",
      institution: "Secondary School Board",
      score: "84.34%",
      badge: "Academic Distinction",
      highlights: [
        "Graduated with distinction with an 84.34% cumulative score",
        "Developed strong interest in computers, logical reasoning, and technology early on"
      ]
    }
  ],

  terminalCommands: {
    help: "Available commands: whoami, bio, certificates, skills, education, stats, contact, clear, theme",
    whoami: "Ritesh Singh - Upcoming Developer & B.Tech Student at GL Bajaj (Greater Noida)",
    bio: "Hi, I’m Ritesh Singh, a B.Tech student and aspiring developer passionate about building creative, user-friendly, and impactful digital experiences.",
    certificates: "1. Introduction to Full-Stack Web Development (Vodafone Idea Foundation • _VOIS • Edunet | ID: VFLMS26_168494)\n2. Getting Started with Artificial Intelligence (IBM SkillsBuild | Credly: a3aa8984-b8c5-4b84-8140-0664c4903df2)\n3. Lab: Troubleshoot Your Code Using IBM Bob (IBM SkillsBuild | Course: ALM-COURSE_4071307)",
    certs: "1. Full-Stack Web Development (Edunet & Vodafone Idea)\n2. Artificial Intelligence (IBM SkillsBuild)\n3. Code Troubleshooting Lab (IBM Bob)",
    skills: "Core Skills (7):\n• C\n• C++\n• Data Structures & Algorithms (DSA)\n• JavaScript\n• HTML & CSS\n• Python\n• Artificial Intelligence (AI)",
    education: "• B.Tech @ GL Bajaj Institute of Technology and Management (1st Year YGPA: 7.00)\n• Class XII Science (73.2%)\n• Class X (84.34%)",
    stats: "• YGPA: 7.00/10 | Class X: 84.34% | Class XII: 73.2%\n• 3 Verified Certifications (IBM & Edunet Foundation)\n• 150+ DSA problems solved",
    contact: "• Email: rriteshsingh1601@gmail.com\n• GitHub: https://github.com/ritesh-203\n• LinkedIn: https://www.linkedin.com/in/ritesh-singh-396528345",
  }
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
