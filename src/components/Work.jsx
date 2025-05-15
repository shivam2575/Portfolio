import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/netflix_ss.png",
    title:
      "NetflixGPT - A movie recommendation app powered by GPT-3.5 Turbo API",
    tags: [
      "API",
      "MVC",
      "Development",
      "REACT",
      "FIREBASE",
      "TAILWIND",
      "AUTHENTICATION",
      "JEST",
      "REDUX",
      "AI",
    ],
    projectLink: "https://netflix-gpt-mauve-three.vercel.app/browse",
  },
  {
    imgSrc: "/images/youtube-ss.png",
    title: "YouTube Clone — Scalable video app with Live Chat",
    tags: ["API", "SPA", "REACT", "FIREBASE", "TAILWIND", "REDUX", "LIVE-CHAT"],
    projectLink: "https://clone-21e8d.web.app/",
  },
  {
    imgSrc: "/images/sincure_ss-min.png",
    title:
      "Sincure Foils — Responsive business website with real-time enquiry form",
    tags: ["REACT", "SPA", "FIREBASE", "TAILWIND"],
    projectLink: "https://www.sincure.in/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              className="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
