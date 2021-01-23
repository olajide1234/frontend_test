import axios from "axios";

export const getPopupData = () => axios({
  method: "GET",
  url: "http://localhost:8001/popup"
});

export const editPopupData = (popup) => axios({
  method: "PATCH",
  url: "http://localhost:8001/popup",
  data: popup
});
