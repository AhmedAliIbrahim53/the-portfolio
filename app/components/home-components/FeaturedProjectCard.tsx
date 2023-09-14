interface FeaturedProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
}

const FeaturedProjectCard = ({
  title,
  description,
  imageUrl,
  projectLink,
}: FeaturedProjectCardProps) => {
  return (
    <div className={`rounded-3xl relative`}>
      <img
        className="w-full rounded-3xl object-cover object-center"
        src={imageUrl}
        alt={title}
      />
      <div className=" flex flex-col justify-center items-center text-white absolute top-0 bottom-0 left-0 right-0 p-2 rounded-3xl  bg-black bg-opacity-60">
        <h2 className=" text-xl font-bold mb-3">{title}</h2>
        <p className="mb-2">{description}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-orange-600 border p-2 rounded"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
