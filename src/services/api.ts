import axios from 'axios';
import { BASE_API, CHECK_COUNTRY_API } from '../constants';

export const getPopupData = () => axios({
  method: 'GET',
  url: `${BASE_API}/popup`
});

export const editPopupData = (popup: popup) => axios({
  method: 'PATCH',
  url: `${BASE_API}/popup`,
  data: popup
});

export const getUserCountry = async () => {
    const response = await axios({
      method: 'GET',
      url: `${CHECK_COUNTRY_API}`,
  });
  return response.data.geoplugin_countryName;
};
