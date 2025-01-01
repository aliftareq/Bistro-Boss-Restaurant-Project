import { Parallax } from "react-parallax";

const Cover = ({ img, title, text }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[500px] md:h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[820px]">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-sm md:text-lg">{text}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
