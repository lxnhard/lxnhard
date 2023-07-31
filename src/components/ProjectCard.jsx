
export const ProjectCard = ({ imageUrl, title, techstack, githubUrl, liveUrl, children }) => {


  return (
    <>
      <div className="w-full bg-gray-900 dark:bg-gray-800 shadow-lg overflow-hidden rounded-lg	">
        {/* image */}
        <img src={imageUrl} alt={title} />

        {/* content */}
        <div className="p-8">

          <h2 className="font-headline text-6xl mb-8 dark:text-teal-500">{title}
          </h2>
          <div className="mb-12">
            {techstack.map(tech => {
              return (
                <span className="text-gray-300 dark:text-gray-400 border-2 dark:border-gray-400 font-semibold p-2 mr-2" key={tech}>{tech}</span>
              )
            })}
          </div>

          {children}
          <div className="pt-8">

            {githubUrl ? <span className="inline-block mr-4">
              <div className="flex flex-row items-center">
                <a href={githubUrl} rel="noreferrer" target="_blank" title="View code on GitHub">
                  <img src="img/github_icon.svg" className="mr-2 h-6 inline-block" alt="Icon: Github" />
                  View Code on GitHub</a>
              </div>
            </span> : ""}

            <span className="inline-block">
              <div className="flex flex-row items-center">
                <a href={liveUrl} className="h-full" rel="noreferrer" target="_blank" title="Open website">
                  <img src="img/link_icon.svg" className="mr-2 h-6 inline-block" alt="Icon: External Link" />
                  Open website
                </a>
              </div>
            </span>

          </div>
        </div>
      </div>

    </>
  );
};
