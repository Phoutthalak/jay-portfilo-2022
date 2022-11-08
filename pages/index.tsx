import type { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typing'
import { fetchExperience } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-tract-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Jay Portfolio</title>
      </Head>

      {/*Header*/}
      <Header socials = {socials} />
      {/*Hero*/}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
      {/*About*/}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      {/*Experience*/}
      <section id="experiences" className="snap-center">
        <WorkExperience experiences = {experiences} />
      </section>
      {/*Skills*/}
      <section id="skills" className="snap-center">
        <Skills skills = {skills} />
      </section>
      {/*Project*/}
      <section id="projects" className="snap-center">
        <Projects projects = {projects}/>
      </section>
      {/*Contact me*/}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer' >
          <div className='flex items-center justify-center'>
            <img
              className='h-7 w-7 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="jaycards.jpg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };
}
