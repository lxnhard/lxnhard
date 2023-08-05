
import { Projects } from '../../components/Projects.jsx'

export const Home = () => {

  return (
    <>
      <div className="container mx-auto p-8 m-10 grid grid-cols-3 gap-y-12 gap-x-4">
        <div className="col-span-3 lg:col-span-2 pr-5 lg:my-auto">
          <h2 className="font-headline text-6xl dark:text-gray-300 mb-5">
            <span className="text-tealsat-700 dark:text-teal-600">Fullstack web developer.</span> <br />
            Berlin, Germany.
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-2xl">
            I am a web developer with a background in online marketing in the health/social sector.
            Excited to build attractive websites and web-apps with a focus on user experience and SEO requirements.</p>
          <button className="mt-8 py-3 px-5 text-2xl bg-indigo-700 text-gray-300 hover:bg-opacity-80">Hiring? Contact me!</button>
        </div >
        <img src="img/portrait_square.jpg" alt="Portrait Leonhard Link" className="col-span-3 lg:col-span-1 rounded-full brightness-125 contrast-75 shadow-lg dark:contrast-100 dark:brightness-125" />
      </div >

      <div className="container max-w-6xl mx-auto  p-8 m-10">
        <h2 className="font-headline text-3xl text-tealsat-700 dark:text-teal-600 font-bold mb-5">
          My tech stack
        </h2>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">HTML</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">CSS</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">TailwindCSS</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">Bootstrap</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">Javascript</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">React</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">Redux</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">React Native</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">Vite</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">NodeJS</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">Express</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">MongoDB</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">Amazon&nbsp;Web&nbsp;Services&nbsp;(AWS)</span>
        <span className="inline-block text-lg dark:text-gray-300 border-2 border-gray-400 p-2 mr-4 mb-4">Git</span>
      </div>

      <div className="container mx-auto p-8 m-10">
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
      </div >


      <section className="p-8">
        <h1 className="font-headline text-6xl text-tealsat-700 dark:text-teal-600 mb-16">Projects</h1>
        <Projects />
      </section >

    </>
  );
};