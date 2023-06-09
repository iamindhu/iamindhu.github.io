import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  cpp,
  nodejs,
  mongodb,
  git,
  c,
  deshaw,
  mic,
  devops,
  powershell,
  csharp,
  linux,
  mysql,
  as,
  python,
  paper,
  sr,
  agedet,
  expense,
  ipo,
  pass,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "AZURE DEVOPS",
    icon: devops,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "powershell",
    icon: powershell,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "linux",
    icon: linux
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "android studio",
    icon: as,
  },
  {
    name: "mysql",
    icon: mysql
  }
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Microsoft - India Development Center",
    icon: mic,
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Built tools for configuration management system",
      "Worked on various tasks during the period of my internship, which included: Automating the creation of branch policies during release timelines, enhancements to the AutoFEC tool, updating CMFunctions to prevent check- in of code if not approved by shiproom, and developing a tool for deleting attachments of old work items ",
    ],
  },
  {
    title: "Mentee",
    company_name: "DE Shaw Private Limited",
    icon: deshaw,
    iconBg: "#383E56",
    date: "Oct 2021 - April 2022",
    points: [
      "A 6 month mentorship program",
      "One of the 40 mentees selected to be a part of the senior cohort of the DESIS ascend educare program.",
      "Built a locally hosted IPO management platform where the companies would be able to register and release details for their IPO, and where end-users can place their bids and get the results of their bids ",
      "The mentorship focuses on helping build strong CS fundamentals through weekly technical and non-technical sessions.",
    ],
  },
];

const projects = [
  {
    name: "Predicting Survival of People with Heart Failure", 
    description: 
      "Analysis of different machine learning and deep learning models for predicting the survival of patients with heart failure. Used dataset oversampling techniques like SMOTE and ADASYN, and various dimentionality reduction techniques as well.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "dimentionality-reduction",
        color: "green-text-gradient",
      },
      {
        name: "oversampling",
        color: "pink-text-gradient",
      },
    ],
    image: paper,
    source_code_link: "https://github.com/iamindhu/predicting-survival-of-heart-patients",
  },
  {
    name: "IPO Management System",
    description:
      "Built an IPO management platform. Companies would be able to release the details for their IPO & interested parties would be able to bid on it. After the listing price is finalized, selected bidders qualify for the next investment. A lucky draw takes place for allocating the shares to the shareholders. Different brokerage firms can use the microservices built by us for allowing other users to place bids for IPO.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "Maven",
        color: "green-text-gradient",
      },
      {
        name: "microservices",
        color: "pink-text-gradient",
      },
    ],
    image: ipo,
    source_code_link: "https://github.com/devender22/educare_ipo_ms",
  },
  {
    name: "Voice Based Email",
    description:
      "Console based application for helping the visially impaired. It can function as an alternative to traditional UI-based mail applications. Has multiple functionalities like sending, reading, deleting and serching mails.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "SpeechRecognition API",
        color: "green-text-gradient",
      },
      {
        name: "HCI-Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: sr,
    source_code_link: "https://github.com/iamindhu/voice-based-email",
  },
  {
    name: "Password Manager",
    description:
      "A web application that can store passwords securely. Actively involved in developing backend - Handling server-side requests and checking for authorization. Also encrypted all user data using AES-256 encryption and blowfish hashing algorithms. Also responsible for database design.",
    tags: [
      {
        name: "MERN stack",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Cryptography",
        color: "pink-text-gradient",
      },
    ],
    image: pass,
    source_code_link: "https://github.com/iamindhu/password-manager",
  },
  {
    name:"Age Detection using Facial Images",
    description:
      "Created a CNN model that estimates the age of a person with 83% accuracy. Tested multiple CNN architectures to find the appropriate one for the problem statement. ",
      tags: [
        {
          name: "deeplearning",
          color: "blue-text-gradient",
        },
        {
          name: "computer vision",
          color: "green-text-gradient",
        },
      ],
      image: agedet,
     source_code_link: "https://github.com/iamindhu/Age-Detection-",
  },
  {
    name:"Expense Tracker",
    description:
      "Created an Android Application that can track day to day expenses, and help customers visualise their spending patterns using various bar plots and pie charts. The app also summarises weekly, mothly and yearly spending.",
      tags: [
        {
          name: "android-studio",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
     source_code_link: "https://github.com/iamindhu/Expense-Tracker",
  },
];

export { services, technologies, experiences, projects };