import axios from "axios";

const url = "http://localhost:5005";

export const createPost = async (title, description, code) => {
  console.log("Creating Post");
  await axios({
    method: "post",
    data: {title, description, code},
    url: `${url}/addpost`,
  });
};

export const createAccount = async (username, password) => {
  console.log("Creating Post");
  await axios({
    method: "post",
    data: {username, password},
    url: `${url}/register`,
  });
};

export const loginAccount = async (username, password) => {
  console.log("Creating Post");
  return await axios({
    method: "post",
    data: {username, password},
    url: `${url}/login`,
  });
};