/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hill's Portfolio",
  description:
    "A passionate AI/ML innovator dedicated to building scalable, efficient, and socially impactful systems. Thrives on taking ideas from research to real-world deployment, crafting sustainable edge-ready solutions that merge technical depth with meaningful outcomes.",
  og: {
    title: "Hill Patel Portfolio",
    type: "website",
    url: "http://hillpatel.tech/",
  },
};

//Home Page
const greeting = {
  title: "Hill Patel",
  logo_name: "HillPatel",
  nickname: "stifler",
  subTitle:
    "A passionate AI/ML innovator dedicated to building scalable, efficient, and socially impactful systems. Thrives on taking ideas from research to real-world deployment, crafting sustainable edge-ready solutions that merge technical depth with meaningful outcomes.",
  resumeLink:
    "https://drive.google.com/file/d/1LxtwaZF2mFO1WWKDRjYbYCXoUXj72uCc/view?usp=sharing",
  portfolio_repository: "https://github.com/STiFLeR7/masterPortfolio",
  githubProfile: "https://github.com/STiFLeR7",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/STiFLeR7",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hillpatel07/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:hillaniljppatel@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/stifler.xd/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

/* =======================
   Skills (updated - use public assets)
   Place PNGs in: public/assets/images/
   and reference them below as '/assets/images/FILE.png'
   ======================= */
/* =======================
   Skills — icon-safe version
   Uses fontAwesomeClassname only (no imageSrc)
   ======================= */
const skills = {
  data: [
    {
      title: "Edge AI & Model Efficiency",
      fileName: "EdgeAIImg",
      skills: [
        "⚡ Designing and deploying quantized and distilled models for edge GPUs (RTX 3050) and server GPUs (A100).",
        "⚡ Practical experience with model quantization (GPTQ, AWQ, SmoothQuant) and Dynamic Quantization Swapping (DQS).",
        "⚡ Knowledge distillation, pruning, and latency/throughput optimisation for production constraints.",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "bitsandbytes",
          fontAwesomeClassname: "simple-icons:bitsandbytes",
          style: { backgroundColor: "transparent" },
        },
        { skillName: "GGUF", skillLabel: "GGUF" }, // no common icon — plain label
        {
          skillName: "CUDA / NVIDIA",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: { color: "#76B900" },
        },
        { skillName: "A100 / RTX", skillLabel: "A100 / RTX" }, // plain label
      ],
    },

    {
      title: "LLMs, Agents & Tooling",
      fileName: "LLMImg",
      skills: [
        "⚡ Building agentic workflows and RAG integrations with LLMs for production use-cases.",
        "⚡ Fine-tuning, LoRA adapters, prompt engineering, and evaluation pipelines for alignment.",
        "⚡ Packaging quantized GGUF models for efficient inference on constrained hardware.",
      ],
      softwareSkills: [
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: { color: "#FF9900" },
        },
        { skillName: "LoRA", skillLabel: "LoRA" }, // community icon is not standard in simple-icons
        {
          skillName: "Transformers",
          fontAwesomeClassname: "simple-icons:transformers",
          style: { color: "#F9B233" },
        },
        { skillName: "RAG", skillLabel: "RAG" }, // plain label
      ],
    },

    {
      title: "Machine Learning & Research",
      fileName: "ResearchImg",
      skills: [
        "⚡ End-to-end experiment design: reproducible baselines, ablations, and statistically-sound eval.",
        "⚡ Published workflows for MedMNIST experiments and reproducible KD benchmarks.",
        "⚡ Writing research-grade docs, reproducible scripts, and automated benchmarking (wandb).",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "Weights & Biases",
          fontAwesomeClassname: "simple-icons:wandb",
          style: { color: "#2B2B2B" },
        },
      ],
    },

    {
      title: "Engineering & DevOps",
      fileName: "InfraImg",
      skills: [
        "⚡ Containerizing inference stacks (Docker) and deploying to VPS / cloud for low-latency access.",
        "⚡ CI pipelines and automated benchmarking (GitHub Actions + wandb).",
        "⚡ Building reproducible dev environments and quantized model packaging for edge distribution.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Linux / Bash",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#000000" },
        },
        {
          skillName: "NGINX",
          fontAwesomeClassname: "simple-icons:nginx",
          style: { color: "#009639" },
        },
      ],
    },

    {
      title: "Full-Stack & Visualization",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building fast front-ends for demos (React) and lightweight backends (Flask/Express) for model APIs.",
        "⚡ Creating reproducible demo UIs to showcase model behaviour and latency.",
        "⚡ Producing clear visualisations for results, benchmarks and comparative tables for papers.",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        { skillName: "Charting", skillLabel: "Charting" }, // plain label if no icon available
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/stiflerxd",
    },
    {
      siteName: "Hugging Face",
      iconifyClassname: "simple-icons:huggingface",
      style: {
        color: "#FF9900",
      },
      profileLink: "https://huggingface.co/STiFLeR7",
    },
    {
      siteName: "PyPI",
      iconifyClassname: "simple-icons:pypi",
      style: {
        color: "#3775A9",
      },
      profileLink: "https://pypi.org/user/stiflerxd/",
    },
    {
      siteName: "ORCID",
      iconifyClassname: "simple-icons:orcid",
      style: {
        color: "#A6CE39",
      },
      profileLink: "https://orcid.org/0009-0004-9870-1135",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "NIMS University, Jaipur",
      subtitle: "B.Tech. in Artificial Intelligence & Machine Learning",
      logo_path: "nims_logo.png", // optimized 256x256 PNG in public/assets/images
      alt_name: "NIMS University",
      duration: "2021 - 2026 (Expected)",
      descriptions: [
        "⚡ Core coursework: Data Structures, Algorithms, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Cloud Computing, and Edge AI.",
        "⚡ Hands-on research & projects: MedMNIST-KD (knowledge distillation), Phi-3 EdgeQuant Agent (dynamic quantization), Adulteration Detection, and ASR for Hindi (IIT Bombay).",
      ],
      website_link: "https://nimsuniversity.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "RAG and Agentic AI",
      subtitle: "Coursera IBM Learning",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/67CUNP6L5SK7",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Neural Networks and PyTorch",
      subtitle: "Coursera IBM Learning",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/PDDYF176Z6VP",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Analytics with Specialisation in Tableau Workshop",
      subtitle: "Jobaaj Learnings",
      logo_path: "jobaaj.png",
      certificate_link:
        "https://www.jobaajlearnings.com//certificate?file=certificate-99790-37-0.jpeg",
      alt_name: "Jobaaj Learnings",
      color_code: "#2A73CC",
    },
    {
      title: "Introduction to Large Language Models (LLMs)",
      subtitle: "Google Cloud",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/a50a631e-6810-45a0-9ee0-a1f0618245cf/badges/8359524?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google Cloud",
      color_code: "#4285F499",
    },
    {
      title: "Introduction to Responsible AI",
      subtitle: "Google Cloud",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/a50a631e-6810-45a0-9ee0-a1f0618245cf/badges/8359644?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google Cloud",
      color_code: "#4285F499",
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "Google Cloud",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/a50a631e-6810-45a0-9ee0-a1f0618245cf/badges/8354463?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google Cloud",
      color_code: "#4285F499",
    },
    {
      title: "Prompt Engineering for Everyone with ChatGPT and GPT-4",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-046c18c3-d47e-47d7-b9ad-76291799e8f8/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I contribute to academic research and campus leadership roles while actively participating in national hackathons and open research submissions. My focus is on applied AI research, model efficiency, and building reproducible systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Campus Ambassador",
          company: "E-Cell, IIT Bombay",
          company_url: "https://www.iitb.ac.in/en/entrepreneurship/ecell",
          logo_path: "e-cell.png",
          duration: "July 2024 - Present",
          location: "Jaipur, Rajasthan",
          description:
            "Represent the entrepreneurship cell at IIT Bombay on campus: promote startup programs, coordinate workshops and speaker sessions, and help students connect with incubation resources and mentorship opportunities.",
          color: "#0A66C2",
        },
        {
          title: "Campus Ambassador",
          company: "Internshala",
          company_url: "https://internshala.com/",
          logo_path: "internshala.png",
          duration: "March 2024 - October 2024",
          location: "Jaipur, Rajasthan",
          description:
            "Led campus outreach for Internshala — organized internship awareness drives, ran training sessions on applying to internships, and helped students build stronger internship applications and profiles.",
          color: "#FF5A00",
        },
      ],
    },

    {
      title: "Internships",
      experiences: [
        {
          title: "Open to Internship Opportunities",
          company: "—",
          company_url: "",
          logo_path: "placeholder.png",
          duration: "Present",
          location: "Jaipur, Rajasthan",
          description:
            "Actively seeking applied ML/AI internships in model optimization, LLM engineering, or edge deployment. Available for part-time or full-time internship engagements; open to remote and on-site roles.",
          color: "#6c757d",
        },
      ],
    },

    {
      title: "Volunteerships & Research",
      experiences: [
        {
          title: "Smart Cities Research Paper (Stage)",
          company: "IET Conference, Bahrain",
          company_url: "https://www.theiet.org/",
          logo_path: "iet.png",
          duration: "2024",
          location: "Jaipur, Rajasthan",
          description:
            "Contributed to a Smart Cities research paper accepted for presentation at the IET conference track. Worked on applied urban sensing and ML-driven decision-support that emphasize sustainable civic systems and reproducible evaluation.",
          color: "#0057B8",
        },
        {
          title: "Knowledge Distillation — Research Submission",
          company: "Franklin Open Journal",
          company_url: "https://www.sciencedirect.com/journal/franklin-open",
          logo_path: "franklin_open.png",
          duration: "2025 (Submitted)",
          location: "Jaipur, Rajasthan",
          description:
            "Authored and submitted a paper on knowledge distillation techniques across imaging modalities (MedMNIST-KD). The work includes reproducible benchmarks, ablations, and deployment-aware distillation pipelines.",
          color: "#1F8AE0",
        },
        {
          title: "SIH 2024 — Stage I Cleared",
          company: "Smart India Hackathon",
          company_url: "https://www.sih.gov.in/",
          logo_path: "sih.jpg",
          duration: "2024",
          location: "Jaipur, Rajasthan",
          description:
            "Advanced through Stage I of the Smart India Hackathon 2024 with a prototype addressing a real-world civic/industrial problem — built a fast proof-of-concept, produced evaluation results, and prepared an MVP-ready demo for the next stage.",
          color: "#E94B35",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of my core projects focused on Edge AI, LLMs, Quantization, Knowledge Distillation, and applied Computer Vision. These projects highlight both research-backed methodologies and deployable solutions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications & Blogs",
  description:
    "A selection of my research articles and technical blogs on edge AI, knowledge distillation, multimodality, and efficient LLM deployment.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "medmnist-edgeai-blog",
      name:
        "MedMNIST-EdgeAI: Compressing Medical Imaging Models for Efficient Edge Deployment",
      createdAt: "2024-07-20T00:00:00Z",
      description:
        "Medium blog on knowledge distillation and quantization for MedMNIST — designing edge-ready models for medical imaging tasks.",
      url:
        "https://medium.com/@stiflerxd/medmnist-edgeai-compressing-medical-imaging-models-for-efficient-edge-deployment-e12f160d6f36",
    },
    {
      id: "lcm-vs-rag-blog",
      name: "LCM vs. LLM + RAG",
      createdAt: "2024-08-10T00:00:00Z",
      description:
        "Medium blog comparing Latent Consistency Models (LCM) with Retrieval-Augmented Generation pipelines — tradeoffs in efficiency and accuracy.",
      url: "https://medium.com/@stiflerxd/lcm-vs-llm-rag-11f656f1c71e",
    },
    {
      id: "edge-llm-blog",
      name: "Edge-LLM: Running Qwen2.5–3B on the Edge with Quantization",
      createdAt: "2024-08-25T00:00:00Z",
      description:
        "Medium blog on deploying Qwen2.5–3B with GPTQ/AWQ quantization strategies for constrained edge hardware.",
      url:
        "https://medium.com/@stiflerxd/edge-llm-running-qwen2-5-3b-on-the-edge-with-quantization-1a825de3d722",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_logo.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Edge Deployment, Quantization, Knowledge Distillation, and Research-backed AI systems.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document my AI/ML experiments, research findings, and technical knowledge to share with the community.",
    link: "https://medium.com/@stiflerxd",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "NIMS University",
    locality: "Greater Jaipur",
    country: "India",
    region: "Rajasthan",
    postalCode: "303121",
    streetAddress: "NH-11C Jaipur-Delhi Highway",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/mxPKkFzxfeqEW4fF7",
  },
  phoneSection: {
    title: "Work",
    subtitle: "+91 9723288714",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
