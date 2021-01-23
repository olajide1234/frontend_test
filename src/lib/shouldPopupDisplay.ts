import { getCookie, getIfUserIsOnMobile, getUserLangauage } from '../helpers';
import { ENGLISH_LANG_KEY } from '../constants';

export function shouldPopupDisplay () {
  const isFirstVisit = !Boolean(getCookie('wisepopsvisited'));
  const isUserOnMobile = getIfUserIsOnMobile();  
  const userSpeaksEnglish = getUserLangauage().includes(ENGLISH_LANG_KEY);
  return isFirstVisit || isUserOnMobile || userSpeaksEnglish;
}