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
import { describe } from "node:test";


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
    {
        name: "Education",
        hash: "#education",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    "Home": "मुखपृष्ठ",
    About: 'बारे में',
    Projects: 'परियोजनाओं',
    Skills: 'कौशल',
    Experiences: 'अनुभव',
    Education: 'शिक्षा',
}

export const educationData = [
    {
        title: "Maharaja Agrasen Institute of Technology",
        location: "New Delhi, India",
        description: "Graduated with a Bachelor of Technology in Computer Science and Engineering, securing a GPA of 8.3/10.0. Acquired strong skills in software development, data structures, algorithms, and web technologies. Actively participated in coding competitions and technical workshops.",
        icon: React.createElement(LuGraduationCap),
        date: "2020 Jul - 2024 Jun",
    },
    {
        title: "Siddarth International Public School",
        location: "New Delhi, India",
        description: "Completed my Senior Secondary Education, securing percentage of 70%, excelling particularly in mathematics and computer science. Demonstrated a strong aptitude for analytical thinking and problem-solving, laying a solid foundation for future technical studies and achievements.",
        icon: React.createElement(LuGraduationCap),
        date: "2018 Apr - 2020 Mar",
    }
]

export const educationDataZn = [
    {
        title: "महाराज़ा अग्रसेन इंस्टीट्यूट ऑफ टेक्नोलॉजी",
        location: "नई दिल्ली, भारत",
        description: "कंप्यूटर साइंस और इंजीनियरिंग में बैचलर ऑफ टेक्नोलॉजी में स्नातक किया, जिसमें 8.3/10.0 का GPA हासिल किया। सॉफ्टवेयर डेवलपमेंट, डेटा स्ट्रक्चर, एल्गोरिदम और वेब टेक्नोलॉजीज में मजबूत कौशल अर्जित किए। कोडिंग प्रतियोगिताओं और तकनीकी कार्यशालाओं में सक्रिय रूप से भाग लिया।",
        icon: React.createElement(LuGraduationCap),
        date: "2020 जुलाई - 2024 जून",
    },
    {
        title: "सिद्धार्थ इंटरनेशनल पब्लिक स्कूल",
        location: "नई दिल्ली, भारत",
        description: "वरिष्ठ माध्यमिक शिक्षा पूरी की, 70% अंक प्राप्त किए, विशेष रूप से गणित और कंप्यूटर विज्ञान में उत्कृष्ट प्रदर्शन किया। विश्लेषणात्मक सोच और समस्या-समाधान के प्रति मजबूत रुचि का प्रदर्शन किया, जिससे भविष्य की तकनीकी पढ़ाई और उपलब्धियों के लिए मजबूत आधार तैयार हुआ।",
        icon: React.createElement(LuGraduationCap),
        date: "2018 अप्रैल - 2020 मार्च",
    }
]

export const experiencesData = [
    {
        title: "Associate - Enterprise Application",
        location: "DeepSolvQuadragen Solutions Pvt. Ltd., On-Site",
        description:
            "Demonstrated strong troubleshooting skills by resolving and debugging over 10 issues in real-time. Maintained task-specific GitHub repositories, ensuring seamless collaboration and version control. Developed user interfaces with input validation and data integrity, enhancing user experience. Implemented more than 9 CRUD operations, maintaining data integrity and storage capabilities for users.",
        icon: React.createElement(FaCode),
        date: "2024 Oct - Present",
    },

    {
        title: "Frontend Developer Internship",
        location: "EduBlends, Remote",
        description:
            "Demonstrated strong troubleshooting skills by resolving and debugging over 10 issues in real-time. Maintained task-specific GitHub repositories, ensuring seamless collaboration and version control. Developed user interfaces with input validation and data integrity, enhancing user experience. Implemented more than 9 CRUD operations, maintaining data integrity and storage capabilities for users.",
        icon: React.createElement(FaCode),
        date: "2024 Jul - 2024 Aug",
    },

    {
        title: "AI Research Internship",
        location: "DeepSolv, Remote",
        description:
            "Demonstrated strong troubleshooting skills by resolving and debugging over 10 issues in real-time. Maintained task-specific GitHub repositories, ensuring seamless collaboration and version control. Developed user interfaces with input validation and data integrity, enhancing user experience. Implemented more than 9 CRUD operations, maintaining data integrity and storage capabilities for users.",
        icon: React.createElement(FaCode),
        date: "2024 Jun - 2024 Jul",
    },

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
        title: "सहयोगी - एंटरप्राइज एप्लिकेशन",
        location: "डीपसॉल्वक्वाड्राजेन सॉल्यूशंस प्राइवेट लिमिटेड, ऑन-साइट",
        description:
            "वास्तविक समय में 10 से अधिक समस्याओं को हल और डिबग करके मजबूत समस्या-समाधान कौशल का प्रदर्शन किया। GitHub रिपॉजिटरी का रखरखाव करके सहयोग और वर्शन नियंत्रण सुनिश्चित किया। उपयोगकर्ता अनुभव को बढ़ाने के लिए इनपुट सत्यापन और डेटा अखंडता के साथ यूजर इंटरफेस विकसित किए। डेटा अखंडता और उपयोगकर्ताओं के लिए भंडारण क्षमताओं को बनाए रखते हुए 9 से अधिक CRUD संचालन को लागू किया।",
        icon: React.createElement(FaCode),
        date: "अक्टूबर 2024 - वर्तमान",
    },
    
    {
        title: "फ्रंटएंड डेवलपर इंटर्नशिप",
        location: "एडुब्लेंड्स, रिमोट",
        description:
            "वास्तविक समय में 10 से अधिक समस्याओं को हल और डिबग करके मजबूत समस्या-समाधान कौशल का प्रदर्शन किया। GitHub रिपॉजिटरी का रखरखाव करके सहयोग और वर्शन नियंत्रण सुनिश्चित किया। उपयोगकर्ता अनुभव को बढ़ाने के लिए इनपुट सत्यापन और डेटा अखंडता के साथ यूजर इंटरफेस विकसित किए। डेटा अखंडता और उपयोगकर्ताओं के लिए भंडारण क्षमताओं को बनाए रखते हुए 9 से अधिक CRUD संचालन को लागू किया।",
        icon: React.createElement(FaCode),
        date: "जुलाई 2024 - अगस्त 2024",
    },
    
    {
        title: "एआई रिसर्च इंटर्नशिप",
        location: "डीपसॉल्व, रिमोट",
        description:
            "वास्तविक समय में 10 से अधिक समस्याओं को हल और डिबग करके मजबूत समस्या-समाधान कौशल का प्रदर्शन किया। GitHub रिपॉजिटरी का रखरखाव करके सहयोग और वर्शन नियंत्रण सुनिश्चित किया। उपयोगकर्ता अनुभव को बढ़ाने के लिए इनपुट सत्यापन और डेटा अखंडता के साथ यूजर इंटरफेस विकसित किए। डेटा अखंडता और उपयोगकर्ताओं के लिए भंडारण क्षमताओं को बनाए रखते हुए 9 से अधिक CRUD संचालन को लागू किया।",
        icon: React.createElement(FaCode),
        date: "जून 2024 - जुलाई 2024",
    },
    
    {
        title: "जावा डेवलपर इंटर्न",
        location: "कोडसॉफ्ट, रिमोट",
        description:
            "वास्तविक समय में 10 से अधिक समस्याओं को हल और डिबग करके मजबूत समस्या-समाधान कौशल का प्रदर्शन किया। GitHub रिपॉजिटरी का रखरखाव करके सहयोग और वर्शन नियंत्रण सुनिश्चित किया। उपयोगकर्ता अनुभव को बढ़ाने के लिए इनपुट सत्यापन और डेटा अखंडता के साथ यूजर इंटरफेस विकसित किए। डेटा अखंडता और उपयोगकर्ताओं के लिए भंडारण क्षमताओं को बनाए रखते हुए 9 से अधिक CRUD संचालन को लागू किया।",
        icon: React.createElement(FaCode),
        date: "सितंबर 2023 - अक्टूबर 2023",
    },
    
    {
        title: "फ्यूचर रेडी टैलेंट इंटर्न",
        location: "माइक्रोसॉफ्ट, रिमोट",
        description:
            "Azure वेब ऐप्स का उपयोग करके एक स्थैतिक वेब ऐप विकसित किया, जिसमें कई Azure सेवाओं को एकीकृत किया गया। माइक्रोसॉफ्ट के मुख्य व्यवसाय क्षेत्रों के साथ संरेखित परियोजनाओं में योगदान दिया, तकनीकी और सॉफ्ट कौशल को बढ़ाया। Azure क्लाउड विशेषज्ञता को गहन करने के लिए वर्कशॉप और प्रशिक्षण सत्रों में भाग लिया, FutureSkills Prime, NASSCOM, FutureSkills और AICTE के साथ सहयोग किया।",
        icon: React.createElement(FaVuejs),
        date: "मार्च 2023 - मई 2023",
    },
    
    {
        title: "ओपन सोर्स",
        location: "हैक्टोबर्फेस्ट | रिमोट",
        description:
            "हैक्टोबर्फेस्ट में उत्साही भागीदारी और 5 से अधिक ओपन-सोर्स परियोजनाओं में महत्वपूर्ण योगदान दिया। विविध टीमों के साथ सहयोग और सॉफ़्टवेयर विकास कौशल में विशेषज्ञता का प्रदर्शन किया। नवाचार और ज्ञान साझा करने को प्रोत्साहित करते हुए ओपन-सोर्स समुदाय में सक्रिय रूप से भाग लिया।",
        icon: React.createElement(FaReact),
        date: "अक्टूबर 2023 - अक्टूबर 2023",
    },
    
    {
        title: "कोर टीम",
        location: "कोडशेफ मैट चैप्टर | दिल्ली, भारत",
        description:
            "कोडशेफ मैट चैप्टर MAIT का आधिकारिक समाज है। हमने हैकाथॉन, कार्यशालाएं और प्रतियोगिताएं जैसी घटनाओं की मेजबानी की है। हमारे पोस्टर आकर्षक, जानकारीपूर्ण और पेशेवर हैं, जो हमारे दृष्टिकोण और मिशन को प्रतिबिंबित करते हैं।",
        icon: React.createElement(RiTeamFill),
        date: "अप्रैल 2023 - जून 2024",
    },
    
    {
        title: "ग्राफिक डिज़ाइनर",
        location: "टेककॉम | दिल्ली, भारत",
        description:
            "टेककॉम MAIT का आधिकारिक समाज है। हमने अतीत में आयोजित विभिन्न घटनाओं के लिए पोस्टर डिज़ाइन और प्रिंट किए हैं। हमारे पोस्टर आकर्षक, जानकारीपूर्ण और पेशेवर हैं, जो हमारे दृष्टिकोण और मिशन को प्रतिबिंबित करते हैं।",
        icon: React.createElement(MdGraphicEq),
        date: "अक्टूबर 2022 - जून 2024",
    },
    
    {
        title: "कंप्यूटर साइंस और इंजीनियरिंग में बी.टेक",
        location: "महाराजा अग्रसेन इंस्टीट्यूट ऑफ टेक्नोलॉजी | दिल्ली, भारत",
        description:
            "कंप्यूटर साइंस और इंजीनियरिंग में बैचलर ऑफ टेक्नोलॉजी के साथ स्नातक किया, 8.3/10.0 का GPA प्राप्त किया। सॉफ़्टवेयर विकास, डेटा संरचनाओं, एल्गोरिदम और वेब प्रौद्योगिकियों में मजबूत कौशल हासिल किया। कोडिंग प्रतियोगिताओं और तकनीकी कार्यशालाओं में सक्रिय रूप से भाग लिया।",
        icon: React.createElement(LuGraduationCap),
        date: "सितंबर 2020 - जून 2024",
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
