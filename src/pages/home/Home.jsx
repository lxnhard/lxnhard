import { useEffect } from 'react';

import { Projects } from '../../components/Projects.jsx'
import { Contact } from '../../components/Contact.jsx'
import { animateScroll as scroll, scroller } from 'react-scroll';

export const Home = (props) => {

  useEffect(() => {
    props.scrollId === "top" ? scroll.scrollToTop() :
      scroller.scrollTo(props.scrollId);
    console.log(props.scrollId)
  }, [props.scrollId])
  // scrollId={scrollId} 

  return (
    <>
      <section id="about" className="-mt-10">
        <div className="pt-32">
          <div className="container mx-auto m-10  grid grid-cols-3 gap-4">
            <div className="col-span-3 sm:col-span-2 pr-5 lg:my-auto">
              <h2 className="font-headline text-6xl dark:text-gray-300 mb-5">
                <span className="text-tealsat-700 dark:text-teal-600">Fullstack web developer.</span> <br />
                Berlin, Germany.
              </h2>

            </div>
            <div className="col-span-3 lg:col-span-2 pr-5 lg:my-auto">
              <p className="text-gray-700 dark:text-gray-400 text-2xl">
                I am a web developer with a background in online marketing in the health/social sector.
                Excited to build attractive websites and web-apps with a focus on user experience and SEO requirements.</p>
              <a type="button" href="#contact" className="w-full sm:w-auto my-8 py-3 px-5 text-2xl bg-indigo-700 text-gray-300 hover:bg-opacity-80">Hiring? Contact me!</a>
            </div >
            <img src="img/portrait_square.jpg" alt="Portrait Leonhard Link"
              className="row-span-1 lg:row-span-2 sm:row-start-1 lg:row-start-1 col-start-1 col-span-3 sm:col-start-3 p-4 w-full rounded-full brightness-125 contrast-75 shadow-lg dark:contrast-100 dark:brightness-125" />
          </div >

          <div className="container max-w-6xl mx-auto mt-10">
            <h2 className="font-headline text-3xl text-tealsat-700 dark:text-teal-600 font-bold mb-5">
              My tech stack
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">HTML</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">CSS</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">TailwindCSS</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">Bootstrap</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">Javascript</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">React</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">Redux</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">React Native</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">Vite</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">Angular</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">NodeJS</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">Express</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">MongoDB</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">Git</span>
              <span className="inline-block md:text-lg dark:text-gray-300 border-2 border-gray-400 p-2">Amazon&nbsp;Web&nbsp;Services&nbsp;(AWS)</span>
            </div>
          </div>

          <div className="container mx-auto mt-10">
            <h2 className="font-headline text-3xl dark:text-gray-300 font-bold mb-5">
              My background</h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg mb-4">
              Over the past years, I’ve worked as an online marketing manager in the healthcare and social sector.
              With responsibilites ranging from <span className="text-tealsat-700 dark:text-teal-600">project management</span> and <span className="text-tealsat-700 dark:text-teal-600">content management</span> to <span className="text-tealsat-700 dark:text-teal-600">SEO</span> and <span className="text-tealsat-700 dark:text-teal-600">copywriting</span>,
              I have contributed to large website migrations, the maintenance of existing websites and PWAs as well as new projects and features.</p>
            <p className="text-gray-700 dark:text-gray-400 text-lg mb-4">
              Through close collaborations with developers, designers and stakeholders, I realized that web development itself excites me way more than my previous tasks.
              Therefore, I completed a fullstack web development program in part-time at CareerFoundry.
              In Juli 2023, I launched my <a href="https://gb22.johannesstift-diakonie.de/" title="Geschäftsbericht 2022 | Johannesstift Diakonie" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline visited:text-indigo-500">first commissioned website</a>.
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-lg mb-4">
              Currently, I am looking for a job as a frontend or fullstack web developer.
              I am excited to bring my skills to bear and learn more from experienced developers.
            </p>
          </div>
        </div>
      </section >


      <section className="py-16" id="projects">
        <h1 className="font-headline text-6xl text-tealsat-700 dark:text-teal-600 mb-8">Projects</h1>
        <Projects />
      </section >

      <section className="py-16" id="contact">
        <Contact />
      </section >

    </>
  );
};