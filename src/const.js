export const isProduction = process.env.NODE_ENV === 'production';

const BASE_PATH = !isProduction
  ? '/'
  : '/eli-portfolio/';

export const PATHS = {
  HOME: `${BASE_PATH}`,
  PROJECTS_HUEMUL: `${BASE_PATH}projects/huemul`,
  PROJECTS_BIRDSONGS: `${BASE_PATH}projects/birdsongs`,
  PROJECTS_STITCHPIRATIONS: `${BASE_PATH}projects/stitchpirations`,
  PROJECTS_CATCUS: `${BASE_PATH}projects/catcus`,
}

export const HOME_SECTIONS = {
  HOME: 'home',
  PORTFOLIO: 'portfolio',
  ABOUT: 'about',
  CONTACT: '✉️', // 'contact',
}

export const linkTo = {
  home: PATHS.HOME,
  projectsHuemul: PATHS.PROJECTS_HUEMUL,
  projectsBirdsongs: PATHS.PROJECTS_BIRDSONGS,
  projectsStitchspirations: PATHS.PROJECTS_STITCHPIRATIONS,
  projectsCatcus: PATHS.PROJECTS_CATCUS,

  // Home Sections
  homeHome: `${PATHS.HOME}#${HOME_SECTIONS.HOME}`,
  homePortfolio: `${PATHS.HOME}#${HOME_SECTIONS.PORTFOLIO}`,
  homeAbout: `${PATHS.HOME}#${HOME_SECTIONS.ABOUT}`,
  homeContact: `${PATHS.HOME}#${HOME_SECTIONS.CONTACT}`,
};

export const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
export const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;