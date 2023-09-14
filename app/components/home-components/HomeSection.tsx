interface HomeSectionProps {
  title: string;
  contentList: [];
}

const HomeSection = ({ title, contentList }: HomeSectionProps) => {
  const _contentList = contentList;

  return (
    <div className="md:container mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {_contentList.map((skill, index) => (
          <div key={index} className="bg-gray-500 p-4 rounded shadow">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
