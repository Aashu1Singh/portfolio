/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Aashu",
  logo_name: "aashu.s()",
  nickname: "aashu",
  full_name: "Aashu Singh",
  subTitle: "A Computer Science Student. Always learning 🔥.",
  resumeLink:
    "https://drive.google.com/file/d/1dhPora5dcq30b_fOaL6D9fRBDNpahN0l/view?usp=drive_link",
  mail: "mailto:aashusingh1308@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Aashu1Singh",
  linkedin: "www.linkedin.com/in/aashu1singh",
  gmail: "aashusingh1308@gmail.com",
  facebook: "https://www.facebook.com/nikhil.haspe.3",
  twitter: "https://twitter.com/aashu1singh",
  instagram: "https://www.instagram.com/aashu_chauhann/",
};

const skills = {
  data: [
    {
      title: "I'm Proficient in",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:c++",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "I'm familiar with",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with multiple databases like firestore, monogoDB, MySql",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indira Gandhi National Open University",
      subtitle: "Bachelor in Computer Application",
      logo_path: "ssec.png",
      alt_name: "IGNOU",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Computer Application.",
      ],
      website_link: "http://www.ignou.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "The Complete Web Development Bootcamp (MERN)",
      subtitle: "Udemy",
      logo_path: "mern.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-3490a4f4-6b2a-4c08-8e51-37f8c6639a07.jpg",
      alt_name: "Web Development Course",
      color_code: "#1d1d1d",
    },
    {
      title: "Fundamentals of HTML",
      subtitle: "Coding Ninjas",
      logo_path: "html.png",
      certificate_link:
        "https://files.codingninjas.in/certi_image267280839c7f9a5f51d625c5eef77fa2683026.jpg",
      alt_name: "HTML Course",
      color_code: "#1d1d1d",
    },
    {
      title: "Fundamentals of CSS",
      subtitle: "Coding Ninjas",
      logo_path: "css.png",
      certificate_link:
        "https://files.codingninjas.in/certi_image2703478d825060b4fcdd7b8f5463fbbf4eb828.jpg",
      alt_name: "CSS Course",
      color_code: "#1d1d1d",
    },
    {
      title: "Basics Of Javascript",
      subtitle: "Coding Ninjas",
      logo_path: "js.png",
      certificate_link:
        "https://files.codingninjas.in/certi_image267418ccaf21f87c588bb08ecec7365bf8c5d0.jpg",
      alt_name: "CSS Course",
      color_code: "#1d1d1d",
    },
    {
      title: "Basics Of Java",
      subtitle: "Coding Ninjas",
      logo_path: "java.png",
      certificate_link:
        "https://files.codingninjas.in/certi_image26481563d158922778af91b9e1327584b1a791.jpg",
      alt_name: "Java Course",
      color_code: "#1d1d1d",
    },
    {
      title: "C",
      subtitle: "Udemy",
      logo_path: "c.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-88d16774-7989-4fa4-9393-39f36e7d784c.jpg",
      alt_name: "C Course",
      color_code: "#1d1d1d",
    },
    {
      title: "C++",
      subtitle: "Udemy",
      logo_path: "c++.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-9cb55931-36bc-4d6a-8fbb-3f4de75af5b1.jpg",
      alt_name: "C++ Course",
      color_code: "#1d1d1d",
    },
    {
      title: "React + Redux",
      subtitle: "SoloLearn",
      logo_path: "react.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-VPCHMPUE",
      alt_name: "React + Redux",
      color_code: "#1d1d1d",
    },
  ],
};

// Experience Page
const space = "                           ";
const experience = {
  title: "Internships",
  description: `iComply Lifescience Solutions, WFH (Jun 2022 to present) — 
  ${space}
    
    ReactJS Developer with backend integration.  
    Work closely with the Project Manager, Client, and Team Lead.
    
    We primarily used ReactJS for Frontend, and NodeJS for Backend APIs. 70% of my work was doing front-end development, 20% was doing back-end integration and helping others, and the remaining 10% was hosting and managing websites.

    
    `,
  header_image_path: "experience.svg",
};

// Projects Page
const projectsHeader = {
  title: "Projects (Click to view)",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Project, NodeJS Backend Projects and . Below are some of my projects.You can see deployed version or codes by clicking on respective project.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "aashu.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Tech Store",
      url: "https://techstoreaashu.netlify.app",
      description:
        "The project is an e-commerce website that allows users to browse and shop for electronic items such as  smartphones, laptops, watch, and other related accessories. The website provides a user-friendly interface that enables customers to easily search for products, view product details, and add products to their shopping carts.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Js",
          iconifyClass: "vscode-icons:file-type-js",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "ISRO-Mission-Control",
      url: "https://github.com/Aashu1Singh/ISRO-Mission-Control",
      description:
        "NASA Mission Control is a web-based project developed using ReactJS, JavaScript, ExpressJS, and NodeJS.It provides a user-friendly interface that allows users create launches and also to access information about NASA's missions, launches. This project uses external RESTful APIs to fetch data",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Js",
          iconifyClass: "vscode-icons:file-type-js",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Node js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Expressjs",
          iconifyClass: "logos-express",
        },
      ],
    },
    {
      id: "2",
      name: "News-App",
      url: "https://github.com/Aashu1Singh/newsForYou",
      description:
        "A news project made with React.js and JavaScript that uses the News API to fetch news of various categories is a dynamic web application that allows users to stay updated. It retrieve news articles from a variety of sources, covering a wide range of topics, including sports, technology, entertainment, etc.Users can read the full story",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Js",
          iconifyClass: "vscode-icons:file-type-js",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Text-Util",
      url: "https://github.com/Aashu1Singh/textUtill",
      description:
        "A text-util project made with React.js and JavaScript is a web application that provides users with tools to manipulate text. The project allows users to input text and perform various operations on it, such as counting the number of words, converting the text to uppercase or lowercase, and copying the text to the clipboard. The project provides a convenient way to manipulate text for various purposes.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Js",
          iconifyClass: "vscode-icons:file-type-js",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "Bill-Karo",
      url: "https://github.com/Aashu1Singh/bill-Karo",
      description:
        "The Bill-Karo project is a web application developed using the React JavaScript framework. It allows users to add items along with their respective price and quantity. The application then calculates the total price to pay based on the inputs provided by the user. The user interface provides fields for entering the item details. The project is designed to make it easy for users to keep track of the items they want to purchase and their associated costs.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Js",
          iconifyClass: "vscode-icons:file-type-js",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },

    // {
    //   id: "1",
    //   name: "Realtime Pizza",
    //   url: "https://github.com/Nikhilhaspe/Realtime-Pizza",
    //   description:
    //     "Realtime Pizzeria Website for online users and Home deliver of the food. Uses mongo DB with realtime messages using socket.io. Fully responsive UI",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    // },
    // {
    //   id: "2",
    //   name: "nodejs-zoom-clone",
    //   url: "https://github.com/Nikhilhaspe/NODEJS-ZOOM-CLONE",
    //   description:
    //     "A Zoom UI like online real-time meeting app. Realtime Video and Audio conference. UI Built using ejs end express layouts.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    // },
    // {
    //   id: "3",
    //   name: "disney-plus-clone",
    //   url: "https://github.com/Nikhilhaspe/disney-plus-clone",
    //   description:
    //     "Disney+ UI with full responsiveness. Google authentication using firebase. Routing with help of react-router-dom and much more. Built using React.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   id: "4",
    //   name: "shopify",
    //   url: "https://github.com/Nikhilhaspe/shopify",
    //   description:
    //     "Fully Responsive, Elegant UI Clothes Shopping website, which uses React, Redux, Context API, Firebase for User Authentication and storage of items in the shop.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "SCSS",
    //       iconifyClass: "vscode-icons:file-type-scss2",
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   name: "Food-Delivery-Webite",
    //   url: "https://github.com/Nikhilhaspe/Food-Delivery-Webite",
    //   description:
    //     "A Simple, Reponsive, Elegant UI which can be used for any other food deliver website.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "nikhilhaspe.github.io",
    //   url: "https://github.com/Nikhilhaspe/portfolio",
    //   description:
    //     "My personal portfolio website. Built using React, react-router-dom and other usefull libraries.Adaptive to any screen width i.e Responsive.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "spotify-clone-app",
    //   url: "https://github.com/Nikhilhaspe/spotify-clone-app",
    //   description:
    //     "Spotify UI clone using Spotify API itself. Authentication using Spotify API, supports all types of login.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "snake-with-python",
    //   url: "https://github.com/Nikhilhaspe/Snake-With-Python",
    //   description:
    //     "Simple our childhood loved game Snake built using pygame with audio support in friendly language Python.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Alien-Invasion-Game",
    //   url: "https://github.com/Nikhilhaspe/Alien-Invasion-Game",
    //   description:
    //     "Alien Invasion Game where space has to shoot the enemies coming down from the top until they reach bottom. High score management in local files. Built using famous pygame library.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "Calculator",
    //   url: "https://github.com/Nikhilhaspe/Calculator",
    //   description:
    //     "A Simple Calculator for basic mathematical operations having elegant UI with both light and dark mode.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
