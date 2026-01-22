import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Cover = ({ img, title, text, link }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt={title || "cover"}
      strength={-200}
    >
      <section className="relative">
        <div className="hero h-[520px] md:h-[720px]">
          {/* Premium overlay (better than a flat opacity layer) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="hero-content text-center text-white">
            <div className="max-w-3xl px-4">
              {/* Small top badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/90">
                  Bistro Boss
                </p>
              </div>

              {/* Title */}
              <h1 className="mt-7 text-4xl md:text-6xl font-extrabold uppercase tracking-[0.18em]">
                <span className="text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
                  {title}
                </span>
              </h1>

              {/* Gold divider */}
              <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

              {/* Text */}
              <p className="mx-auto mt-6 max-w-2x text-sm md:text-lg leading-[1.9] tracking-wide text-white/90 italic">
                “{text}”
              </p>

              {/* Optional CTA (section becomes more attractive) */}
              {link && (
                <div className="mt-10 flex justify-center">
                  <Link
                    to={link}
                    className="px-8 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-400 to-yellow-500
                     text-black shadow-md hover:from-amber-500 hover:to-yellow-600 hover:shadow-lg transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                  >
                    Explore Menu
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Cover;
