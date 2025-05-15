import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/shivam2575",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivam-kumar-05a37a134/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/shivam2575",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shivam_____kumar?igsh=ZzNkeTc2bjQwb2Uy",
  },
  {
    label: "Leetcode",
    href: "https://leetcode.com/u/shivam2575/",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:sk2575@gmail.com"
              label="Start Project"
              icon="chevron_right"
              className="reveal-up"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      target="_blank"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <a href="/" className="logo reveal-up">
            <img src="/images/logo.svg" alt="Logo" width={40} height={40} />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">Shivam Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
