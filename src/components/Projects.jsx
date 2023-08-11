import { useState } from "react";
import { Link } from 'react-router-dom';

export const Projects = () => {
  const [isExpanded, setIsExpanded] = useState([0, 0]);

  const toggleExpand = (index) => {
    setIsExpanded(isExpanded[1] === index ? [isExpanded[1], false] : [isExpanded[1], index]);
    console.log(isExpanded[1] === index ? [isExpanded[1], false] : [isExpanded[1], index])
  }

  return (
    <>

      <div className="grid grid-cols-12 mb-16 shadow-2xl xl:space-x-1">

        <div className="col-start-1 col-end-13 xl:col-end-9 xl:row-start-1 xl:row-end-2">


          <div className="relative w-full">
            <div>
              <Link to="/geschaeftsbericht_jsd" title="Case study: Geschäftsbericht 2022 | Johannesstift Diakonie"><img src="img/johannesstift_diakonie-gb22.png" alt="Geschäftsbericht Johannesstift Diakonie 2022" /></Link>
            </div>
          </div>
        </div>

        <div className="col-start-1 col-end-13 row-start-2 lg:col-end-8 xl:col-end-9 h-full relative bg-slate-800">
          <div className="p-4 sm:p-8 pt-4 w-full">
            <p className="text-lg text-teal-600">Johannesstift Diakonie</p>
            <h2 className="text-headline text-4xl mb-4 text-gray-300">Geschäftsbericht 2022</h2>
            <div className="mt-auto mb-0">
              {["React", "Javascript", "Bootstrap", "SCSS", "lottie-web"].map(tech => {
                return (
                  <span className="inline-block text-md text-gray-300 border-2 border-gray-400 p-2 mr-2 mt-2" key={tech}>{tech}</span>
                )
              })}
            </div>
          </div>

        </div>

        <div className="col-start-1 xl:col-start-9 col-end-13 xl:row-start-1 bg-slate-800 pt-0 pb-0 lg:pb-8 p-4 sm:p-8 xl:pb-0 xl:pt-8">
          <div className="flex flex-col justify-between">

            <div>
              <p className="mb-4 text-gray-400">
                Annual report landingpage for <a href="https://johannesstift-diakonie.de/" title="Johannesstift Diakonie" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline visited:text-indigo-500">Johannesstift Diakonie</a>. A Single Page Application written with React, utilizing various animations, complex transitions and self-hosted videos.</p>
              <p className="mb-4 text-gray-400">The website is showcasing the company’s activities throughout the year to shareholders, business partners and other interested people.</p>
              <h3 className="font-bold py-2 text-teal-600">
                My role</h3>
              <p className="mb-4 text-gray-400">
                While programming the web-app as a commissioned work for my employer at that time, I was also involved in the concept and design process as well as the deployment of the app.
              </p>
            </div>


          </div>
        </div>


        <div className="col-start-1 lg:col-start-8 lg:row-start-2 xl:col-start-9 col-end-13 bg-slate-800 p-4 sm:p-8">

          <div className="flex flex-col justify-end h-full">

            <a href="https://gb22.johannesstift-diakonie.de/" rel="noreferrer" target="_blank" title="Open website">
              <div className="w-full flex flex-row items-center justify-between py-2 px-4 mb-4 rounded-md bg-teal-800 hover:bg-opacity-80">
                <img src="img/link_icon.svg" className="mr-2 h-7 inline-block" alt="Icon: External Link" />
                <span className="text-2xl text-gray-300 mx-auto">
                  Open website
                </span>
              </div>
            </a>


            <Link to="/geschaeftsbericht_jsd" title="Case study: Geschäftsbericht 2022 | Johannesstift Diakonie">
              <div className="w-full flex flex-row items-center justify-between py-2 px-4 rounded-md bg-indigo-800 hover:bg-opacity-80">
                <img src="img/information_icon.svg" className="mr-2 h-7 inline" alt="Icon: External Link" />
                <span className="text-2xl text-gray-300 mx-auto">
                  Read case study
                </span>
              </div>
            </Link>

          </div>
        </div>
      </div >



      {/* small projects */}

      <div className="grid grid-cols-12 ">

        <div className={`col-start-1 col-end-13 lg:col-end-7 h-full relative z-10 border-b-4 lg:border-r-4 dark:border-gray-950 cursor-pointer delay-300
        ${isExpanded[1] === 0 ? "bg-slate-800" : "bg-slate-900 hover:bg-slate-800"}`}
          onClick={() => toggleExpand(0)}>


          <div className={`p-4 w-full z-20 ${isExpanded[1] === 0 ? "opacity-100" : "opacity-75"}`}>
            {/* <p className="text-lg text-teal-600">Johannesstift Diakonie</p> */}
            <h2 className="text-headline text-4xl mb-4 text-gray-300">Watch-Til-Death (React/AWS)</h2>
            <div className="mt-auto mb-0">
              {["React", "Redux", "Javascript", "AWS"].map(tech => {
                return (
                  <span className="inline-block text-md text-gray-300 border-2 border-gray-400 p-2 mr-2" key={tech}>{tech}</span>
                )
              })}
              <img src={"img/icon_left.svg"} className={`h-8 float-right opacity-90 transition-transform duration-300 rotate-90 lg:rotate-0 ${isExpanded[1] === 0 ? "" : "-scale-x-100"} `} alt="Icon: Expand" />
            </div>
          </div>
        </div>

        <div className={`col-start-1 col-end-13 lg:col-end-7 h-full relative z-10 border-b-4 lg:border-r-4 dark:border-gray-950 cursor-pointer
        ${isExpanded[1] === 1 ? "bg-slate-800" : "bg-slate-900 hover:bg-slate-800"}`}
          onClick={() => toggleExpand(1)}>

          <div className={`p-4 w-full z-20 ${isExpanded[1] === 1 ? "opacity-100" : "opacity-75"}`}>

            <div>
              <h2 className="text-headline text-4xl mb-4 text-gray-300">Watch-Til-Death API</h2>


              <div className="mt-auto mb-0">
                {
                  ["NodeJS", "Express", "MongoDB", "AWS"].map(tech => {
                    return (
                      <span className="inline-block text-md text-gray-300 border-2 border-gray-400 p-2 mr-2" key={tech}>{tech}</span>
                    )
                  })}
                <img src={"img/icon_left.svg"} className={`h-8 float-right opacity-90 transition-transform duration-300 rotate-90 lg:rotate-0 ${isExpanded[1] === 1 ? "" : "-scale-x-100"} `} alt="Icon: Expand" />
              </div>


            </div>

          </div>
        </div>

        <div className={`col-start-1 col-end-13 lg:col-end-7 h-full relative z-10 lg:border-r-4 border-b-4 lg:border-b-0 dark:border-gray-950 cursor-pointer
        ${isExpanded[1] === 2 ? "bg-slate-800" : "bg-slate-900 hover:bg-slate-800"}`}
          onClick={() => toggleExpand(2)}>

          <div className={`p-4 w-full z-20 ${isExpanded[1] === 2 ? "opacity-100" : "opacity-75"}`}>

            <div>
              <h2 className="text-headline text-4xl mb-4 text-gray-300">Watch-Til-Death (Angular)</h2>


              <div className="mt-auto mb-0">
                {["Angular", "Angular Mateiral", "Javascript"].map(tech => {
                  return (
                    <span className="inline-block text-md text-gray-300 border-2 border-gray-400 p-2 mr-2" key={tech}>{tech}</span>
                  )
                })}
                <img src={"img/icon_left.svg"} className={`h-8 float-right opacity-90 transition-transform duration-300 rotate-90 lg:rotate-0 ${isExpanded[1] === 2 ? "" : "-scale-x-100"} `} alt="Icon: Expand" />
              </div>

            </div>

          </div>
        </div>


        <div className={`col-start-1 lg:col-start-7 col-end-13 row-start-2 lg:row-start-1 lg:row-end-4 h-full 
        bg-slate-800 border-b-4 lg:border-b-0 dark:border-gray-950  p-4 sm:p-8 lg:pb-4
                ${isExpanded[1] !== 0 ? "lg:-translate-x-full invisible lg:visible hidden lg:block" : null} 
                ${isExpanded[0] !== false && isExpanded[1] === 0 ? "delay-150" : null}
                transition-translate duration-150 ease-in-out	
                `}>



          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="mb-4 text-gray-400">
                The web application uses the MERN stack to provide users with access to
                information about different movies, directors, and genres. Users are able to sign up, update their profile, and
                create a list of their favorite movies.</p>
              <h3 className="font-bold py-2 text-teal-600">Deployment</h3>
              <p className="mb-4 text-gray-400">
                Deployed with Amazon Web Services using a custom VPC, redundant EC2 instances in different
                availability zones, S3 buckets for client side and file storage, and Lambda for serverless
                functions.
              </p>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <a href="https://github.com/lxnhard/movie_app-client" rel="noreferrer" target="_blank" title="View code on GitHub">
                <div className="inline-block flex items-center py-2 px-8 rounded-md bg-teal-800 hover:bg-opacity-80">
                  <img src="img/github_icon.svg" className="mr-2 h-5 inline-block" alt="Icon: Github Link" />
                  <span className=" text-gray-300 mx-auto">
                    View Code on Github
                  </span>
                </div>
              </a>

              <a href="https://watch-til-death.com" className="flex" rel="noreferrer" target="_blank" title="Open website">
                <div className="inline-block flex items-center py-2 px-8 rounded-md bg-indigo-800 hover:bg-opacity-80">
                  <img src="img/link_icon.svg" className="mr-2 h-5 inline-block" alt="Icon: Github Link" />
                  <span className=" text-gray-300 mx-auto">
                    Open website
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>


        <div className={`col-start-1 lg:col-start-7 col-end-13 row-start-3 lg:row-start-1 lg:row-end-4 h-full bg-slate-800 p-4 sm:p-8 lg:pb-4
                ${isExpanded[1] !== 1 ? "lg:-translate-x-full invisible lg:visible hidden lg:block" : null} 
                ${isExpanded[0] !== false && isExpanded[1] === 1 ? "delay-150" : null}
                transition-translate duration-150 ease-in-out	
                `}>

          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="mb-4 text-gray-400">
                REST API for the web application Watch-Til-Death with different endpoints for movie and user data.
                Built with NodeJS, Express, MongoDB and Mongoose. Implements JWT token-based user authentication.</p>

              <h3 className="font-bold py-2 text-teal-600">Deployment</h3>
              <p className="mb-4 text-gray-400">
                Deployed with Amazon Web Services. Three EC2 instances in an Auto Scaling group behind an Application
                Load Balancer and a separate database instance guarantee redundancy and scalability.
              </p>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <a href="https://github.com/lxnhard/movie_api" className="flex" rel="noreferrer" target="_blank" title="View code on GitHub">
                <div className="inline-block flex items-center py-2 px-8 rounded-md bg-teal-800 hover:bg-opacity-80">
                  <img src="img/github_icon.svg" className="mr-2 h-5 inline-block" alt="Icon: Github Link" />
                  <span className=" text-gray-300 mx-auto">
                    View Code on Github
                  </span>
                </div>
              </a>

              <a href="https://api.watch-til-death.com" className="flex" rel="noreferrer" target="_blank" title="Open website">
                <div className="inline-block flex items-center py-2 px-8 rounded-md bg-indigo-800 hover:bg-opacity-80">
                  <img src="img/link_icon.svg" className="mr-2 h-5 inline-block" alt="Icon: Github Link" />
                  <span className=" text-gray-300 mx-auto">
                    Open website
                  </span>
                </div>
              </a>
            </div>


          </div>
        </div>


        <div className={`col-start-1 lg:col-start-7 col-end-13 row-start-4 lg:row-start-1 lg:row-end-4 h-full bg-slate-800  p-4 sm:p-8 lg:pb-4
        dark:border-gray-950
                ${isExpanded[1] !== 2 ? "lg:-translate-x-full invisible lg:visible hidden lg:block" : null} 
                ${isExpanded[0] !== false && isExpanded[1] === 2 ? "delay-150" : null}
                transition-translate duration-150 ease-in-out	
                `}>

          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="mb-4 text-gray-400">
                Client-side for a single page web application providing authenticated users
                with information about different movies, built with Angular.</p>
              <h3 className="font-bold py-2 text-teal-600">Deployment</h3>
              <p className="mb-4 text-gray-400">
                The web application uses the MEAN stack to provide users with access to
                information about different movies, directors, and genres. Users are able to sign up, update their profile, and
                create a list of their favorite movies.
              </p>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <a href="https://github.com/lxnhard/movie_app-angular-client" className="flex" rel="noreferrer" target="_blank" title="View code on GitHub">
                <div className="inline-block flex items-center py-2 px-8 rounded-md bg-teal-800 hover:bg-opacity-80">
                  <img src="img/github_icon.svg" className="mr-2 h-5 inline-block" alt="Icon: Github Link" />
                  <span className=" text-gray-300 mx-auto">
                    View Code on Github
                  </span>
                </div>
              </a>

              <a href="https://lxnhard.github.io/movie_app-angular-client" className="flex" rel="noreferrer" target="_blank" title="Open website">
                <div className="inline-block flex items-center py-2 px-8 rounded-md bg-indigo-800 hover:bg-opacity-80">
                  <img src="img/link_icon.svg" className="mr-2 h-5 inline-block" alt="Icon: Github Link" />
                  <span className=" text-gray-300 mx-auto">
                    Open website
                  </span>
                </div>
              </a>
            </div>


          </div>
        </div>


      </div>



    </>
  );
};
