import axios from "axios";

const url = "http://localhost:5005";

export const loginAccount = (title, description) => {
  console.log("Creating Post");
  console.log(title, description);
  return axios({
    method: "post",
    data: title, description,
    url: `${url}/addpost`,
  });
};