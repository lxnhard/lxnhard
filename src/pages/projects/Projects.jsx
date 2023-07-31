import { useState } from "react";
import { ProjectCard } from '../../components/ProjectCard.jsx'

export const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleClick = (index) => {
    setProjectIndex(index);
  }


  return (
    <>
      <section className="grid grid-cols-12">
        <div className="col-start-3 col-span-8 row-span-5 row-start-1" >
          <h1 className="font-headline text-6xl dark:text-gray-300 mb-5">Projects</h1>
          <a href="https://johannesstift-diakonie.de/" title="Johannesstift Diakonie" target="_blank" rel="noreferrer"><img src="img/johannesstift_diakonie-gb22.png" alt="" /></a>
        </div>

        <div className="col-start-3 col-span-8 row-start-6 row-span-2 bg-slate-800/95 p-8">
          <p className="text-lg dark:text-teal-600">Johannesstift Diakonie</p>
          <h2 className="text-headline text-4xl mb-4 dark:text-gray-300">Geschäftsbericht 2022</h2>
          <div className="mt-auto mb-0">
            {["React", "Javascript", "Bootstrap", "SCSS", "lottie-web"].map(tech => {
              return (
                <span className="inline-block text-md dark:text-gray-300 border-2 border-gray-400 p-2 mr-2 mt-2" key={tech}>{tech}</span>
              )
            })}

          </div>
        </div>


        <div className="col-start-3 col-span-8 col-end-11">


          <p className="mt-8 mb-4 dark:text-gray-400">
            Annual report landingpage for <a href="https://johannesstift-diakonie.de/" title="Johannesstift Diakonie" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline visited:text-indigo-500">Johannesstift Diakonie</a>. A Single Page Application written with React, utilizing various animations, complex transitions and self-hosted videos.</p>
          <p className="mb-4 dark:text-gray-400">The website is showcasing the company’s activities throughout the year to shareholders, business partners and other interested people.</p>
          <h3 className="font-bold py-2 dark:text-gray-300">My role</h3>
          <p className="mb-4 dark:text-gray-400">
            While programming the web-app as a commissioned work for my employer at that time, I was also involved in the concept and design process as well as the deployment of the app.
          </p>
          <h3 className="font-bold py-2 text-lg dark:text-gray-300">Concept & Design</h3>
          <p className="mb-4 dark:text-gray-400">
            Operating under the claim &apos;A secure network&apos;, the website highlights five interconnected networks the company is operating in, visualized by icons.
            As the centerpiece, an animated interactive network allows users to navigate through the five areas, investigating corresponding events and developments in videos, texts and images.
          </p>
          <p className="mb-4 dark:text-gray-400">
            In previous years, the annual reports of the company have still been published in print, while landing pages only served as a less important, additional feature.
            Giving up print versions for the first time, this year’s annual report was aiming at an exciting digital experience fully utilizing the advantages of a web-based publication.
          </p>
          <p className="mb-4 dark:text-gray-400">
            The design has been developed by advertising agency <a href="https://rocket.ch/" title="Rocket | Powerful advertising" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline visited:text-indigo-500">Rocket.ch</a> and handed off in Figma.
          </p>

          <h3 className="font-bold py-2 text-4xl dark:text-gray-300 mt-8">Challenges</h3>
          <p className="mb-4 dark:text-gray-400">
            During the project, I encountered several challenges mainly associated with performance and bundle size.
          </p>
          <h4 className="font-bold py-2 dark:text-gray-300 mt-8">Animations</h4>
          <p className="mb-4 dark:text-gray-400">
            The animations in the hero section as well as in the main section (&apos;Das Netzwerk&apos;) turned out to be a major problem for CPU performance on older mobile devices and resulted in huge file sizes. The design handoff comprised mobile and desktop versions of the hero animation as well as icons with micro-animations in <a href="https://airbnb.design/lottie/" title="Lottie | airbnb" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline visited:text-indigo-500">lottie/JSON format</a>. For the project, I used the <a href="https://github.com/airbnb/lottie-web" title="lottie-web | Github" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline visited:text-indigo-500">lottie-web</a> library, which is more versatile than the LottiePlayer React Component.
          </p>
          <p className="mb-4 dark:text-gray-400">
            To solve performance issues, I took the following steps:
          </p>
          <ul className="list-disc list-outside pl-5 dark:text-gray-400">
            <li>
              <span className="font-bold dark:text-gray-300">Lazy loading: </span>
              <span>
                Lazy loading animation components helped for the network section, but was not suitable for the larger animations in the hero section above the fold. As a better solution for this problem, I used the Intersection Observer API to disable the hero animation once the user scrolled past it.
              </span>
            </li>
            <li>
              <span className="font-bold dark:text-gray-300">dotlottie format: </span>
              <span>
                Converting the animations into considerable smaller dotlottie-files helped with file sizes. Unfortunately, Javascript libraries for dotlottie are not able to render on canvas, which resulted in even worse CPU performance, leading me back to using lottie/JSON.
              </span>
            </li>
            <li>
              <span className="font-bold dark:text-gray-300">Cutting out micro-animations on mobile viewports: </span>
              <span>
                For the interactive network section, I decided to use static instead of micro-animated icons for mobile device viewports.
              </span>
            </li>
          </ul>
          <h3 className="font-bold py-2 dark:text-gray-300 mt-8">Bundle size</h3>
          <p className="mb-4 dark:text-gray-400">The resulting bundle turned out to be much bigger in size than I expected. A major contribution was the large size of the lottie-web library. Cutting out unnecessary dependencies and partial imports helped, but still left me with a huge bundle.
            After analyzing the bundle with webpack bundle analyzer through craco, I took the following steps: </p>
          <ul className="list-disc list-outside pl-5 dark:text-gray-400">
            <li>
              <span className="font-bold dark:text-gray-300">Lazy loading: </span>
              <span>
                Lazy loading components wherever reasonable helped separating the bundle into different chunks that would be loaded asynchronically.
              </span>
            </li>
            <li>
              <span className="font-bold dark:text-gray-300">Selective ES6 imports of dependencies: </span>
              <span>
                A major chunk of the bundle was lottie-web (298.5 kB minified). Only importing the canvas component helped reducing size.
                With other dependencies such as react-bootstrap, I used the same strategy.
              </span>
            </li>
            <li>
              <span className="font-bold dark:text-gray-300">PurgeCSS: </span>
              <span>
                Utilizing bootstrap as a CSS framework, I had to customize CSS extensively to match the screen design, resulting in large CSS files.
                Using the purgeCSS webpack plugin helped to exarcerbate this problem.
              </span>
            </li>
          </ul>

          <h3 className="font-bold py-2 dark:text-gray-300 mt-8">Iframe usage</h3>
          <p className="mb-4 dark:text-gray-400">One requirement was to embed an existing dynamic map of different worksites within the company. This solution is far from ideal, leading to design/layout inconsistencies as well as performance issues. In retrospective, I would strongly advice any customers against embedding iframes.</p>
          <h3 className="font-bold text-4xl py-2 dark:text-gray-300 mt-8">Retrospective</h3>
          <p className="mb-4 dark:text-gray-400">
            Throughout the project, I extended my knowledge of React and frontend development in general.
          </p>
          <p className="font-bold dark:text-gray-300">
            Main learnings:
          </p>
          <ul className="list-disc list-outside pl-5 mb-4 dark:text-gray-400">
            <li>
              <span>
                Working with Figma design handoffs
              </span>
            </li>
            <li>
              <span>
                Utilizing Lottie/JSON as well as CSS animations and transitions
              </span>
            </li>
            <li>
              <span>
                SPA architecture (without routing)
              </span>
            </li>
            <li>
              <span>
                Analyzing and optimizing performance
              </span>
            </li>
            <li>
              <span>
                Working with the Intersection Observer API
              </span>
            </li>
          </ul>
          <p className="font-bold dark:text-gray-300">
            What I would do different next time:
          </p>
          <ul className="list-disc list-outside pl-5 mb-4 dark:text-gray-400">
            <li>
              <span>
                Using a utility first CSS-framework like TailwindCSS instead of Bootstrap to decrease bundle size and avoid redundant CSS.
              </span>
            </li>
            <li>
              <span>
                Advising designers to use a more performant implementation for animations. While Lottie/JSON is a good choice for interactive animations, we might have taken a sledgehammer to crack a nut here.
              </span>
            </li>
            <li>
              <span>
                Advising against use of Iframes and request additional time/budget for proper implementation.
              </span>
            </li>
            <li>
              <span>
                I would either use Vite instead of CRA as a toolchain, or implement the whole project with NextJS.
              </span>
            </li>
          </ul>

        </div>
      </section>


      <section className="grid grid-cols-12 mt-48">
        <h2 className="col-span-12 text-6xl mb-8 dark:text-teal-500">Other projects</h2>
        <div className="col-start-1 col-span-9">

          {projectIndex === 1 ?
            <ProjectCard
              title="Watch-Til-Death (React/AWS)"
              imageUrl="img/movie-app.jpg"
              techstack={["React", "Redux", "Javascript", "AWS"]}
              githubUrl="https://github.com/lxnhard/movie_app-client"
              liveUrl="https://watch-til-death.com">
              <p className="mt-8">
                The web application uses the MERN stack to provide users with access to
                information about different movies, directors, and genres. Users are able to sign up, update their profile, and
                create a list of their favorite movies.</p>
              <h3 className="font-bold py-2">Deployment</h3>
              <p>
                Deployed with Amazon Web Services using a custom VPC, redundant EC2 instances in different
                availability zones, S3 buckets for client side and file storage, and Lambda for serverless
                functions.
              </p>
            </ProjectCard>
            : projectIndex === 2 ?
              <ProjectCard imageUrl="img/movie-api.jpg"
                title="Movie API"
                techstack={["NodeJS", "Express", "MongoDB", "AWS"]}
                githubUrl="https://github.com/lxnhard/movie_api"
                liveUrl="https://api.watch-til-death.com">
                <p className="mt-8">
                  REST API for the web application Watch-Til-Death with different endpoints for movie and user data.
                  Built with NodeJS, Express, MongoDB and Mongoose. Implements JWT token-based user authentication.</p>
                <h3 className="font-bold py-2">Deployment</h3>
                <p>
                  Deployed with Amazon Web Services. Three EC2 instances in an Auto Scaling group behind an Application
                  Load Balancer and a separate database instance guarantee redundancy and scalability.
                </p>
              </ProjectCard>
              :
              <ProjectCard
                title="Watch-Til-Death (Angular)"
                imageUrl="img/movie-app-angular.jpg"
                techstack={["Angular", "Angular Mateiral", "Javascript"]}
                githubUrl="https://github.com/lxnhard/movie_app-angular-client"
                liveUrl="https://lxnhard.github.io/movie_app-angular-client">
                <p className="mt-8">
                  Client-side for a single page web application providing authenticated users
                  with information about different movies, built with Angular.</p>
                <h3 className="font-bold py-2">Deployment</h3>
                <p>
                  The web application uses the MEAN stack to provide users with access to
                  information about different movies, directors, and genres. Users are able to sign up, update their profile, and
                  create a list of their favorite movies.
                </p>
              </ProjectCard>
          }



        </div>


        {/* Thumbnails */}
        <div className="col-start-11 col-span-2">
          <div className="flex flex-col">
            {/* <div className={`bg-white shadow-md rounded-md overflow-hidden mb-4 w-full cursor-pointer	transition-all duration-300 ${projectIndex === 0 ? "opacity-100 scale-110 origin-right" : "opacity-50 hover:opacity-75"}`} onClick={() => handleClick(0)}>
              <img src="img/johannesstift_diakonie-gb22.png" className="" />
              <div className="p-3">
                <p className="text-md font-bold">Johannesstift Diakonie</p>
              </div>
            </div> */}
            <div className={`bg-white shadow-md rounded-md overflow-hidden mb-4 w-full cursor-pointer	transition-all duration-300 ${projectIndex === 1 ? "opacity-100 scale-110 origin-right" : "opacity-50 hover:opacity-75"}`} onClick={() => handleClick(1)}>
              <img src="img/movie-app.jpg" className="" />
              <div className="p-3">
                <p className="text-md font-bold">Movie App (React)</p>
                {/* <p className="text-sm">Extremely short description in a few words.</p> */}
              </div>
            </div>
            <div className={`bg-white shadow-md rounded-md overflow-hidden mb-4 w-full cursor-pointer	transition-all duration-300	${projectIndex === 2 ? "opacity-100 scale-110 origin-right" : "opacity-50 hover:opacity-75"}`} onClick={() => handleClick(2)}>
              <img src="img/movie-api.jpg" className="" />
              <div className="p-3">
                <p className="text-md font-bold py-1">Movie API</p>
                <p className="text-sm">Extremely short description in a few words.</p>
              </div>
            </div>
            <div className={`bg-white shadow-md rounded-md overflow-hidden mb-4 w-full cursor-pointer	transition-all duration-300	${projectIndex === 3 ? "opacity-100 scale-110 origin-right" : "opacity-50 hover:opacity-75"}`} onClick={() => handleClick(3)}>
              <img src="img/movie-app-angular.jpg" className="" />
              <div className="p-3">
                <p className="text-md font-bold">Movie App (Angular)</p>
                {/* <p className="text-sm">Extremely short description in a few words.</p> */}
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};
