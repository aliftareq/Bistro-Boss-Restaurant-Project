const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-sm xl:text-xl text-yellow-600 mb-2">
        --- {subHeading} ---
      </p>
      <h3 className="text-lg md:text-2xl xl:text-4xl uppercase border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
