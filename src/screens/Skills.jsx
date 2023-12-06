import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Meta from "../components/Meta";

const mySkills = [
  { type: "language", skill: "HTML 5", per: 90 },
  { type: "language", skill: "CSS", per: 80 },
  { type: "language", skill: "JavaScript", per: 90 },
  { type: "language", skill: "TypeScript", per: 90 },
  { type: "language", skill: "Node", per: 80 },
  { type: "library", skill: "React", per: 90 },
  { type: "library", skill: "Redux-toolkit", per: 80 },
  { type: "library", skill: "React-redux", per: 80 },
  { type: "framework", skill: "Express", per: 90 },
  { type: "database", skill: "Mongodb", per: 80 },
  { type: "framework", skill: "Mongoose", per: 90 },
  { type: "framework", skill: "Bootstrap", per: 80 },
  { type: "framework", skill: "Tailwind CSS", per: 80 },
  { type: "framework", skill: "Next", per: 60 },
];

const Skills = () => {
  return (
    <div className="skill-back-image">
      <Meta title="Skills" />
      <SkillsContent className="min-h-screen flex flex-col space-y-5" />
    </div>
  );
};

export default Skills;

const SkillsContent = ({ className }) => {

  const [progresser, setProgresser] = useState(false)

  useEffect(() => {
    setTimeout(() => {
        setProgresser(true)
    }, 800)
  }, [progresser])

  return (
    <div className={className}>
      <Navbar activeLink="Skills" />
      <p className="text-white text-3xl font-bold text-center">My Skills</p>
      <div className="lg:px-40 px-10 space-y-7 pb-3">
        <div>
            <p className="text-3xl text-white mb-4 font-semibold md:text-start text-center">Languages :</p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-48 gap-y-5">
                {
                    mySkills.map((elem) => {
                        if (elem.type === 'language') {
                            return <ProgressBar skill={elem.skill} percent={progresser ? elem.per : 0} />
                        }
                    })
                }
            </div>
        </div>
        <div>
            <p className="text-3xl text-white mb-4 font-semibold md:text-start text-center">Libraries / Frameworks :</p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-48 gap-y-5">
                {
                    mySkills.map((elem) => {
                        if (elem.type !== 'language') {
                            return <ProgressBar skill={elem.skill} percent={progresser ? elem.per : 0} />
                        }
                    })
                }
            </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ skill, percent }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xl text-white">{skill}</p>
      <div class="w-[17rem] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class="bg-blue-400 h-2.5 rounded-full transition-effect"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};
