// Helper functions to translate content based on locale
import { getTranslations } from 'next-intl/server';

/**
 * Gets translated navigation labels based on the current locale
 */
export async function getTranslatedNavLabels() {
  const t = await getTranslations();

  return {
    home: t('navbar.home', { defaultValue: 'Home' }),
    blog: t('navbar.blog', { defaultValue: 'Blog' }),
  };
}

/**
 * Gets translated contact labels based on the current locale
 */
export async function getTranslatedContactLabels() {
  const t = await getTranslations();

  return {
    emailName: t('contact.social.email.name', { defaultValue: 'Send Email' }),
    githubName: t('contact.social.github.name', { defaultValue: 'GitHub' }),
    linkedinName: t('contact.social.linkedin.name', { defaultValue: 'LinkedIn' }),
    xName: t('contact.social.x.name', { defaultValue: 'X' }),
  };
}

/**
 * Gets translated section titles based on the current locale
 */
export async function getTranslatedSectionTitles() {
  const t = await getTranslations();

  return {
    heroHi: (name: string) => t('hero.hi', { name, defaultValue: `Hi, I'm {name}` }),
    heroDescription: t('hero.description', { defaultValue: 'Full-Stack Developer & Agentic AI Enthusiast. I build responsive web applications and integrate AI-driven solutions to solve real-world problems.' }),
    aboutTitle: t('about.title', { defaultValue: 'About' }),
    workTitle: t('work.title', { defaultValue: 'Work Experience' }),
    educationTitle: t('education.title', { defaultValue: 'Education' }),
    skillsTitle: t('skills.title', { defaultValue: 'Skills' }),
    favouriteToolsTitle: t('favouriteTools.title', { defaultValue: 'Favourite Tools' }),
    contactTitle: t('contact.title', { defaultValue: 'Contact' }),
    contactLetsConnect: t('contact.letsConnect', { defaultValue: "Let's Connect" }),
    contactEmailLink: t('contact.emailLink', { defaultValue: 'email' }),
    contactLinkedinLink: t('contact.linkedinLink', { defaultValue: 'LinkedIn' }),
    hackathonsTitle: t('hackathons.title', { defaultValue: 'Hackathons' }),
    hackathonsTagline: t('hackathons.tagline', { defaultValue: 'Building Under Pressure' }),
    hackathonsDescription: t('hackathons.description', { defaultValue: 'Hackathons are where innovation meets adrenaline. Collaborating with talented individuals to build solutions in limited time has sharpened my problem-solving skills and taught me the value of rapid prototyping.' }),
    projectsTitle: t('projects.title', { defaultValue: 'Projects' }),
    projectsTagline: t('projects.tagline', { defaultValue: 'Featured Work' }),
    projectsDescription: t('projects.description', { defaultValue: 'A selection of projects showcasing my skills in web development, from interactive applications to responsive websites.' }),
    workPresent: t('work.present', { defaultValue: 'Present' }),
  };
}
