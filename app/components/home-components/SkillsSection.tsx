const SkillsSection = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "HTML5",
    "CSS3",
    "TypeScript",
    "Express.js",
    "MongoDB",
    "Git",
    "GraphQL",
    "Responsive Web Design",
    "RESTful APIs",
    "SQL",
    "SASS/SCSS",
    "Webpack",
    "Next.js",
  ];

  return (
    <div className="md:container mx-auto py-16 " id="skills">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap px-4 md:border-l-2">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-500 p-2 rounded-full m-2">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
