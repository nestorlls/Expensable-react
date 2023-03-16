import { BASE_URI } from '../utils/constants';

export const getAllPlanets = async (url) => {
  const response = await fetch(url || BASE_URI + 'planets');
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorMessage = response.text();
    throw Error(errorMessage);
  }
};
