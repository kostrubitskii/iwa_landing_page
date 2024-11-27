import hours from "../ui/hours.svg";
import online from "../ui/online.svg";
import language from "../ui/language.svg";
import modules from '../ui/modules.svg';

const coursesData = [
  {
    title: "Level 1 (ACC Track) Experiential Executive Coaching Program",
    subtitle: "The Three Primary Coaching Program Models:",
    types: [
      { id: "type1", label: "60-hour", icon: hours, text: "60-hour" },
      { id: "type2", label: "Online", icon: online, text: "Online" },
      { id: "type3", label: "English", icon: language, text: "English" },
    ],
    models: [
      {
        title: "Level 1 (ACC Track) Experiential Executive Coaching Program",
        points: [
          "In-depth exploration of coaching foundations",
          "Mastery in effective communication strategies",
          "Proficiency in navigating ICF Core Competencies",
        ],
      },
      {
        title: "Level 1 (ACC Track) Experiential Executive Coaching Program",
        points: [
          "Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification",
          "Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom",
          "Through practice and repetition, candidates achieve competence and transcendence in their coaching abilities",
        ],
      },
      {
        title: "3. The Coaching Engagement Model",
        points: [
          "Provides a structured framework for coaching sessions",
          "Guides coaches and clients through phases of awareness, discovery, goal setting, approach determination, progress tracking, and success evaluation",
          "Serves as a roadmap for the engagement, fostering clarity and mutual expectations between coach and client",
        ],
      },
    ],
    price: "$6 499",
  },
  {
    title: "Level 2 (PCC Track) Experiential Executive Coaching Program",
    subtitle: "The Three Primary Coaching Program Models:",
    types: [
      { id: "type1", label: "125 hours", icon: hours, text: "125 hours" },
      { id: "type2", label: "9 modules", icon: modules, text: "9 modules"},
      { id: "type3", label: "Online", icon: online, text: "Online" },
      { id: "type4", label: "English", icon: language, text: "English" },
    ],
    models: [
      {
        title: "1.The Coaching Certification Model",
        points: [
          "The program offers three pathways to proficiency: coaching, receiving coaching, or observing coaching sessions",
          "Emphasizes three core areas: ICF Ethics, ICF Regulations, and ICF Core Competencies",
          "Candidates focus on enhancing skills in performance coaching, behavioral coaching, and perceptual coaching",
        ],
      },
      {
        title: "2.The Coach’s Learning Model",
        points: [
          "Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification",
          "Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom",
          "Through practice and repetition, candidates achieve competence and transcendence in their coaching abilities",
        ],
      },
      {
        title: "3.The Coaching Engagement Model",
        points: [
          "Provides a structured framework for coaching sessions",
          "Guides coaches and clients through phases of awareness, discovery, goal setting, approach determination, progress tracking, and success evaluation",
          "Serves as a roadmap for the engagement, fostering clarity and mutual expectations between coach and client",
        ],
      },
    ],
    price: "$8 499",
  },
];

export default coursesData