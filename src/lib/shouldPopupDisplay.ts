import { getCookie, getIfUserIsOnMobile, getUserLangauage } from '../helpers/index';
import { ENGLISH_LANG_KEY, COUNTRY_NAME } from '../constants';
import { getUserCountry } from '../services/api';

export async function shouldPopupDisplay () {
  const isFirstVisit = !Boolean(getCookie('wisepopsvisited'));
  const isUserOnMobile = getIfUserIsOnMobile();  
  const userSpeaksEnglish = getUserLangauage().includes(ENGLISH_LANG_KEY);
  const userCountry = await getUserCountry();
  const isUserInCatchmentCountry = userCountry === COUNTRY_NAME;
  return isFirstVisit || isUserOnMobile || userSpeaksEnglish || isUserInCatchmentCountry;
}