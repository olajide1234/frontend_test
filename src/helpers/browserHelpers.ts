export function getIfUserIsOnMobile () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

export function getUserLangauage() {
  // @ts-ignore
  return navigator.language || navigator.userLanguage;
};