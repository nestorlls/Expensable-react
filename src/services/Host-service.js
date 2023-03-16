import { BASE_URI } from '../utils/constants';

export const getAllHosts = async () => {
  const response = await fetch(BASE_URI + 'people');
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorMessage = response.text();
    throw Error(errorMessage);
  }
};
