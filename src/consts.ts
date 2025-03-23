import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Nipun's Blog",
  DESCRIPTION: "Keeping it simple",
  EMAIL: "blog@nipunh.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    ICON: "logo-github",
    HREF: "https://github.com/nipun24",
  },
  {
    NAME: "X (formerly Twitter)",
    ICON: "logo-twitter",
    HREF: "https://x.com/focus_breathing",
  },

  {
    NAME: "Instagram",
    ICON: "logo-instagram",
    HREF: "https://instagram.com/focus.breathing",
  },
  {
    NAME: "LinkedIn",
    ICON: "logo-linkedin",
    HREF: "https://linkedin.com/in/nipunhaldar",
  },
];
