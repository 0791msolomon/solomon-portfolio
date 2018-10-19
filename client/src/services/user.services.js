const axios = require("axios");

let baseUrl = "/users";

export const getAllUsers = () => {
  let config = {
    method: "GET"
  };
  return axios(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

export const createUser = data => {
  let config = {
    data: data,
    method: "POST"
  };
  return axios(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

const responseSuccessHandler = response => {
  return response.data;
};

const responseErrorHandler = error => {
  console.log(error);
  return Promise.reject(error);
};
