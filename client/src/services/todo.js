const axios = require("axios");

const baseUrl = "/todos";

export const getTodos = () => {
  let config = {
    method: "GET"
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
