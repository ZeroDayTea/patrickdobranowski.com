import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jefferson Ding', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Jefferson's Personal Website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm",
  name: 'Jefferson Ding',
  subtitle: ['Student', 'Innovator', 'Developer'],
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    day: '04',
    month: 'Apr.',
    title: 'Hello World!',
    cat: 'General',
    sub: 'My First Project',
    text: 'This website is the first project every recorded here!',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    day: '04',
    month: 'Apr.',
    title: 'Hello World!',
    cat: 'General',
    sub: 'My First Project',
    text: 'This website is the first project every recorded here!',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    day: '04',
    month: 'Apr.',
    title: 'Hello World!',
    cat: 'General',
    sub: 'My First Project',
    text: 'This website is the first project every recorded here!',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    day: '04',
    month: 'Apr.',
    title: 'Hello World!',
    cat: 'General',
    sub: 'My First Project',
    text: 'This website is the first project every recorded here!',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    day: '04',
    month: 'Apr.',
    title: 'Hello World!',
    cat: 'General',
    sub: 'My First Project',
    text: 'This website is the first project every recorded here!',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    day: '04',
    month: 'Apr.',
    title: 'Hello World!',
    cat: 'General',
    sub: 'My First Project',
    text: 'This website is the first project every recorded here!',
    url: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact Me',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
