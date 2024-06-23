module.exports = {
  siteTitle: 'Dinesh Chhantyal | Software Developer | Content Creator',
  siteDescription:
    'Dinesh Chhantyal is a Student Web Developer at the University of Louisiana at Monroe, who loves learning new things and helping tech beginners.'
  ,
  siteKeywords:
    'Dinesh Chhantyal, Dinesh, Chhantyal, dineshchhantyal, dineshchhantyal.33, dinesh.chhantyal, dinesh.chhantyal1, software developer, software engineer, content freelancer, web developer, java developer, padhao, cheerpal, university of louisiana at monroe, ulm, clamphook, pulchowk, pulchowk campus, ioe, institute of engineering, nepal, nepali, travel planner, padhao, web developer, javascript, northeastern university, northeastern, northeastern university, next.js,northeastern university boston, northeastern university ms in cs, northeastern university ms in cs review, northeastern university ms in cs cost, northeastern university ms in cs fees, computer science, international student, pulchowk dropout, pulchowk dropout to northeastern, pulchowk dropout to northeastern university, pulchowk dropout to northeastern university boston, pulchowk dropout to northeastern university ms in cs, freshman, junior, junior, senior, ulm, ulm cs, ulm computer science, ulm computer science review, ulm computer science cost, ulm computer science fees, ulm computer science ranking, nepal to usa, nep, software engineer jobs, software engineer course, software engineer salary, software engineer resume, software engineer intern, software engineer interview, software engineer vs software developer, software engineer degree, software engineer degree online, software engineer degree cost, software engineer degree salary, software engineer degree requirements, software engineer degree plan, software engineer degree reddit, software engineer degree worth it, software engineer degree near me, software engineer degree texas, software engineer degree uk, software engineer degree australia, software engineer degree canada, software engineer degree california, typescript developer, data, data science, machine learning, data analyst, data analyst jobs, data analyst salary, data analyst resume, data analyst intern, data analyst interview, data analyst vs data scientist, data analyst degree, data analyst degree online, data analyst degree cost, data analyst degree salary, data analyst degree requirements, data analyst degree plan, data analyst degree reddit, data analyst degree worth it, data analyst degree near me, data analyst degree texas, degree in california, data analyst degree in nepal',
  siteUrl: process.env.NODE_ENV === 'development' ? 'localhost:8080' : 'https://dineshchhantyal.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-EJNHD3PE06',
  googleVerification: '',
  googleAdsAccountID: '296-940-9239',
  name: 'Dinesh Chhantyal',
  location: 'Monroe, LA',
  email: 'myagdichhantyal@gmail.com',
  github: 'https://github.com/dineshchhantyal',
  twitterHandle: '@dineshchhantya',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dineshchhantyal',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dineshchhantyal/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/dineshchhantyal',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dinesh.chhantyal1/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dineshchhantya',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    }
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
