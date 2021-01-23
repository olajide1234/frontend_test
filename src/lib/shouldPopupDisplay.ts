import { getCookie } from '../helpers/cookieHelpers';

export function shouldPopupDisplay () {
  const isFirstVisit = !Boolean(getCookie('wisepopsvisited'));
  const isUserOnMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  return isFirstVisit || isUserOnMobile;
}