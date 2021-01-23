import { getCookie } from '../helpers/cookieHelpers';

export function shouldPopupDisplay () {
  const isFirstVisit = !Boolean(getCookie('wisepopsvisited'));
  return isFirstVisit;
}