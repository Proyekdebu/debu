import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export const PROFILE_DATA = {
  name: "John Doe",
  tagline: `Passionate React JS developer with 4 years of experience, dedicated to crafting immersive web experiences and soving complex challanges.`,
  jobTitle: "Full Stack Developer",
  location: "Indonesia",
  yearsOfExperience: 4,
  skills: [
    "React.js",
    "Javascript",
    "HTML",
    "CSS",
    "Git",
    "Bootststrap",
    "Redux",
    "NOde.js",
    "RESTful APIs",
  ],
  email: "john.doe@example.com",
  phone: "+6285781559195",
  website: "http://butirandebu.my.id",
};

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoJavascript,
    title: "Javascript",
    comment: `Javascript is my bread and butter. I've been working with it for over 4 yers and have built numerous applications, ranging from simple scripts to complex web applicaitions.`,
  },
  {
    id: "02",
    icon: IoLogoHtml5,
    title: "HTML",
    comment: `HTML is the foundation of every web project I work on. I have deep understanding of its structure and semantics, ensuring my web applilcations are well-structured and accessible.`,
  },
  {
    id: "03",
    icon: IoLogoReact,
    title: "React JS",
    comment: `I'm deeply passionate about React.js and have been using it extensively for over 3 years. I've built numerous projects, including e-commerce websites, dashboards, and interactive web applications.`,
  },
  {
    id: "04",
    icon: IoLogoNodejs,
    title: "Node JS",
    comment: `Node.js is my go-to choice for building scalable and efficient server-side applications. With its even-driven architecture and extensive ecosystem, i've built RESTful APIs, real-time chat applications, and more.`,
  },
  {
    id: "05",
    icon: SiMongodb,
    title: "MongoDB",
    comment: `MongoDB's flexible document-based structure and scalability make it an ideal choice for storing and managing data in modern applications. I've used MongoDB extensively in projects, ranging from small-scale applications to large-scale platforms.`,
  },
  {
    id: "06",
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    comment: `Tailwind CSS has revolutionized the way I approach front-end styling. It's utility-first approach allows me to rapidly build responsive and beautifully designed interfaces without writing custom CSS.`,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "Tech Solutions Inc",
    position: "Senior Frontend Developer",
    duration: "2018 - Present",
    description:
      "Lead the font-end development team in designing and implementing user interfaces for various web applications. Collaborated with designers and backend developers to deliver high-quality products.",
  },
  {
    id: "02",
    company: "CodeCrafters LLC",
    positon: "Frontend Developer",
    duration: "2016 - 2018",
    description:
      "Developed responsive and interactive user interfaces for client projects using modern web technologies. Participated in code reviews and provided techincal guidance to junior developoers.",
  },
  {
    id: "03",
    company: "Digital Innovations Co.",
    position: "UI/UX Designer",
    duration: "2014 - 2016",
    description:
      "Designed and developed user interfaces for web applications. focusing on usability and aesthetics.  Collaborated closely with clients to understand their requirements and deliver customized solutions.",
  },
];

export const ABOUT_ME_DATA = {
  introduction:
    "Hi, I'm John Doe, an experienced React JS developer passionate about building engaging web application and solving complex problems with code.",
  background:
    "I hold a Bachelor's degree in Computer Science from the University of Science and Technology. Over the past 4 years, i've gained valuable experience in frontend development, working on projects ranging from e-commerce websites to interactive dashboard. ",
  skills:
    "I'm proficient in a variety of technologies including React.Js, Javascript, HTML, CSS, and Node.js. I'm also experienced in using version control systems like Git and working with RESTful APIs.",
  projects:
    "Some of my notable projects include an e-commerce website built with React.js and Redux",
  interests:
    "Outside of coding, I enjoy traveling to new places, capturing moments through photograpy, learning new things and drawing. I'm also an avid reader and love exploring new cuisines.",
  careerGoals:
    "In the future, I aim to continue honing my skills as a developer, explorig new technologies, and contributing to meaningful projects that make a positive impact on people's lives.",

  stats: {
    yearsOfExperience: "11+",
    numberOfProjects: 20,
    certificationsEarned: 8,
  },
};
