import Link from "next/link";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <div className="md:container md:mx-auto flex flex-col-reverse md:flex-row md:justify-between md:items-center px-4 py-20">
      <div className="text-start">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">
          Elevate your projects with innovative solutions crafted with precision
          and passion.
        </p>
        <Link
          href="/#featured-projects"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          View Featured Projects
        </Link>
      </div>
      <div className="pb-10 md:pb-0">
        <Image
          src={"/design.png"}
          alt={"home design image"}
          width={900}
          height={800}
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
