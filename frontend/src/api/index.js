import axios from "axios";

const url = "http://localhost:5005";

export const createPost = async (title, description, code) => {
  try{
    console.log("Creating Post");
    await axios({
      method: "post",
      data: {title, description, code},
      url: `${url}/addpost`,
    });
  }
  catch(e){
    console.log("Error")
  }
 
};

export const createAccount = async (username, password) => {
  try{
  console.log("Creating Post");
  await axios({
    method: "post",
    data: {username, password},
    url: `${url}/register`,
  });
}
catch(e){
  console.log("Error")
}
};

export const loginAccount = async (username, password) => {
  try{
  console.log("Creating Post");
  return await axios({
    method: "post",
    data: {username, password},
    url: `${url}/login`,
  });}
  catch(e){
    console.log("Error")
  }
};