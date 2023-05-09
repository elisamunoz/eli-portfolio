import { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { PATHS } from 'const';

const useLink = (iniValue = false): any => {
  const history = useHistory();

  const gotTo = {
    home: useCallback(() => history.push(PATHS.HOME), [history]),
    projectCountries: useCallback(() => history.push(PATHS.PROJECTS_COUNTRIES), [history]),
    projectHuemul: useCallback(() => history.push(PATHS.PROJECTS_HUEMUL), [history]),
    projectBirdsongs: useCallback(() => history.push(PATHS.PROJECTS_BIRDSONGS), [history]),
    projectStichpirations: useCallback(() => history.push(PATHS.PROJECTS_STITCHPIRATIONS), [history]),
    projectCatcus: useCallback(() => history.push(PATHS.PROJECTS_CATCUS), [history]),
    projectPortfolio: useCallback(() => history.push(PATHS.PROJECTS_PORTFOLIO), [history]),
    projectCuachCuach: useCallback(() => history.push(PATHS.PROJECTS_CuachCuach), [history]),
  }

  return useMemo(() =>
    [gotTo],
    [gotTo],
  )
}

export { useLink };
