import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";

function Experience({ data }) {
  const [showAll, setShowAll] = useState(false);

  if (!data) return null;
  const webProjects = data.projects.web || [];
  const projectsToShow = showAll ? webProjects : webProjects.slice(0, 4);

  return (
    <div id="projects" className="scroll-mt-8">
      {/* === Personal Projects Section === */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 px-5 sm:px-20 py-16 font-quicksand text-white">
        <h2 className="mb-8 text-3xl font-extrabold text-center">
          Personal Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsToShow.map((web) => (
            <motion.div
              key={web.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 hover:bg-slate-800/60 rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Carousel */}
              <Carousel slideInterval={10000} className="h-56">
                {web.imgUrl.map((img) => (
                  <img
                    key={img}
                    src={`images/${img}`}
                    className="object-cover w-full h-full"
                    alt={web.title}
                  />
                ))}
              </Carousel>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-grow">
                <h3 className="text-lg font-bold">{web.title}</h3>
                <p className="text-teal-400 text-sm italic">{web.status}</p>
                <p className="text-sm text-slate-300 line-clamp-3">
                  {web.projectDesc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {web.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-teal-500/10 px-3 py-1 rounded-full text-teal-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto pt-3 flex flex-wrap gap-2">
                  {web.projectView.map((view) => {
                    const [label, link] = view.split("|");
                    return (
                      <a
                        key={view}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs bg-blue-500/10 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md transition"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {webProjects.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </section>

      {/* === Work Projects Section === */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 px-5 sm:px-20 py-16">
        <h2 className="text-3xl font-extrabold text-center text-white mb-10">
          Work Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.projects.work?.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition"
            >
              {/* Image / Logo */}
              <div className="w-full h-48 bg-slate-700 flex items-center justify-center">
                <img
                  src={`images/${project.logo}`}
                  alt={project.title}
                  className="object-contain max-h-full p-4"
                />
              </div>

              {/* Text Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-teal-300 text-sm italic">{project.role}</p>
                <p className="text-slate-300 text-sm mt-2">
                  {project.shortDesc}
                </p>

                <div className="mt-4">
                  <a
                    href={project.url}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;
