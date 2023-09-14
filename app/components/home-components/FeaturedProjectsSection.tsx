import FeaturedProjectCard from "./FeaturedProjectCard";

const FeaturedProjectsSection = () => {
  const projects = [
    {
      description:
        "Mansoura Runners is an amature running initiative started in Mansoura city in 2012",
      imageUrl: "/mansoura-runners-project.png",
      projectLink: "https://mansoura-runners-beta.vercel.app",
      title: "Mansoura Runners",
    },
    {
      description: "Expertise Insurance is Kuwaiti company for insurance",
      imageUrl: "/expertise-insurance-project.png",
      projectLink: "https://www.expertise-insurance.com",
      title: "Expertise Insurance",
    },
  ];

  return (
    <div className="md:container mx-auto py-16" id="featured-projects">
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 justify-center">
        {projects.map((project, index) => (
          <FeaturedProjectCard
            key={index}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
