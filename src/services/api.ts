import axios from "axios";

export const getPopupData = () => axios({
  method: "GET",
  url: "http://localhost:8001/popup"
});
