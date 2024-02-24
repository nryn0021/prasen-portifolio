import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "prasenify",
      projectLink: "https://spotify-clone-prasen.netlify.app",
      projectDescription:
        "Created a Spotify replica with Node.js and React, featuring user authentication, playlist management, and seamless song playback. Leveraged RESTful APIs for seamless integration with Spotify's database. Demonstrated expertise in full-stack development, and UI/UX design.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "RESTful APIs",
        "Authentication",
        "Spotify API",
        "Full-stack Development",
        "UI/UX Design",
        "Playlist Management",
        "Song Playback",
        "Integration",
      ],
      projectExternalLinks: {
        github: "https://github.com/nryn0021/prasenify-spotify",
        externalLink: "",
      },
    },
    {
      image: "/project2.png",
      projectName: "PNChat",
      projectLink: "https://github.com/nryn0021/PNChat",
      projectDescription:
        "Developed a real-time chat application using Node.js, HTML, CSS, and JavaScript. Implemented multi-user chat functionality with message notifications with intuitive UI for seamless communication.Demonstrated proficiency in full-stack development and user-centric design.",
      projectTech: [
        "Node.js",
        "HTML",
        "CSS",
        "JavaScript",
        "Real-Time Communication",
        "WebSocket",
        "Full-stack Development",
        "User-centric Design",
        "Multi-user Chat",
        "Message Notifications",
      ],
      projectExternalLinks: {
        github: "https://github.com/nryn0021/PNChat",
        externalLink: "",
      },
    },
    {
      image: "/project3.png",
      projectName: "flappy-game",
      projectLink: "https://github.com/nryn0021/flappy-game",
      projectDescription:
        "Built a Flappy Bird game replica using Unity and C#, showcasing game development and programming skills. Implemented core mechanics like player controls, obstacles, and scoring systems, emphasizing problem-solving and creativity in gameplay design. Demonstrated ability to create engaging user experiences.",
      projectTech: [
        "Unity",
        "C#",
        "Game Development",
        "Programming",
        "Flappy Bird",
        "Gameplay Design",
        "Player Controls",
        "Obstacles",
        "Scoring Systems",
        "User Experience",
      ],
      projectExternalLinks: {
        github: "https://github.com/nryn0021/flappy-game",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
