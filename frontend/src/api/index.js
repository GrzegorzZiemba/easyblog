import axios from "axios";

const url = "http://localhost:5005";

export const loginAccount = async (title, description) => {
  console.log("Creating Post");
  console.log(title, description);
  await axios({
    method: "post",
    data: {title, description},
    url: `${url}/addpost`,
  });
};