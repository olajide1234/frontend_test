import { getCookie, getIfUserIsOnMobile, getUserLangauage } from '../helpers';
import { ENGLISH_LANG_KEY, FRANCE_CODE } from '../constants';
import { getUserCountry } from '../services/api';

export async function shouldPopupDisplay () {
  const isFirstVisit = !Boolean(getCookie('wisepopsvisited'));
  const isUserOnMobile = getIfUserIsOnMobile();  
  const userSpeaksEnglish = getUserLangauage().includes(ENGLISH_LANG_KEY);
  const userCountry = await getUserCountry();
  const isUserCountryFrance = userCountry === FRANCE_CODE;
  return isFirstVisit || isUserOnMobile || userSpeaksEnglish || isUserCountryFrance;
}