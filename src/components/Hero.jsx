import { ButtonPrimary, ButtonOutline } from "./Button";
const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div className="flex flex-col justify-center gap-3">
          <div className="flex">
            <figure className="mx-2 img-box w-9 h-9 rounded-lg">
              <img
                src="/images/profile_pic.jpg"
                width={40}
                height={40}
                alt="hero-image"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-500 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 sm:max-w-[20ch]">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="/Shivam_APR_2025_ONE_COL.pdf"
              label="Donwload Resume"
              icon="download"
              download="shivam_kumar.pdf"
            />{" "}
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/hero.png"
              width={656}
              height={800}
              alt="Shivam kumar"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
