import Head from 'next/head';
import Intro from "@/components/Intro"
import SectionDivider from "@/components/SectionDivider"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import { isMobileDevice } from "@/lib/utils"
// import Contact from "@/components/Contact"

export const metadata = {
  title: "Dev | Personal Portfolio",
  description: "Dev is a full-stack developer .",
}

export default function Home() {
  const isMobile = isMobileDevice()

  return (
    <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/icon.ico" />
        {/* Other meta tags, stylesheets, etc. */}
      </Head>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience isMobile={isMobile} />
      {/* <Contact /> */}
    </main>
  )
}
