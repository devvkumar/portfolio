import React from "react";
import { FaReact, FaCode } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import rubicGameImage from "@/public/2048-game.png";
import Shoping from "@/public/Shoping.png";
import CryptoHunter from "@/public/cryptoHunter.png";
import infyDrive from "@/public/infyDrive.png";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: 'बारे में',
    Projects: 'परियोजनाओं',
    Skills: 'कौशल',
    Experiences: 'अनुभव',
}

export const experiencesData = [
    {
        title: "Java Developer Intern",
        location: "CodSoft, Remote",
        description:
            "Demonstrated strong troubleshooting skills by resolving and debugging over 10 issues in real-time. Maintained task-specific GitHub repositories, ensuring seamless collaboration and version control. Developed user interfaces with input validation and data integrity, enhancing user experience. Implemented more than 9 CRUD operations, maintaining data integrity and storage capabilities for users.",
        icon: React.createElement(FaCode),
        date: "2023 Sep - 2023 Oct",
    },
    {
        title: "Future Ready Talent Intern",
        location: "Microsoft, Remote",
        description:
            "Developed a Static Web App using Azure Web Apps, integrating multiple Azure services. Contributed to projects aligned with Microsoft's core business areas, enhancing both technical and soft skills. Participated in workshops and training sessions to deepen Azure cloud expertise, collaborating with FutureSkills Prime, NASSCOM, FutureSkills, and AICTE.",
        icon: React.createElement(FaVuejs),
        date: "2023 Mar - 2023 May",
    },
    {
        title: "Open Source",
        location: "HACKTOBERFEST | Remote",
        description:
            "Participated enthusiastically in Hacktoberfest and made significant contributions to over 5 open-source projects. Demonstrated expertise in collaborating with diverse teams and enhancing software development skills. Actively engaged in the open-source community, fostering innovation and knowledge sharing.",
        icon: React.createElement(FaReact),
        date: "2023 Oct - 2023 Oct",
    },
    {
        title: "Core Team",
        location: "CodeChef Mait Chapter | Delhi, India",
        description:
            "CodeChef Mait Chapter is the offical society of MAIT. We have Organised Some of the events that we have hosted include hackathons, workshops, and competitions. Our posters are eye-catching, informative and professional, and they reflect our vision and mission.",
        icon: React.createElement(RiTeamFill),
        date: "2023 Apr - 2024 Jun",
    },
    {
        title: "Graphic Desiner",
        location: "TechCom | Delhi, India",
        description:
            " TechCom is the offical society of MAIT. We have designed and printed posters for various events that we have organized in the past. Some of the events that we have hosted include hackathons, workshops, and competitions. Our posters are eye-catching, informative and professional, and they reflect our vision and mission.",
        icon: React.createElement(MdGraphicEq),
        date: "2022 Oct - 2024 Jun",
    },
    {
        title: "B.Tech in Computer Science ane Engineering",
        location: "Maharaja Agrasen Institute of Technology | Delhi, India",
        description:
            "Graduated with a Bachelor of Technology in Computer Science and Engineering, securing a GPA of 8.3/10.0. Acquired strong skills in software development, data structures, algorithms, and web technologies. Actively participated in coding competitions and technical workshops.",
        icon: React.createElement(LuGraduationCap),
        date: "2020 Sep - 2024 Jun",
    },

]

export const experiencesDataZn = [
    {
        "title": "कंप्यूटर साइंस और इंजीनियरिंग में बी.टेक",
        "location": "महाराजा अग्रसेन प्रौद्योगिकी संस्थान | दिल्ली, भारत",
        "description": "कंप्यूटर साइंस और इंजीनियरिंग में बी.टेक के साथ 8.3/10.0 का GPA प्राप्त किया। सॉफ्टवेयर विकास, डेटा संरचनाएं, एल्गोरिदम, और वेब तकनीकों में मजबूत कौशल प्राप्त किया। कोडिंग प्रतियोगिताओं और तकनीकी कार्यशालाओं में सक्रिय रूप से भाग लिया।",
        icon: React.createElement(LuGraduationCap),
        "date": "2023 सितम्बर - 2024 जून"
    },
    {
        "title": "前端实习生",
        "location": "蔚来汽车（中国武汉）",
        "description": "वास्तविक समय में 10 से अधिक मुद्दों को हल करके मजबूत समस्या निवारण कौशल का प्रदर्शन किया। निर्बाध सहयोग और संस्करण नियंत्रण सुनिश्चित करने के लिए कार्य-विशिष्ट GitHub रिपॉजिटरी को बनाए रखा। इनपुट सत्यापन और डेटा अखंडता के साथ उपयोगकर्ता इंटरफेस विकसित किए, जिससे उपयोगकर्ता अनुभव में सुधार हुआ। उपयोगकर्ताओं के लिए डेटा अखंडता और भंडारण क्षमताओं को बनाए रखते हुए 9 से अधिक CRUD ऑपरेशनों को लागू किया।",
        "icon": React.createElement(FaVuejs),
        "date": "2022年8月 - 2022年12月"
    },
    {
        "title": "前端开发",
        "location": "武汉大学大数据研究院",
        "description": "使用umi（React框架）和Ant Design Pro开发和维护Finknow，一个金融知识图谱查询和分析平台。利用基于G6的React图分析工具包graphin开发了股权网络穿透图，增强了数据可视化功能。",
        "icon": React.createElement(FaReact),
        "date": "2022年5月 - 2022年7月"
    },
    {
        "title": "数字出版学士",
        "location": "武汉大学",
        "description": "以3.81/4.0的GPA毕业，获得数字出版学士学位，掌握了数字媒体和出版技术的基础知识。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2020年9月 - 2024年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "InfyDrive",
        title_zh: 'इंफीड्राइव',
        description:
            "InfyDrive is an innovative project that leverages the InterPlanetary File System (IPFS) to store and share photos securely. IPFS is a decentralized storage network that allows data to be distributed across multiple nodes, ensuring enhanced security and availability.",
        desc_zh: "इंफीड्राइव एक नवाचारी प्रोजेक्ट है जो फोटो को सुरक्षित रूप से संग्रहीत और साझा करने के लिए इंटरप्लेनेटरी फाइल सिस्टम (IPFS) का उपयोग करता है। IPFS एक विकेंद्रीकृत स्टोरेज नेटवर्क है जो डेटा को कई नोड्स में वितरित करने की अनुमति देता है, जिससे सुरक्षा और उपलब्धता में सुधार होता है।",
        tags: ["ReactJS", "NextJS", "Tailwind", 'BootStrap', 'Solidity', 'API', 'Git', 'GitHub', 'Web3' ],
        imageUrl: infyDrive,
        projectUrl: 'https://github.com/devvkumar/InfyDrive-IPFS-Blockchain',
        demoUrl: 'https://infydrive.netlify.app/',
    },
    {
        title: "Crypto Hunter",
        title_zh: 'क्रिप्टो हंटर',
        description: "This project features a dynamic and informative Crypto Hunter website built using HTML, CSS, JavaScript, and Bootstrap. The site provides live cryptocurrency price updates and includes a blog section where users can check the latest news about coins and the market.",
        desc_zh: "यह प्रोजेक्ट एक डायनामिक और सूचनात्मक क्रिप्टो हंटर वेबसाइट को प्रदर्शित करता है जिसे HTML, CSS, JavaScript और Bootstrap का उपयोग करके बनाया गया है। साइट लाइव क्रिप्टोकरेंसी की कीमतों के अपडेट प्रदान करती है और इसमें एक ब्लॉग सेक्शन शामिल है जहां उपयोगकर्ता सिक्कों और बाजार के बारे में नवीनतम समाचार देख सकते हैं।",
        tags: ["HTML", "CSS", "JavaScript", "BootStrap", "API", "Git", "GitHub"],
        imageUrl: CryptoHunter,
        projectUrl: 'https://github.com/devvkumar/CryptoHunter',
        demoUrl: 'https://devvkumar.github.io/CryptoHunter/',


    },
    {
        title: "Fashion Trendz Website Project",
        title_zh: "फैशन ट्रेंड्स वेबसाइट प्रोजेक्ट",
        description:
            `This project features a modern Fashion Trends Website built with HTML, CSS3, and JavaScript, managed with Git and GitHub, and deployed on Azure. It includes an interactive chatbot powered by Azure NLP for a personalized user experience.`,
        desc_zh: "यह प्रोजेक्ट HTML, CSS3 और JavaScript से बनी एक आधुनिक फैशन ट्रेंड्स वेबसाइट है, जिसे Git और GitHub से प्रबंधित किया गया है और Azure पर डिप्लॉय किया गया है। इसमें Azure NLP द्वारा संचालित एक इंटरैक्टिव चैटबॉट शामिल है, जो उपयोगकर्ताओं को व्यक्तिगत अनुभव प्रदान करता है।",
        tags: ["JavaScript", "HTML", "CSS3", "Azure"],
        imageUrl: Shoping,
        projectUrl: 'https://github.com/devvkumar/Final_Project',
        demoUrl: 'https://devvkumar.github.io/Final_Project/',
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Node",
    "Express",
    "Git",
    "Github",
    "Tailwind",
    "Boostrap",
    "Prisma",
    "MongoDB",
    "Framer Motion",
    "d3",
    "UI/UX",
    "Docker",
    "AWS",
    "Azure",

] 
