import { button } from "@material-tailwind/react"


const Skills = () => {
    const SkillsButtons = [
        {
            language: "HTML",
        },
        {
            language: "CSS",
        },
        {
            language: "JavaScript",
        },
        {
            language: "PHP",
        },
        {
            language: "Mysql",
        },
        {
            language: "React.js",
        },
        {
            language: "Node.js",
        },
        {
            language: "MongoDB",
        },
        {
            language: "Git",
        },
        {
            language: "Github",
        },
    ]
  return (
    <div className="flex flex-row gap-2">
      <h1 className="font-bold text-2xl absolute right-1 bottom-10">Skills</h1>
      {SkillsButtons.map((skill, index) => (
        <button key={index} className="bg-orange-200 text-black rounded-lg p-2 text-1xl">{skill.language}</button>
      ))}
    </div>
  )
}

export default Skills
