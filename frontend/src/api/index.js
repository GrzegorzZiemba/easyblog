import axios from "axios";

const url = "http://localhost:5005";

export const loginAccount = (data) => {
  console.log("Creating Post");
  console.log(data);
  return axios({
    method: "post",
    data: data,
    url: `${url}/addpost`,
  });
};