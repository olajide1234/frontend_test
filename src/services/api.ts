import axios from 'axios';
import { BASE_API } from '../constants';

export const getPopupData = () => axios({
  method: 'GET',
  url: `${BASE_API}/popup`
});

export const editPopupData = (popup) => axios({
  method: 'PATCH',
  url: `${BASE_API}/popup`,
  data: popup
});
