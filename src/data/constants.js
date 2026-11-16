// Images are served from public/images (Firebase Storage was retired on the Spark plan).
const localImage = (file) => `${process.env.PUBLIC_URL}/images/${file}`;

export const Bio = {
  name: "Chirag Metaliya",
  roles: [
    "Full Stack Developer",
    "Software Developer",
    "Backend Programmer",
  ],
  description:
    "I am a software developer with 7+ years of hands-on experience building scalable backend systems and cloud solutions. My core stack is C#, .NET and ASP.NET, alongside Node.js and Python, and I design and run services on AWS, from Lambda-based microservices to IoT pipelines that process real-time device data. I also bring AI into real products, from computer-vision models to AI-powered application features. Along the way I have built REST APIs, integrated platforms like Twilio and HubSpot, optimized SQL Server and MySQL databases, and delivered front ends in React and React Native. I enjoy turning requirements into clean, maintainable code, thrive in Agile teams, and have mentored more than a dozen junior developers.",
  github: "https://github.com/chiragmetaliya",
  resume:
  "https://docs.google.com/document/d/13MA-b5u78Vm4k8zm6h_ueIy8MkmHluYj/edit?usp=sharing&ouid=100736605283846309743&rtpof=true&sd=true",
  linkedin: "https://www.linkedin.com/in/chirag-metaliya/",
  leetcode: "https://leetcode.com/u/metaliya/",
  insta: "https://www.instagram.com/chirag_metaliyaa/",
  facebook: "https://www.facebook.com/chiraagmetaliya/",
  skype:"https://join.skype.com/invite/leuPIwnseNWx",
};

export const skills = [
  {
    title: "Backend",
    skills: [
      {
        name: "C#",
        image: localImage("skills/csharp.webp"),
      },
      {
        name: "ASP.NET",
        image: localImage("skills/asp-net.webp"),
      },
      {
        name: ".NET Core",
        image: localImage("skills/net-core.webp"),
      },
      {
        name: "Node Js",
        image: localImage("skills/node-js.webp"),
      },
      
      {
        name: "Python",
        image:
          localImage("skills/python.webp"),
      },
      {
        name: "SQL Server",
        image:
          localImage("skills/sql-server.webp"),
      },
      {
        name: "MySQL",
        image:
          localImage("skills/mysql.webp"),
      },
      {
        name: "Postgresql",
        image: localImage("skills/postgresql.webp"),
      },
      {
        name: "MongoDB",
        image:
          localImage("skills/mongodb.webp"),
      }
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: localImage("skills/html.webp"),
      },
      {
        name: "CSS",
        image:
          localImage("skills/css.webp"),
      },
      {
        name: "JavaScript",
        image:
          localImage("skills/javascript.webp"),
      },
      {
        name: "Razor",
        image:
          localImage("skills/razor.webp"),
      },
      {
        name: "Blazor",
        image:
          localImage("skills/blazor.webp"),
      },
      {
        name: "Bootstrap",
        image:
          localImage("skills/bootstrap.webp"),
      },
      {
        name: "React Js",
        image:
          localImage("skills/react-js.webp"),
      },
      {
        name: "Redux",
        image:
          localImage("skills/redux.webp"),
      },
      {
        name: "Material UI",
        image:
          localImage("skills/material-ui.webp"),
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "AWS",
        image:
          localImage("skills/aws.webp"),
      },
      {
        name: "Google Cloud",
        image:
          localImage("skills/google-cloud.webp"),
      },
      {
        name: "Microsoft IIS",
        image:
          localImage("skills/microsoft-iis.webp"),
      },
      {
        name: "Docker",
        image:
          localImage("skills/docker.webp"),
      },
      {
        name: "Jenkins",
        image:
          localImage("skills/jenkins.webp"),
      },
      {
        name: "Nginx",
        image: localImage("skills/nginx.webp"),
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Visual Studio",
        image:
          localImage("skills/visual-studio.webp"),
      },
      {
        name: "Postman",
        image:
          localImage("skills/postman.webp"),
      },
      {
        name: "Swagger",
        image:
          localImage("skills/swagger.webp"),
      },
      {
        name: "Git",
        image:
          localImage("skills/git.webp"),
      },
      {
        name: "GitHub",
        image:
          localImage("skills/github.webp"),
      },
      {
        name: "Power BI",
        image:
          localImage("skills/power-bi.webp"),
      },
      {
        name: "VS Code",
        image:
          localImage("skills/vs-code.webp"),
      },
      {
        name: "Netlify",
        image:
          localImage("skills/netlify.webp"),
      },
      {
        name: "Figma",
        image:
          localImage("skills/figma.webp"),
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: localImage("hallcon.jpeg"),
    role: "Software Developer",
    company: "Hallcon Corporation · Toronto, ON (Hybrid)",
    date: "Aug 2025 - Present",
    desc: "🚀 Build and maintain backend services and RESTful APIs in C#, ASP.NET and .NET that power IoT-connected devices and the applications that monitor them.\n\n 🚀 Develop IoT data pipelines on AWS (IoT Core, Lambda, API Gateway, DynamoDB, S3) to ingest, process and store real-time telemetry from field devices.\n\n 🚀 Contribute to React Native mobile apps, wiring them to .NET backend APIs so users can view device status, alerts and reports on the go.\n\n 🚀 Gather requirements from product owners and stakeholders, then plan new features or changes to existing systems with the rest of the team.\n\n 🚀 Review how a change to one service or device workflow affects related components before release, preventing regressions across the platform.\n\n 🚀 Write unit and integration tests, troubleshoot production issues across cloud and device layers, and refactor legacy .NET Framework code.\n\n 🚀 Monitor and tune AWS workloads with CloudWatch for performance, reliability and cost.\n\n 🚀 Keep technical documentation, API specifications and release notes current for new and updated features.",
    skills: [
      "C#",
      ".NET Framework",
      "ASP.NET",
      ".NET Core",
      "Entity Framework",
      "SQL Server",
      "AWS IoT Core",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "CloudWatch",
      "React Native",
      "TypeScript",
    ],
    doc: "#",
  },
  {
    id: 1,
    img: localImage("i2techs_logo.jpeg"),
    role: "Software Developer",
    company: "i2TECHS · Ahmedabad, India (Remote)",
    date: "May 2022 - Jan 2023",
    desc: "🚀 Designed, wrote, tested and debugged backend logic and RESTful APIs using Node.js, Express, C#, ASP.NET and .NET Core.\n\n 🚀 Developed and maintained a web application that enables auto dealers to auction vehicle inventories across verticals such as Auto, RVs and Powersports.\n\n 🚀 Analyzed client requirements to recommend and plan new features and modifications to the existing platform and its microservices.\n\n 🚀 Integrated third-party APIs for digital document signing, vehicle transportation and tracking, and deal tracking in HubSpot CRM, ensuring smooth transactions between buyers and sellers.\n\n 🚀 Wrote, modified, integrated and tested code for automated email and SMS communication workflows using Twilio.\n\n 🚀 Managed AWS services (including Lambda) to support the reliability and efficiency of microservices written in Python and Node.js.\n\n 🚀 Evaluated interdependencies between services before releasing changes to prevent unintended effects in related modules.\n\n 🚀 Prepared technical documentation on the status, operation and maintenance of the software.\n\n 🚀 Led and mentored more than 12 junior programmers, helping them apply logical thinking and programming to solve real-world problems.",
    skills: [
      "C#",
      "ASP.NET",
      ".NET Core",
      "Node.js",
      "Express",
      "React.js",
      "Vue.js",
      "MySQL",
      "Microsoft SQL Server",
      "Sequelize",
      "AWS",
      "Lambda",
      "Python",
      "Twilio",
      "HubSpot",
      "Mixpanel",
      "JavaScript",
    ],
    doc: "#",
  },
  {
    id: 2,
    img: localImage("maruti_logo.jpeg"),
    role: "Full Stack Developer",
    company: "Maruti Web Solution · Surat, India",
    date: "Jun 2020 - May 2022",
    desc: "🚀 Designed, wrote, tested and corrected code for web applications and APIs using Node.js, React.js and Vue.js.\n\n 🚀 Developed a cross-platform system that notifies banking customers of fraudulent debit card transactions through SMS and email channels using Twilio and other communication APIs.\n\n 🚀 Analyzed requirements from banking and service-sector clients worldwide to plan new systems and modifications to existing applications.\n\n 🚀 Wrote, modified, integrated and tested code connecting applications with Iterable, Segment, Mixpanel and AWS services.\n\n 🚀 Worked closely with the team to deliver real-time solutions, identifying and communicating technical problems and their resolutions.\n\n 🚀 Led instructional sessions for junior developers to prepare them for real-time project collaboration and timely bug resolution.\n\n 🚀 Documented new and updated features to support ongoing maintenance of client applications.",
    skills: [
      "Node.js",
      "Express",
      "React.js",
      "Vue.js",
      "MySQL",
      "AWS",
      "Docker",
      "Twilio",
      "Iterable",
      "Segment",
      "Mixpanel",
      "Mailchimp",
      "JavaScript",
    ],
    doc: "#",
  },
  {
    id: 3,
    img: localImage("codesket_logo.jpeg"),
    role: "Full Stack Web Developer",
    company: "Codesket · Surat, India (Freelance)",
    date: "Mar 2017 - May 2020",
    desc: "🚀 Designed, wrote, tested and corrected code for a business template generation SaaS platform.\n\n 🚀 Developed and optimized RESTful APIs using Node.js and Express to improve data processing and application performance.\n\n 🚀 Wrote, modified, integrated and tested code across multiple stacks, including Node.js, MeteorJS, React.js, Vue.js, Angular, MySQL and AWS.\n\n 🚀 Followed a Test-Driven Development (TDD) approach to keep code reliable and free of unhandled exceptions.\n\n 🚀 Designed efficient SQL queries to extract data from large, highly populated business databases.\n\n 🚀 Integrated real-time communication with prospects through chatbots and third-party bulk mailing tools such as Mailchimp.\n\n 🚀 Assisted in collecting user requirements and developing specifications for new features, and researched and evaluated software tools for client projects.",
    skills: [
      "Node.js",
      "Express",
      "React.js",
      "MeteorJS",
      "Vue.js",
      "Angular",
      "MySQL",
      "Docker",
      "AWS",
      "Mailchimp",
      "Mailtrap",
      "JavaScript",
    ],
    doc: "#",
  },
  {
    id: 4,
    img: localImage("default.png"),
    role: "Web Development Intern",
    company: "Netizen Solutions · Ahmedabad, India",
    date: "Jan 2014 - Jun 2014",
    desc: "🚀 Wrote, tested and debugged code in C# and .NET for a secure realtor business website that tracks leads and shortens manual processes.\n\n 🚀 Redesigned and modified pre-existing code to make it compatible with the ES6 JavaScript standard.\n\n 🚀 Designed efficient SQL and LINQ queries to extract and process data from a large data pool.\n\n 🚀 Worked closely with the product manager, back-end engineer and stakeholders to gather requirements and improve the project.",
    skills: [
      "C#",
      ".NET",
      "LINQ",
      "KnockoutJS",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Jira",
    ],
    doc: "#",
  },
];

export const education = [
  {
    id: 0,
    img: localImage("uwindsor_logo.png"),
    school: "University of Windsor, ON, Canada",
    date: "May 2023 - Aug 2024",
    grade: "8.0 GPA",
    desc: "I've completed graduation from University of Windsor, ON, Canada. I have completed 4 terms and have a GPA of 8.0. I have taken courses in Advanced Software Engineering, Advanced Data Structures, Advanced System Programming, Advanced Database Management, Internet Applications & Distributed Systems, Network and Security, among others. I also participated in various academic events like Demo Day and contributed as a volunteer in many activities while pursuing my graduation from UOW.",
    degree: "Masters in Applied Computing -  Computer Science",
  },
  {
    id: 1,
    img: localImage("vvp_logo.jpeg"),
    school: "V.V.P Engineering College under Gujarat Technological University, Gujarat, India",
    date: "Aug 2014 - June 2017",
    grade: "9.24 CGPA",
    desc: "I completed my Bachelor’s degree in Information Technology from Gujarat Technological University, where I gained a strong foundation in various key areas of IT. My coursework included Java Programming, Database Management Systems, Data Structures and Algorithms, Operating Systems, and Networking and Security, among others. During my time at GTU, I developed a solid understanding of both theoretical concepts and practical applications, preparing me for diverse challenges in the IT field.",
    degree: "Bachelors in Information Technology",
  },
  {
    id: 2,
    img: localImage("nirma_logo.png"),
    school: "Institute of Diploma Studies, under Nirma University",
    date: "Apr 2011 - July 2014",
    grade: "8.84 CGPA",
    desc: "I completed a Diploma in Information Technology from Nirma University, where I acquired hands-on experience and knowledge in several core areas of IT. My studies included C and C++ Programming, Java Programming, Web Development, Database Management Systems, and Android Application Development. Additionally, I explored foundational concepts in Networking and Software Engineering, which provided me with a well-rounded understanding of both software development and network systems.",
    degree: "Diploma In Information Technology",
  },
];

export const projects = [
  {
    id: 0,
    title: "HearNote",
    date: "Sep 2023 - Jan 2024",
    shortdesc:"HearNote is an innovative web application designed to provide real-time transcription and translation of audio files, significantly enhancing accessibility for users across various language backgrounds.",
    description:
      "\n\n🚀  Designed a web application using ReactJS that provides real-time transcription and translation of audio files.\n\n 🚀  Optimized performance with Transformers library and Web Workers, decreasing the processing time of transcription and translation tasks by 40%.\n\n 🚀  Crafted a responsive user interface with TailwindCSS, enhancing the user experience and reducing load times by 30%.\n\n 🚀  Utilized JavaScript to seamlessly integrate ML models in the browser to enable users to download transcriptions and translations, which increased user satisfaction by 25%.\n\n 🚀  Leveraged ReactJS to effectively manage states and UI components, ensuring smooth and reliable operation for files up to 50MB.",
    image:
      localImage("hearnote.svg"),
    tags: [
      "Javascript",
      "React Js",
      "Webworkers",
      "Postman",
      "TailwindCSS",
      "Transformers",
      "Github",
      "Scrum"
    ],
    category: "web app",
    github: "https://github.com/chiragmetaliya/hearnote",
    webapp: "https://hearnote.netlify.app/",
  },
  {
    id: 1,
    title: "TipSplit",
    date: "Sep 2023 - Jan 2024",
    shortdesc:"The Tip Split app is a ReactJS-based application designed to simplify the process of dividing tips among employees.",
    description:
      "\n\n🚀  Built as a portfolio project, this web app not only demonstrates the practical application of ReactJS but also serves as a learning platform for key advanced topics in modern web development. \n\n🚀  𝐊𝐞𝐲 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐀𝐫𝐞𝐚𝐬: \n - 𝐂𝐨𝐝𝐞 𝐒𝐩𝐥𝐢𝐭𝐭𝐢𝐧𝐠: Implemented techniques to improve the performance of the app by loading code only when needed. \n - 𝐁𝐮𝐧𝐝𝐥𝐞 𝐒𝐢𝐳𝐞 𝐀𝐧𝐚𝐥𝐲𝐬𝐢𝐬: Focused on optimizing and managing the app's bundle size to ensure efficient performance. \n - 𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬𝐢𝐯𝐞 𝐖𝐞𝐛 𝐀𝐩𝐩 (𝐏𝐖𝐀): Transformed the app into a PWA, enhancing its accessibility and offline capabilities. \n - 𝐀𝐝𝐯𝐚𝐧𝐜𝐞𝐝 𝐂𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧: Applied custom configurations to fine-tune the app's build process and environment settings. \n - 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭: Deployed the app efficiently, following best practices for ReactJS applications.",
    image:
      localImage("tipsplit.jpeg"),
    tags: [
      "Javascript",
      "Express",
      "React Js",
      "TailwindCSS",
      "Postman",
      "Github"
    ],
    category: "web app",
    github: "https://github.com/chiragmetaliya/tipssplitapp",
    webapp: "https://chiragmetaliya.github.io/tipssplitapp/",
  },
  {
    id: 2,
    title: "ReSecure",
    date: "May 2024 - Aug 2024",
    shortdesc:"ReSecureCamera is an innovative home security app developed using Flutter, providing seamless cross-platform functionality for Android. It enables users to set up cameras effortlessly and manage user access, ensuring multiple users can view feeds securely. The app features advanced motion detection with real-time recording capabilities, storing motion clips for future reference.",
    description:
      "\n\n🚀  Developed a comprehensive home security app using Flutter, providing seamless cross-platform functionality across Android and iOS.\n\n 🚀  Integrated Firebase to support real-time notifications and multi-user access control, improving response times by 35%.\n\n 🚀  Optimized motion detection and custom alert preferences, reducing false alerts by 42% and enhancing user trust.\n\n 🚀  Designed an intuitive user interface, making it perfectly suitable for non-technical users as well.\n\n 🚀  Planned future expansion to web applications to broaden platform compatibility and accessibility.",
    image:
      localImage("resecure-camera.svg"),
    tags: [
      "Flutter",
      "Firebase",
      "GoogleCloud",
      "Video Streaming",
      "Motion Detection",
      "REST APIs",
      "Postman",
      "Github"
    ],
    category: "android app",
    github: "https://github.com/chiragmetaliya/ReSecureCamera"
  },
  {
    id: 3,
    title: "AdventureMinds",
    date: "Jan 2024 - May 2024",
    shortdesc:"Leveraging Python and Django, the application allows users to register, create and join trips, and set personalized preferences. Users can rate and review trips, engage in real-time chats with trip organizers, fostering a community of explorers. The responsive user interface built with Bootstrap and JavaScript ensures an intuitive user experience, while SQLite3 efficiently handles data management.",
    description:
      "\n\n🚀  Developed a user-friendly platform using Django to connect solo travelers, facilitating seamless interactions and trip planning.\n\n 🚀  Implemented trip creation and joining features along with search recommendation based on jaccard similarity metric.\n\n 🚀  Enabled real-time chat functionality leveraging Javascript and Socket programming, enhancing communication between users and trip organizers.\n\n 🚀  Designed a responsive interface with Bootstrap, ensuring an optimal user experience across various devices.",
    image:
      localImage("adventure-minds.svg"),
    tags: [
      "Python",
      "Django",
      "Javascript",
      "Socket Programming",
      "REST APIs",
      "Postman",
      "Github",
      "Agile"
    ],
    category: "web app",
    github: "https://github.com/chiragmetaliya/AdventureMinds"
  },
  {
    id: 4,
    title: "MiteCounterPro ",
    date: "Jan 2024 - Apr 2024",
    shortdesc:"MiteCounterPro is a machine learning project developed in collaboration with GrowLiv Biologicals to identify and count mites from video data with an accuracy of 89%. Utilizing YOLOv8's object tracking feature, it reduces manual counting time by 70%. Performance optimization has achieved a 30% reduction in latency, enhancing real-time video processing, with plans to expand capabilities for detecting additional biological specimens.",
    description:
      "\n\n🚀  Collaborated in creating a machine learning model on python that identifies and counts mites from video data by GrowLiv Biologicals with an accuracy of 89%.\n\n 🚀  Leveraged the object tracking feature already available within YOLOv8 for identifying and tracking two species of mites, which reduced 70% of the time required by manual counting.\n\n 🚀  Deployed the model within a web application using Django, improving accessibility and usability for field researchers.\n\n 🚀  Optimized the model’s performance for latency reduction by 30% which further enhanced real-time video processing.\n\n 🚀  Planned further improvements to expand the system’s capabilities for detecting additional biological specimens.",
    image:
      localImage("mitecounterpro.svg"),
    tags: [
      "Figma",
      "Python",
      "Django",
      "Flask",
      "YOLOv8",
      "Machine Learning",
      "Video Processing",
      "REST APIs"
    ],
    category: "web app",
    github: "https://github.com/chiragmetaliya/MiteCounterPro"
  },
  {
    id: 5,
    title: "FileshareEase ",
    date: "Sep 2023 - Jan 2024",
    shortdesc:"FileShareEase is a distributed file-sharing solution built on Debian 12 using C and Shell scripts, enabling fast and efficient transfers via a command-line interface. The system features multi-threaded client-server communication, enhancing file-sharing efficiency by 45%. With integrated tar.gz support and dynamic connection handling, it allows reliable data exchange.",
    description:
      "\n\n🚀  Developed a distributed file-sharing solution on Debian 12 using C and Shell scripts to enable fast and efficient file transfers through a streamlined command-line interface.\n\n 🚀  Created multi-threaded client-server communication with support for concurrent file transfers resulting into enhanced efficiency in file sharing to about 45%.\n\n 🚀  Integrated tar.gz file transfer functionality with dynamic connection handling, allowing flexible and reliable data exchange.\n\n 🚀  Implemented system logging automation and fetching of files by utilizing cron jobs to minimize manual monitoring efforts by 60%\n\n 🚀  Enhanced the system's file retrieval capabilities by supporting command-line queries based on file size, date, file name, permissions, or extension.",
    image:
      localImage("fileshareease.png"),
    tags: [
      "C",
      "Shell Scripting",
      "Debian 12",
      "Linux",
      "Cron Jobs",
      "Multi-threading"
    ],
    category: "other",
    github: "https://github.com/chiragmetaliya/FileShareEase"
  },
];

export const certifications = [
  {
    id: 0,
    title: "AWS Certified Cloud Practitioner",
    date: "Feb 2025 - Feb 2028",
    description:
      "Certified as an AWS Cloud Practitioner, demonstrating a strong foundational understanding of AWS Cloud concepts, core services, security, architecture principles, pricing models, and support plans. The certification covers key areas such as IAM, compute and storage services, billing and cost management, cloud deployment models, and the AWS shared responsibility model. It also includes practical insights into global infrastructure, best practices for building in the cloud, and identifying appropriate AWS services for common use cases.",
    image:
      localImage("aws-certificate.png"),
    tags: [
      "AWS",
      "EC2",
      "S3",
      "RDS",
      "DynamoDB",
      "Lambda",
      "API Gateway",
      "Cloudformation"
    ],
    category: "development",
    certificateLink: "https://cp.certmetrics.com/amazon/en/public/verify/credential/6019008dc48940a9bf06893206cdd45a"
  },
  {
    id: 1,
    title: "NodeJS - The Complete Guide",
    date: "Jun 2021 - Oct 2021",
    description:
      "Certified in comprehensive Node.js development, covering key concepts such as core modules, Express.js, MVC architecture, SQL and NoSQL database integration, user authentication, file handling, building REST and GraphQL APIs, real-time applications with WebSockets, and automated testing. The certification also includes hands-on experience with Stripe.js for payments, TypeScript, and deploying Node.js applications.",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-756ce1a0-f9ff-4bab-8dd1-023d8e90d831.jpg",
    tags: [
      "NodeJS",
      "SQL",
      "MongoDB",
      "TypeScript",
      "Deno.js",
      "Stripe",
      "GraphQL",
      "Automated Testing"
    ],
    category: "development",
    certificateLink: "https://www.udemy.com/certificate/UC-756ce1a0-f9ff-4bab-8dd1-023d8e90d831/"
  },
  {
    id: 2,
    title: "Creating a Dev Environment in AWS with Terraform",
    date: "Jul 2024 - Aug 2024",
    description:
      "Certified in AWS development, focusing on best practices for setting up development environments using Terraform. Gained expertise in configuring, writing, troubleshooting, and updating AWS Lambda functions, as well as integrating Simple Queue Service (SQS) queues with Lambda. Additionally, developed skills in managing AWS WorkSpaces and optimizing regions across development and production environments.",
    image:
      localImage("cert-aws-terraform.svg"),
    tags: [
      "AWS",
      "Deployment",
      "Terraform",
      "SQS",
      "Lambda"
    ],
    category: "development",
    certificateLink: "https://www.linkedin.com/learning/certificates/3459fdf04625902ae668e6a6fb2e9f532eb3130601b1d8d4243924980b7da9f0"
  },
  {
    id: 3,
    title: "React: Design Patterns",
    date: "Jun 2024 - Aug 2024",
    description:
      "Certified in advanced React development, specializing in design patterns that provide efficient and reusable solutions to common application challenges. Acquired expertise in using composition, higher-order components, state hoisting, controlled and uncontrolled components, and applying best practices for organizing React components to create well-structured codebases.",
    image:
      localImage("cert-react-design-patterns.svg"),
    tags: [
      "ReactJS",
      "Software Engineering",
      "Design Patterns",
      "Component Composition",
      "Code Structuring"
    ],
    category: "development",
    certificateLink: "https://www.linkedin.com/learning/certificates/1df040eed96ce5596688747da4befa31c060c40b19c9cb572ca2c06ac3af0613"
  },
  {
    id: 4,
    title: "Software Design: From Requirements to Release",
    date: "Jul 2024 - Aug 2024",
    description:
      "Certified in software design and development, specializing in full life-cycle project implementation. Acquired skills in requirements elicitation and validation, proof of concept modeling, software design, coding, testing, and best practices for beta deployment and refactoring. Gained hands-on experience managing and structuring projects beyond coding, with a focus on team collaboration and realistic workflow challenges.",
    image:
      localImage("cert-software-design.svg"),
    tags: [
      "Software Engineering",
      "Software Design",
      "Software Development Lifecycle",
      "Elicitation Validation",
      "Release"
    ],
    category: "software engineering",
    certificateLink: "https://www.linkedin.com/learning/certificates/f8b78697e64cde196062ac185d8ce8b9e304c3f6cb279ad0eb7f11c27ce2f71e"
  },
  {
    id: 5,
    title: "Project Management Foundations",
    date: "Aug 2024 - Aug 2024",
    description:
      "Certified in Project Management Foundation, with expertise in setting project goals, building comprehensive project plans, managing resources, and ensuring timely project completion. Proficient in both traditional and agile project management methodologies, stakeholder analysis, requirements gathering, budgeting, quality planning, and resource procurement. Gained skills in developing project schedules and monitoring performance to keep projects on track.",
    image:
      localImage("cert-project-management.svg"),
    tags: [
      "Project Management",
      "Software Development",
      "Software Engineering"
    ],
    category: "software engineering",
    certificateLink: "https://www.linkedin.com/learning/certificates/fa9e4a00dbfe7374616b49d15f77c26fef0c88bb21a9066a4578f82da5fc7971"
  },
  {
    id: 6,
    title: "Build an AI Application with React and AWS Sagemaker",
    date: "May 2024 - Aug 2024",
    description:
      "Certified in using AWS SageMaker for machine learning model training and deployment. Developed expertise in feature engineering, tuning model performance, and integrating SageMaker with React-based applications. Gained hands-on experience in setting up projects, deploying models, and delivering machine learning results to users through a React front end.",
    image:
      localImage("cert-ai-react-sagemaker.svg"),
    tags: [
      "ReactJS",
      "AWS",
      "Sagemaker",
      "Artificial Intelligence",
      "Deployment"
    ],
    category: "development",
    certificateLink: "https://www.linkedin.com/learning/certificates/0e3b1b5aee3f9d53faed60dfd7474e5348953f4a0c1f63b9eb406d99e1e0435f"
  },
];

