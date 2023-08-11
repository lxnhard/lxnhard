import { useEffect } from "react";


export const GeschaeftsberichtJSD = () => {

  useEffect(() => {
    window.scrollTo({ top: 0 });
  })

  return (
    <>
      <section className="grid grid-cols-12 p-4 sm:p-8 pt-32 sm:pt-32 ">
        <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8" >
          <h1 className="font-headline text-6xl text-tealsat-700 dark:text-teal-600 mb-5">Case study</h1>
          <a href="https://johannesstift-diakonie.de/" title="Johannesstift Diakonie" target="_blank" rel="noreferrer"><img src="img/johannesstift_diakonie-gb22.png" alt="" /></a>

          <div className="bg-slate-800/95 p-4 sm:p-8">
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


        <div className="col-start-1 col-span-12 lg:col-start-3 lg:col-span-8">


          <p className="mt-8 mb-4 dark:text-gray-400">
            Annual report landingpage for <a href="https://gb22.johannesstift-diakonie.de/" title="Johannesstift Diakonie" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline visited:text-indigo-500">Johannesstift Diakonie</a>. A Single Page Application written with React, utilizing various animations, complex transitions and self-hosted videos.</p>
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
          <div className="mt-16">
            <a href="https://gb22.johannesstift-diakonie.de/" className="flex" rel="noreferrer" target="_blank" title="Open website">
              <div className="inline-flex items-center justify-center py-2 px-8 rounded-md bg-indigo-600 dark:bg-indigo-700 text-gray-100 dark:text-gray-300 hover:bg-opacity-80">
                <svg className="mr-2 h-7 inline-block stroke-current" fill="none" height="24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" />
                </svg>
                <span className="text-2xl mx-auto">
                  Open website
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

    </>
  );
};
