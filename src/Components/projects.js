import React, { Component } from "react";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";

class Experience extends Component {
  render() {
    if (!this.props.data) return null;

    const web = this.props.data.projects.web?.map((web) => (
      <motion.div
        key={web.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg p-6"
      >
        <div className="grid place-items-center w-full">
          <Carousel
            slideInterval={15000}
            className="rounded-xl overflow-hidden shadow-md w-full max-w-xl h-80" // fixed height
            leftControl={
              <button className="bg-white/80 text-black p-2 rounded-full hover:bg-white shadow-md">
                ❮
              </button>
            }
            rightControl={
              <button className="bg-white/80 text-black p-2 rounded-full hover:bg-white shadow-md">
                ❯
              </button>
            }
            indicators={true} // shows dots below
          >
            {web.imgUrl.map((imgUrl) => (
              <div
                key={imgUrl}
                className="flex flex-col items-center justify-center h-full"
              >
                <img
                  src={`images/${imgUrl}`}
                  alt={web.title}
                  className="object-contain w-full h-full"
                />
                {/* Optional caption */}
                {/* <p className='mt-2 text-sm text-white'>{web.title}</p> */}
              </div>
            ))}
          </Carousel>
          <ul className="flex flex-wrap justify-center mt-4 gap-2">
            {web.projectView.map((view) => {
              const [label, link] = view.split("|");
              return (
                <a
                  key={view}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-400/20 to-blue-400/10 hover:from-blue-300 hover:to-blue-500 hover:text-white text-blue-300 rounded-md text-xs sm:text-sm font-semibold transition-all duration-300"
                >
                  {label}
                </a>
              );
            })}
          </ul>
        </div>

        <div className="mt-6 space-y-2">
          <h2 className="text-xl font-bold text-white">{web.title}</h2>
          <h3 className="text-sm text-teal-300 italic">{web.status}</h3>
          <p className="text-sm text-slate-300">{web.projectDesc}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {web.techStack.map((techStack) => (
              <span
                key={techStack}
                className="bg-teal-500/10 hover:bg-teal-400/20 text-teal-300 px-3 py-1 rounded-full text-xs font-medium transition"
              >
                {techStack}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ));

    const workProject = this.props.data.projects.work?.map((project) => (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        key={project.title}
        className="group relative rounded-xl overflow-hidden shadow-lg bg-slate-800 hover:shadow-xl transition duration-300"
      >
        {/* Project Logo */}
        <img
          src={`images/${project.logo}`}
          alt={project.title}
          className="object-contain w-full h-48 p-4 transition-transform duration-300 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
          <h3 className="text-lg font-bold mb-1">{project.title}</h3>
          <p className="text-sm">{project.shortDesc}</p>
          <p className="mt-2 text-sm italic text-teal-300">{project.role}</p>
        </div>
      </a>
    ));

    return (
      <div id="projects" className="scroll-mt-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 px-5 sm:px-20 py-16 font-quicksand text-white min-h-screen">
          <h2 className="mb-8 text-3xl font-extrabold text-center text-white tracking-wide">
            Personal Projects
          </h2>
          <div className="space-y-12 max-w-5xl mx-auto">{web}</div>
        </div>

        <div className="px-5 sm:px-20 py-16 bg-gradient-to-b from-slate-900 to-slate-800 font-quicksand text-white">
          <h2 className="mb-8 text-3xl font-extrabold text-center text-white tracking-wide">
            Work Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workProject}
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
