"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("AboutSection");
  const sectionLan = useTranslations("SectionName");
  const activeLocale = useLocale();

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? ( <>
        <p className="mb-3">
        मेरा प्रोग्रामिंग में सफर तब शुरू हुआ जब मैंने अपना अंडरग्रेजुएट
        <span className="font-medium italic">
          कंप्यूटर साइंस और इंजीनियरिंग
        </span>
        में
        <span className="italic underline">
          <a
            href="https://en.wikipedia.org/wiki/Guru_Gobind_Singh_Indraprastha_University"
            target="_blank"
          >
            महाराजा अग्रसेन इंस्टीट्यूट ऑफ टेक्नोलॉजी
          </a>
        </span>
        से किया। फ्रेशमैन के रूप में, मैंने कंप्यूटर साइंस के बुनियादी
        सिद्धांतों, डेटा संरचना, एल्गोरिदम, ऑपरेटिंग सिस्टम, डेटाबेस, जावा और
        पाइथन का ज्ञान हासिल किया। मैंने HTML और CSS का उपयोग कर एक वेबपेज बनाया,
        और इस अनुभव ने वेब डेवलपमेंट के आकर्षण को मेरे सामने उजागर किया—कोड की
        मदद से आप जो भी कल्पना करते हैं, उसे आप बना सकते हैं।
      </p>
      
      <p className="mb-3">
        मैंने अपने विकास कौशल को Microsoft और CodSoft में इंटर्नशिप के माध्यम से
        निखारा, जहाँ मैंने डेवलपर्स, डिजाइनर्स, टेस्टर्स और प्रोडक्ट मैनेजर्स के
        साथ निकटता से काम किया। मेरे कोड का हजारों लोगों द्वारा उपयोग होते देखना,
        मेरे लिए फुल स्टैक डेवलपमेंट में करियर बनाने के निर्णय को पक्का करने वाला
        अनुभव था।
      </p>
      
      <p>
        अकादमिक और कार्य क्षेत्र के अलावा, मुझे नई तकनीकों का पता लगाने और
        नवोन्मेषी परियोजनाओं का निर्माण करने का जुनून है। मैं सक्रिय रूप से
        ओपन-सोर्स समुदाय में योगदान करता हूँ, जिसमें Hacktoberfest 2023 में
        भागीदारी भी शामिल है। अपने खाली समय में, मैं तकनीकी कार्यक्रमों का आयोजन
        और भागीदारी करता हूँ, जैसे
        <span className="italic underline">
          <a
            href="https://mait.ac.in/images/ECE-ICIERA.pdf"
            target="_blank"
          >
            IEEE इंटरनेशनल सिंपोजियम ऑन इंडस्ट्रियल इलेक्ट्रॉनिक्स
          </a>
        </span>
        और
        <span className="italic underline">
          <a
            href="https://cse.mait.ac.in/index.php/cse/hackwithmait?id=978"
            target="_blank"
          >
            HackwithMAIT 3.0
          </a>
        </span>
        का आयोजन करना, जिसने मेरी नेतृत्व और टीम वर्क क्षमताओं को और भी मजबूत
        किया। इन अनुभवों ने मेरे तकनीकी कौशल को परिष्कृत किया और पेशेवर और
        शैक्षणिक सेटिंग्स में प्रभावी संचार और सहयोग के महत्व को रेखांकित किया।
        मैं X(ट्विटर) जैसे सोशल मीडिया प्लेटफार्मों पर भी सक्रिय हूँ,
        <span className="italic underline">
          <a href="https://x.com/devopcoder" target="_blank">
            X(ट्विटर)
          </a>
        </span>
        , जहाँ मैं तकनीकी टिप्स और ट्रिक्स साझा करता हूँ। और जब मैं कंप्यूटर के
        सामने नहीं होता, तो मुझे
        <span className="font-medium italic">
          गेम खेलना या नियमित रूप से फिट रहने के लिए वर्कआउट करना पसंद है।
        </span>
      </p> 
      </>     
      ) : (
        <>
          <p className="mb-3">
            My journey into programming kicked off during my undergrad in
            <span className="font-medium italic">
              {" "}
              Computer Science and Engineering
            </span>{" "}
            at {}
            <span className="italic underline">
              <a
                href="https://en.wikipedia.org/wiki/Guru_Gobind_Singh_Indraprastha_University"
                target="_blank"
              >
                Maharaja Agrasen Institute of Technology.
              </a>
            </span>{" "}
            As a freshman, I got my feet wet with the basics of computer
            science, Data Sctructure, Algorithm, Operating System, Databases,
            Java and Python. I used HTML and CSS to create a webpage. This
            experience opened my eyes to the charm of web development———
            <span className="font-medium italic">
              literally, you can build anything you envision with code.
            </span>
          </p>

          <p className="mb-3">
            I sharpened my development skills through internships at Microsoft
            and CodSoft, where I collaborated closely with developers,
            designers, testers, and product managers. The experience of seeing
            my code used by thousands solidified my decision to pursue a career
            in Full Stack Development. 
          </p>

          {/* <p className="mb-3">
            I’m now doing my Masters in
            <span className="font-medium italic"> Computing and IT</span> at the{" "}
            <span className="italic underline">
              <a href="https://www.st-andrews.ac.uk/" target="_blank">
                University of St Andrews.{" "}
              </a>
            </span>
            I thrive on programming challenges and enjoy working with teams to
            solve complex problems. I specialize in technologies such as
            <span className="font-medium italic"> React, Next.js and Vue</span>,
            and have a solid understanding of{" "}
            <span className="font-medium italic">
              JavaScript, TypeScript and HTML/CSS
            </span>
            .{" "}
          </p> */}

          <p>
            Outside of academics and work, I am passionate about exploring new
            technologies and building innovative projects. I actively contribute
            to the open-source community, including participating in
            Hacktoberfest 2023. In my free time, I organize and participate  in
            tech events, such as the{" "}
            <span className="italic underline">
              <a
                href="https://mait.ac.in/images/ECE-ICIERA.pdf"
                target="_blank"
              >
                {" "}
                IEEE International Symposium on Industrial Electronics
              </a>
            </span>{" "}
            and organizing the
            <span className="italic underline">
              <a
                href="https://cse.mait.ac.in/index.php/cse/hackwithmait?id=978"
                target="_blank"
              >
                {" "}
                HackwithMAIT 3.0
              </a>
            </span>
            , , which further honed my leadership and teamwork abilities. These experiences refined my technical skills and underscored the importance of effective communication and collaboration in both professional and academic settings.
            . I also run social media accounts on platforms like{" "}
            <span className="italic underline">
              <a href="https://x.com/devopcoder" target="_blank">
                X(Twitter)
              </a>
            </span>
            , where I share tech tips and tricks. And when I’m not at the
            computer, you’ll find me
            <span className="font-medium italic">
              {" "}
              Playing Games, or keeping fit with regular workouts.
            </span>
          </p>
        </>
      )}
    </motion.section>
  );
}
