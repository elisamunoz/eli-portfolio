export const isProduction = process.env.NODE_ENV === 'production';

const BASE_PATH = !isProduction
  ? '/'
  : '/eli-portfolio/';

export const PATHS = {
  HOME: `${BASE_PATH}`,
  PROJECTS_COUNTRIES: `${BASE_PATH}projects/countries`,
  PROJECTS_HUEMUL: `${BASE_PATH}projects/huemul`,
  PROJECTS_BIRDSONGS: `${BASE_PATH}projects/birdsongs`,
  PROJECTS_STITCHPIRATIONS: `${BASE_PATH}projects/stitchpirations`,
  PROJECTS_CATCUS: `${BASE_PATH}projects/catcus`,
  PROJECTS_MOVIES: `${BASE_PATH}projects/movies`,
  PROJECTS_POKEDEX: `${BASE_PATH}projects/pokedex`,
}

export const HOME_SECTIONS = {
  HOME: 'home',
  PORTFOLIO: 'portfolio',
  ABOUT: 'about',
  CONTACT: '✉️', // 'contact',
}

export const linkTo = {
  home: PATHS.HOME,
  projectsCountries: PATHS.PROJECTS_COUNTRIES,
  projectsHuemul: PATHS.PROJECTS_HUEMUL,
  projectsBirdsongs: PATHS.PROJECTS_BIRDSONGS,
  projectsStitchspirations: PATHS.PROJECTS_STITCHPIRATIONS,
  projectsCatcus: PATHS.PROJECTS_CATCUS,
  projectsMovies: PATHS.PROJECTS_MOVIES,
  projectsPokedex: PATHS.PROJECTS_POKEDEX,

  // Home Sections
  homeHome: `${PATHS.HOME}#${HOME_SECTIONS.HOME}`,
  homePortfolio: `${PATHS.HOME}#${HOME_SECTIONS.PORTFOLIO}`,
  homeAbout: `${PATHS.HOME}#${HOME_SECTIONS.ABOUT}`,
  homeContact: `${PATHS.HOME}#${HOME_SECTIONS.CONTACT}`,
};

export const EMAILJS_SERVICE_ID = 'gmail';
export const EMAILJS_TEMPLATE_ID = 'template_2v9s12t';
export const EMAILJS_USER_ID = 'user_MKo97gaxfyq2vnV35VE4g';