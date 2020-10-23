const isProduction = process.env.NODE_ENV === 'production';

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
  CONTACT: 'contact',
  ABOUT: 'about',
  PORTFOLIO: 'portfolio',
  PROJECTS: 'projects',
}

export var linkTo = {
  home: () => PATHS.HOME,
  projectsHuemul: () => PATHS.PROJECTS_HUEMUL,
  projectsBirdsongs: () => PATHS.PROJECTS_BIRDSONGS,
  projectsStitchspirations: () => PATHS.PROJECTS_STITCHPIRATIONS,
  projectsCatcus: () => PATHS.PROJECTS_CATCUS,
};
