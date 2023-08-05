import { useState } from "react";
import { ProjectCard } from './ProjectCard.jsx'
import { Link } from 'react-router-dom';

export const Projects = () => {
  const [isExpanded, setIsExpanded] = useState([false, false, false]);

  const toggleExpand = (index) => {
    const isExpandedNew = isExpanded.map((e, i) => {
      if (i === index) {
        return !isExpanded[i];
      } else {
        return e;
      }
    });
    setIsExpanded(isExpandedNew);
  }



  return (
    <>

      <div className="grid grid-cols-12 mb-8">

        <div className="col-start-1 col-end-9 h-full relative">


          <div className="relative h-full w-full">
            <div>
              {/* <a href="https://johannesstift-diakonie.de/" title="Johannesstift Diakonie" target="_blank" rel="noreferrer"><img src="img/johannesstift_diakonie-gb22.png" alt="" /></a> */}
              <Link to="/geschaeftsbericht_jsd" title="Case study: Geschäftsbericht 2022 | Johannesstift Diakonie"><img src="img/johannesstift_diakonie-gb22.png" alt="Geschäftsbericht Johannesstift Diakonie 2022" /></Link>
            </div>

            <div className="p-4 w-full bg-slate-800">
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

          </div>
        </div>

        <div className="col-start-9 col-end-13 bg-slate-800 ">
          <div className="p-8">
            <p className="mb-4 dark:text-gray-400">
              Annual report landingpage for <a href="https://johannesstift-diakonie.de/" title="Johannesstift Diakonie" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline visited:text-indigo-500">Johannesstift Diakonie</a>. A Single Page Application written with React, utilizing various animations, complex transitions and self-hosted videos.</p>
            <p className="mb-4 dark:text-gray-400">The website is showcasing the company’s activities throughout the year to shareholders, business partners and other interested people.</p>
            <h3 className="font-bold py-2 dark:text-teal-600">
              My role</h3>
            <p className="mb-4 dark:text-gray-400">
              While programming the web-app as a commissioned work for my employer at that time, I was also involved in the concept and design process as well as the deployment of the app.
            </p>

            <div className="mt-8 flex flex-col">

              <Link to="/geschaeftsbericht_jsd" className="w-full" title="Case study: Geschäftsbericht 2022 | Johannesstift Diakonie">
                <div className="inline-block flex flex-row items-center justify-between mb-4 py-2 px-4 rounded-md bg-indigo-800 hover:bg-opacity-80">
                  <img src="img/information_icon.svg" className="mr-2 h-6 inline" alt="Icon: External Link" />
                  <span className="text-2xl text-gray-300 mx-auto">
                    Read case study
                  </span>
                </div>
              </Link>

              <span className="inline-block py-2 px-4 rounded-md bg-teal-800 hover:bg-opacity-80">
                <div className="text-lg flex flex-row items-center">
                  <a href="https://gb22.johannesstift-diakonie.de/" className="text-gray-300" rel="noreferrer" target="_blank" title="Open website">
                    <img src="img/link_icon.svg" className="mr-2 h-6 inline-block" alt="Icon: External Link" />
                    Open website
                  </a>
                </div>
              </span>
            </div>

          </div>
        </div>
      </div >



      {/* small projects */}

      <div className="grid grid-cols-12">

        <div className="col-start-1 col-end-7 h-full relative cursor-pointer z-10 hover:opacity-70" onClick={() => toggleExpand(0)}>

          <div className="relative h-full w-full z-10">
            <img src="img/movie-app.jpg" alt="Watch-Til-Death API" className=" h-full w-full" />
            <img src="img/icon_right.svg" className="right-2 inset-y-1/2 -translate-y-1/2 h-8 absolute opacity-90" alt="Icon: Expand" />
          </div>


          <div className="p-4 w-full absolute z-20 bg-slate-800/90 bottom-0">
            {/* <p className="text-lg dark:text-teal-600">Johannesstift Diakonie</p> */}
            <h2 className="text-headline text-4xl mb-4 dark:text-gray-300">Watch-Til-Death (React/AWS)</h2>
            <div className="mt-auto mb-0">
              {["React", "Redux", "Javascript", "AWS"].map(tech => {
                return (
                  <span className="inline-block text-md dark:text-gray-300 border-2 border-gray-400 p-2 mr-2" key={tech}>{tech}</span>
                )
              })}
            </div>
          </div>
        </div>


        <div className={`col-start-7 col-end-13 h-full bg-slate-800/95  
        ${!isExpanded[0] ? "-translate-x-full" : null} transition-translate duration-300 ease-in-out	
        `}>
          <div className="p-8">
            <p className="mb-4 dark:text-gray-400">
              The web application uses the MERN stack to provide users with access to
              information about different movies, directors, and genres. Users are able to sign up, update their profile, and
              create a list of their favorite movies.</p>
            <h3 className="font-bold py-2 dark:text-teal-600">Deployment</h3>
            <p className="mb-4 dark:text-gray-400">
              Deployed with Amazon Web Services using a custom VPC, redundant EC2 instances in different
              availability zones, S3 buckets for client side and file storage, and Lambda for serverless
              functions.
            </p>

            <div className="mt-8">

              <span className="inline-block mr-4 py-2 px-4 rounded-md bg-indigo-800 hover:bg-opacity-80">
                <div className="flex flex-row items-center">
                  <a href="https://github.com/lxnhard/movie_app-client" className="text-gray-300" rel="noreferrer" target="_blank" title="View code on GitHub">
                    <img src="img/github_icon.svg" className="mr-2 h-6 inline-block" alt="Icon: Github" />
                    View Code on GitHub</a>
                </div>
              </span>

              <span className="inline-block mr-4 py-2 px-4 rounded-md bg-teal-800 hover:bg-opacity-80">
                <div className="flex flex-row items-center">
                  <a href="https://watch-til-death.com" className="text-gray-300" rel="noreferrer" target="_blank" title="Open website">
                    <img src="img/link_icon.svg" className="mr-2 h-6 inline-block" alt="Icon: External Link" />
                    Open website
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>



      <div className="grid grid-cols-12">
        <div className="col-start-7 col-end-13 order-2 h-full relative cursor-pointer" onClick={() => toggleExpand(1)}>

          <div className="relative h-full w-full z-10">
            <img src="img/movie-api.jpg" alt="Watch-Til-Death API" className=" h-full w-full" />
            <img src="img/icon_left.svg" className="left-2 inset-y-1/2 -translate-y-1/2 h-8 absolute  opacity-80" alt="Icon: Expand" />
          </div>



          <div className="p-4 w-full absolute z-20 bg-slate-800/90 bottom-0">

            <div>
              {/* <p className="text-lg dark:text-teal-600">Johannesstift Diakonie</p> */}
              <h2 className="text-headline text-4xl mb-4 dark:text-gray-300">Watch-Til-Death API</h2>


              <div className="mt-auto mb-0">
                {
                  ["NodeJS", "Express", "MongoDB", "AWS"].map(tech => {
                    return (
                      <span className="inline-block text-md dark:text-gray-300 border-2 border-gray-400 p-2 mr-2" key={tech}>{tech}</span>
                    )
                  })}
              </div>


            </div>

          </div>

        </div>

        <div className={`col-start-1 col-end-7 order-1 h-full bg-slate-800/95
        ${!isExpanded[1] ? "translate-x-full" : null} transition-translate duration-300 ease-in-out	
        `}>
          <div className="p-8">
            <p className="mb-4 dark:text-gray-400">
              REST API for the web application Watch-Til-Death with different endpoints for movie and user data.
              Built with NodeJS, Express, MongoDB and Mongoose. Implements JWT token-based user authentication.</p>

            <h3 className="font-bold py-2 dark:text-teal-600">Deployment</h3>
            <p className="mb-4 dark:text-gray-400">
              Deployed with Amazon Web Services. Three EC2 instances in an Auto Scaling group behind an Application
              Load Balancer and a separate database instance guarantee redundancy and scalability.
            </p>


            <div className="mt-8">
              <span className="inline-block mr-4 py-2 px-4 rounded-md bg-indigo-800 hover:bg-opacity-80">
                <div className="flex flex-row items-center">
                  <a href="https://github.com/lxnhard/movie_api" className="text-gray-300" rel="noreferrer" target="_blank" title="View code on GitHub">
                    <img src="img/github_icon.svg" className="mr-2 h-6 inline-block" alt="Icon: Github" />
                    View Code on GitHub</a>
                </div>
              </span>

              <span className="inline-block mr-4 py-2 px-4 rounded-md bg-teal-800 hover:bg-opacity-80">
                <div className="flex flex-row items-center">
                  <a href="https://api.watch-til-death.com" className="text-gray-300" rel="noreferrer" target="_blank" title="Open website">
                    <img src="img/link_icon.svg" className="mr-2 h-6 inline-block" alt="Icon: External Link" />
                    Open website
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>

      </div>



      <div className="grid grid-cols-12 gap-y-4">

        <div className="col-start-1 col-end-7 h-full relative cursor-pointer" onClick={() => toggleExpand(2)}>
          <div className="relative h-full w-full z-10">
            <img src="img/movie-app-angular.jpg" alt="Watch-Til-Death (Angular)" className="h-full w-full" />
            <img src="img/icon_right.svg" className="right-2 inset-y-1/2 -translate-y-1/2 h-8 absolute  opacity-90" alt="Icon: Expand" />
          </div>

          <div className="p-4 w-full absolute z-20 bg-slate-800/90 bottom-0">
            <h2 className="text-headline text-4xl mb-4 dark:text-gray-300">Watch-Til-Death (Angular)</h2>


            <div className="mt-auto mb-0">
              {["Angular", "Angular Mateiral", "Javascript"].map(tech => {
                return (
                  <span className="inline-block text-md dark:text-gray-300 border-2 border-gray-400 p-2 mr-2" key={tech}>{tech}</span>
                )
              })}
            </div>


          </div>
        </div>

        <div className={`col-span-6 col-start-7  h-full bg-slate-800/95
        ${!isExpanded[2] ? "-translate-x-full" : null} transition-translate duration-300 ease-in-out	
        `}>
          <div className="p-8">
            <p className="mb-4 dark:text-gray-400">
              Client-side for a single page web application providing authenticated users
              with information about different movies, built with Angular.</p>
            <h3 className="font-bold py-2 dark:text-teal-600">Deployment</h3>
            <p className="mb-4 dark:text-gray-400">
              The web application uses the MEAN stack to provide users with access to
              information about different movies, directors, and genres. Users are able to sign up, update their profile, and
              create a list of their favorite movies.
            </p>


            <div className="mt-8">
              <span className="inline-block mr-4 py-2 px-4 rounded-md bg-indigo-800 hover:bg-opacity-80">
                <div className="flex flex-row items-center">
                  <a href="https://github.com/lxnhard/movie_app-angular-client" className="text-gray-300" rel="noreferrer" target="_blank" title="View code on GitHub">
                    <img src="img/github_icon.svg" className="mr-2 h-6 inline-block" alt="Icon: Github" />
                    View Code on GitHub</a>
                </div>
              </span>

              <span className="inline-block mr-4 py-2 px-4 rounded-md bg-teal-800 hover:bg-opacity-80">
                <div className="flex flex-row items-center">
                  <a href="https://lxnhard.github.io/movie_app-angular-client" className="text-gray-300" rel="noreferrer" target="_blank" title="Open website">
                    <img src="img/link_icon.svg" className="mr-2 h-6 inline-block" alt="Icon: External Link" />
                    Open website
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};
