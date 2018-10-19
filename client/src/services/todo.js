const axios = require("axios");

const baseUrl = "/todos";

export const getTodos = limit => {
  let url = `${baseUrl}/search/?amount=${limit}`;
  let config = {
    url: url,
    method: "GET"
  };
  return axios(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

export const createTodo = data => {
  let config = {
    data: data,
    method: "POST"
  };
  return axios(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};
export const updateTodo = data => {
  let url = `${baseUrl}/${data._id}`;
  let config = {
    data: data,
    url: url,
    method: "PUT"
  };
  return axios(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

export const findById = id => {
  let url = `${baseUrl}/:${id}`;
  let config = {
    url: url,
    method: "GET"
  };
  return axios(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

export const deleteTodo = id => {
  let url = `${baseUrl}/${id}`;
  let config = {
    url: url,
    method: "DELETE"
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
