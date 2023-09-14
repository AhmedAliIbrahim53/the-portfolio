const AboutMeSection = () => {
  const aboutMeText = `Experienced frontend developer with a background in React.js and backend contributions using Django Rest
Framework. I possess expertise in cross-platform app development with Flutter and Dart. Seeking a frontend
developer role where I can leverage my frontend expertise for creating exceptional user experiences. Actively learning
Vue.js and Node.js to expand my skill set, and open to learning any other framework. Eager to contribute versatility,
dedication, and a passion for elegant code to the development team.`;

  return (
    <div className="md:container mx-auto py-16 md:mr-6" id="about-me">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-6 text-justify">{aboutMeText}</p>
    </div>
  );
};

export default AboutMeSection;
