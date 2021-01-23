import { getPopupData } from '../services/api';
export async function getPopup() {
  /**
   * Step 2: Instead of directly returning the popup definition fetch it from http://localhost:8001/popup
   */

  const response = await getPopupData();  
  return response.data;
}
