export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Mohamed Taha",
      role: "Frontend Developer",
      tagline: "I craft immersive, high-performance web experiences.",
      description:
        "React.js • Three.js • GSAP • Tailwind CSS • Framer Motion — turning bold ideas into interactive reality on the web.",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
      available: "Available for freelance & full-time roles",
      scroll: "Scroll to explore",
      quickStats: "Years of Experience",
      projectsBuilt: "Projects Built",
      languages: "Languages Spoken",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know me",
      heading: "A passionate frontend developer who loves building for the web",
      p1: "I'm a Front-End Developer specializing in React.js and Next.js, with experience building responsive, high-performance web applications. I'm passionate about clean code, modern UI/UX, and delivering scalable digital solutions.",
      p2: "My toolkit spans React.js, Three.js, GSAP, Tailwind CSS, and Framer Motion — I love creating websites that feel alive, interactive, and memorable. Whether it's 3D experiences, buttery-smooth animations, or pixel-perfect responsive layouts, I enjoy every part of the journey.",
      p3: "When I'm not coding, I'm exploring new design trends, experimenting with creative coding, and looking for the next challenge to grow my skills.",
      traits: [
        {
          title: "Creative Problem Solver",
          description: "I approach every challenge with a fresh perspective.",
        },
        {
          title: "Animation Enthusiast",
          description: "I breathe life into interfaces with motion.",
        },
        {
          title: "Fast Learner",
          description: "Always curious, always learning something new.",
        },
      ],
      downloadCv: "Download CV",
    },
    skills: {
      title: "My Skills",
      subtitle: "What I work with",
      heading: "Technologies & tools I use to bring ideas to life",
      categories: {
        core: "Core Technologies",
        animation: "Animation & 3D",
        styling: "Styling & UI",
        tools: "Tools & Workflow",
        languages: "Languages",
      },
      core: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "TypeScript"],
      animation: ["Three.js", "GSAP", "Framer Motion"],
      styling: ["Tailwind CSS", "Responsive Web Design", "UI/UX Design (Figma)"],
      tools: ["Git & GitHub", "npm", "Vercel", "VS Code"],
      languages: ["Arabic (Native)", "English (Fluent)", "German (Basics)"],
    },
    projects: {
      title: "Projects",
      subtitle: "My work",
      heading: "Featured projects I've built",
      description:
        "A collection of projects showcasing my skills in 3D, animation, and modern frontend development.",
      viewLive: "Live Demo",
      viewCode: "Source Code",
      featured: "Featured Project",
      projects: [
        {
          title: "MacBook Landing Page Clone",
          description:
            "A stunning, buttery-smooth GSAP-powered landing page cloning Apple's MacBook product page, complete with scroll-triggered animations and interactive 3D-style visuals.",
          tech: ["GSAP", "JavaScript", "CSS3", "ScrollTrigger"],
          link: "https://gsap-macbook-landing-rust.vercel.app/",
          github: "https://github.com/mohamedtaha152",
          gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
          icon: "laptop",
        },
        {
          title: "Governance & Management Institution",
          description:
            "A comprehensive portal for a governance and management institution — featuring dashboards, structured layouts, and a clean, professional interface built with React.",
          tech: ["React.js", "Tailwind CSS", "Responsive Design"],
          link: "https://gmi-portal-nine.vercel.app/",
          github: "https://github.com/mohamedtaha152",
          gradient: "from-cyan-500 via-blue-500 to-violet-500",
          icon: "institution",
        },
        {
          title: "AI Game",
          description:
            "An interactive AI-powered game that combines the magic of generative AI with engaging gameplay — a playground where fun meets machine intelligence.",
          tech: ["React.js", "Three.js", "AI Integration", "Framer Motion"],
          link: "https://ai-game-dun.vercel.app/",
          github: "https://github.com/mohamedtaha152",
          gradient: "from-emerald-500 via-teal-500 to-cyan-500",
          icon: "game",
        },
        {
          title: "Egypt Property Redesign",
          description:
            "A personal case-study redesign of a real-estate platform — modern UI overhaul with improved UX, visual hierarchy, and animated interactions.",
          tech: ["React.js", "Tailwind CSS", "GSAP", "UI/UX Redesign"],
          link: "https://egy-property.vercel.app/",
          github: "https://github.com/mohamedtaha152",
          gradient: "from-amber-500 via-orange-500 to-rose-500",
          icon: "building",
        },
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "My journey",
      heading: "Where I've applied my skills",
      items: [
        {
          role: "Front-End Developer (Freelance)",
          company: "Self-Employed",
          period: "2025 — Present",
          description:
            "Developing responsive and high-performance websites for clients using React.js, Next.js, TypeScript, and Tailwind CSS.",
          points: [
            "Built modern user interfaces with a focus on clean code, scalability, and user experience.",
            "Integrated REST APIs and optimized application performance.",
            "Collaborated with clients to gather requirements and deliver custom web solutions.",
            "Created professional website redesigns to improve UI/UX and visual hierarchy.",
          ],
        },
        {
          role: "Front-End Development Intern",
          company: "ICT HUB",
          period: "2026",
          description:
            "Developed responsive web interfaces and collaborated with a team on real-world projects following modern development practices.",
          points: [
            "Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js.",
            "Collaborated with team members on real-world projects and followed modern development practices.",
            "Worked with Git/GitHub for version control and project collaboration.",
            "Improved code quality, debugging skills, and responsive design techniques.",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      subtitle: "My learning path",
      heading: "Education & certifications",
      items: [
        {
          degree: "Bachelor of Computer Engineering",
          institution:
            "Arab Academy for Science, Technology and Maritime Transport (AASTMT)",
          period: "2025 — 2029",
          description:
            "Pursuing a degree in Computer Engineering, building a strong foundation in software development, algorithms, and systems.",
        },
        {
          degree: "Diploma of Web Development",
          institution: "RCC",
          period: "2020 — 2021",
          description:
            "Comprehensive diploma covering modern web development fundamentals, from HTML and CSS to JavaScript and beyond.",
        },
        {
          degree: "Diploma of UI/UX/Web Design",
          institution: "RCC",
          period: "2019 — 2020",
          description:
            "Specialized diploma in UI/UX design principles and web design, building a strong eye for user-centered interfaces.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk",
      heading: "Let's build something amazing together",
      description:
        "Have a project in mind, a job opportunity, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Cairo, Egypt",
      linkedin: "LinkedIn",
      github: "GitHub",
      copyEmail: "Copy",
      copied: "Copied!",
      sendMessage: "Send me an email",
      callMe: "Call me",
      followMe: "Follow me",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Built with",
      name: "Mohamed Taha",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرات",
      education: "التعليم",
      contact: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية",
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "محمد طه",
      role: "مطور واجهات أمامية",
      tagline: "أصنع تجارب ويب غامرة وعالية الأداء.",
      description:
        "React.js • Three.js • GSAP • Tailwind CSS • Framer Motion — أحوّل الأفكار الجريئة إلى واقع تفاعلي على الويب.",
      viewWork: "شاهد أعمالي",
      getInTouch: "تواصل معي",
      available: "متاح للعمل الحر والوظائف بدوام كامل",
      scroll: "مرّر للاستكشاف",
      quickStats: "سنوات الخبرة",
      projectsBuilt: "مشروع مبني",
      languages: "لغات أتحدثها",
    },
    about: {
      title: "من أنا",
      subtitle: "تعرّف عليّ",
      heading: "مطور واجهات أمامية شغوف ببناء تجارب ويب مذهلة",
      p1: "أنا مطور واجهات أمامية متخصص في React.js و Next.js، مع خبرة في بناء تطبيقات ويب متجاوبة وعالية الأداء. شغوف بالكود النظيف وتصميم الواجهات الحديثة وتقديم حلول رقمية قابلة للتوسع.",
      p2: "تشمل أدواتي React.js و Three.js و GSAP و Tailwind CSS و Framer Motion — أحب إنشاء مواقع تشعر بأنها حية وتفاعلية ولا تُنسى. سواء كانت تجارب ثلاثية الأبعاد، أو حركات سلسة، أو تخطيطات متجاوبة دقيقة البكسلات، أستمتع بكل جزء من الرحلة.",
      p3: "عندما لا أكون مشغولاً بالبرمجة، أستكشف اتجاهات التصميم الجديدة، وأجرب البرمجة الإبداعية، وأبحث عن التحدي التالي لتطوير مهاراتي.",
      traits: [
        {
          title: "حلّال مشكلات مبدع",
          description: "أتعامل مع كل تحدٍ بمنظور جديد.",
        },
        {
          title: "شغوف بالحركة",
          description: "أبث الحياة في الواجهات من خلال الحركة.",
        },
        {
          title: "سريع التعلّم",
          description: "دائماً فضولي، ودائماً أتعلم شيئاً جديداً.",
        },
      ],
      downloadCv: "تحميل السيرة الذاتية",
    },
    skills: {
      title: "مهاراتي",
      subtitle: "ما أعمل به",
      heading: "التقنيات والأدوات التي أستخدمها لإحياء الأفكار",
      categories: {
        core: "التقنيات الأساسية",
        animation: "الحركة والثلاثية الأبعاد",
        styling: "التصميم والواجهات",
        tools: "الأدوات وسير العمل",
        languages: "اللغات",
      },
      core: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "TypeScript"],
      animation: ["Three.js", "GSAP", "Framer Motion"],
      styling: ["Tailwind CSS", "Responsive Web Design", "UI/UX Design (Figma)"],
      tools: ["Git & GitHub", "npm", "Vercel", "VS Code"],
      languages: ["العربية (أم)", "الإنجليزية (بطلاقة)", "الألمانية (أساسيات)"],
    },
    projects: {
      title: "المشاريع",
      subtitle: "أعمالي",
      heading: "مشاريع مميزة قمت ببنائها",
      description:
        "مجموعة من المشاريع التي تعرض مهاراتي في الرسم ثلاثي الأبعاد والحركة وتطوير الواجهات الحديثة.",
      viewLive: "عرض مباشر",
      viewCode: "الكود المصدري",
      featured: "مشروع مميز",
      projects: [
        {
          title: "نسخة MacBook Landing Page",
          description:
            "صفحة هبوط مذهلة وسلسة مبنية بـ GSAP تحاكي صفحة MacBook التفاعلية من Apple، مع حركات مرتبطة بالتمرير ومؤثرات ثلاثية الأبعاد.",
          tech: ["GSAP", "JavaScript", "CSS3", "ScrollTrigger"],
          link: "https://gsap-macbook-landing-rust.vercel.app/",
          github: "https://github.com/mohamedtaha152",
          gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
          icon: "laptop",
        },
        {
          title: "مؤسسة الحوكمة والإدارة",
          description:
            "بوابة شاملة لمؤسسة الحوكمة والإدارة — تضم لوحات تحكم وتخطيطات منظمة وواجهة احترافية نظيفة مبنية بـ React.",
          tech: ["React.js", "Tailwind CSS", "Responsive Design"],
          link: "https://gmi-portal-nine.vercel.app/",
          github: "https://github.com/mohamedtaha152",
          gradient: "from-cyan-500 via-blue-500 to-violet-500",
          icon: "institution",
        },
        {
          title: "لعبة الذكاء الاصطناعي",
          description:
            "لعبة تفاعلية مدعومة بالذكاء الاصطناعي تجمع بين سحر الذكاء التوليدي وتجربة لعب شيقة — ملعب يلتقي فيه المتعة بالذكاء الآلي.",
          tech: ["React.js", "Three.js", "AI Integration", "Framer Motion"],
          link: "https://ai-game-dun.vercel.app/",
          github: "https://github.com/mohamedtaha152",
          gradient: "from-emerald-500 via-teal-500 to-cyan-500",
          icon: "game",
        },
        {
          title: "إعادة تصميم مصر العقارية",
          description:
            "دراسة حالة شخصية لإعادة تصميم منصة عقارية — تحديث شامل للواجهة مع تحسين تجربة المستخدم والتسلسل الهرمي البصري والتفاعلات المتحركة.",
          tech: ["React.js", "Tailwind CSS", "GSAP", "UI/UX Redesign"],
          link: "https://egy-property.vercel.app/",
          github: "https://github.com/mohamedtaha152",
          gradient: "from-amber-500 via-orange-500 to-rose-500",
          icon: "building",
        },
      ],
    },
    experience: {
      title: "الخبرات",
      subtitle: "رحلتي",
      heading: "أين طبّقت مهاراتي",
      items: [
        {
          role: "مطور واجهات أمامية (عمل حر)",
          company: "عمل ذاتي",
          period: "2025 — حتى الآن",
          description:
            "تطوير مواقع ويب متجاوبة وعالية الأداء للعملاء باستخدام React.js و Next.js و TypeScript و Tailwind CSS.",
          points: [
            "بناء واجهات مستخدم حديثة مع التركيز على الكود النظيف وقابلية التوسع وتجربة المستخدم.",
            "دمج واجهات REST API وتحسين أداء التطبيقات.",
            "التعاون مع العملاء لجمع المتطلبات وتقديم حلول ويب مخصصة.",
            "إنشاء إعادة تصميم احترافية للمواقع لتحسين واجهة وتجربة المستخدم والتسلسل الهرمي البصري.",
          ],
        },
        {
          role: "متدرب تطوير واجهات أمامية",
          company: "ICT HUB",
          period: "2026",
          description:
            "تطوير واجهات ويب متجاوبة والتعاون مع فريق على مشاريع حقيقية باتباع ممارسات التطوير الحديثة.",
          points: [
            "تطوير واجهات ويب متجاوبة باستخدام HTML و CSS و JavaScript و React.js.",
            "التعاون مع أعضاء الفريق على مشاريع حقيقية واتباع ممارسات التطوير الحديثة.",
            "العمل مع Git/GitHub للتحكم في الإصدارات والتعاون في المشاريع.",
            "تحسين جودة الكود ومهارات التصحيح وتقنيات التصميم المتجاوب.",
          ],
        },
      ],
    },
    education: {
      title: "التعليم",
      subtitle: "مسار التعلّم",
      heading: "التعليم والشهادات",
      items: [
        {
          degree: "بكالوريوس هندسة الحاسب",
          institution:
            "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري (AASTMT)",
          period: "2025 — 2029",
          description:
            "أدرس هندسة الحاسب، أبني أساساً قوياً في تطوير البرمجيات والخوارزميات والأنظمة.",
        },
        {
          degree: "دبلوم تطوير الويب",
          institution: "RCC",
          period: "2020 — 2021",
          description:
            "دبلوم شامل يغطي أساسيات تطوير الويب الحديث، من HTML و CSS إلى JavaScript وما بعدها.",
        },
        {
          degree: "دبلوم تصميم واجهات وتجربة المستخدم للويب",
          institution: "RCC",
          period: "2019 — 2020",
          description:
            "دبلوم متخصص في مبادئ تصميم واجهات وتجربة المستخدم وتصميم الويب، لبناء عين قوية للواجهات المتمحورة حول المستخدم.",
        },
      ],
    },
    contact: {
      title: "تواصل معي",
      subtitle: "لنتحدث",
      heading: "لنبنِ شيئاً رائعاً معاً",
      description:
        "لديك مشروع في ذهنك، أو فرصة عمل، أو تريد فقط إلقاء التحية؟ بريدي الوارد مفتوح دائماً — سأرد عليك في أقرب وقت ممكن.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      locationValue: "القاهرة، مصر",
      linkedin: "لينكد إن",
      github: "جيت هاب",
      copyEmail: "نسخ",
      copied: "تم النسخ!",
      sendMessage: "أرسل لي بريداً",
      callMe: "اتصل بي",
      followMe: "تابعني",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      madeWith: "صُنع بـ",
      name: "محمد طه",
    },
  },
};

export type Language = "en" | "ar";
