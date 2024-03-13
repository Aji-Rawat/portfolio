import ProjectCard from "../main/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] mb-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="flex flex-wrap">
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="/myportfolio.png"
            title="My Portfolio Website"
            description="A portfolio website that I made using  NextJS,TailwindCSS,Typescript,Framer-Motion,Vercel."
            githubLink="https://github.com/Aji-Rawat"
          />
          <ProjectCard
            src="/Compiler.png"
            title="Online Code Compiler"
            description="A web-application using MERN stack for code execution in the browser, that instantly displays the output."
            githubLink="https://github.com/Aji-Rawat/online-code.git"
          />
          <ProjectCard
            src="/AttendanceSystem.png"
            title="Attendance System"
            description="Attendance system using Face-Recognition library of Python that can identify the students and mark their attendance in real time."
            githubLink="https://github.com/Aji-Rawat/Attendance-System.git"
          />
          <ProjectCard
            src="/neetEstimator.png"
            title="Prediction model NEET"
            description="Estimation model for NEET UG exam preparation, utilizing NLP to analyze previous year's question papers."
            githubLink="https://github.com/Aji-Rawat/NEET-prediction-model.git"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
