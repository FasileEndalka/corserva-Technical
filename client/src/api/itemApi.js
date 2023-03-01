import axios from 'axios';
const baseUrl = 'http://localhost:4000/sales';

export const getItem = async () => {
  return await axios
    .get(`${baseUrl}`)
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const updateItem = async (data, id) => {
  return await axios
    .put(`${baseUrl}/${id}`, data)
    .then((resp) => console.log(resp))
    .catch((error) => {
      throw error;
    });
};

export const createItem = async (data) => {
  return await axios
    .post(baseUrl, data)
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteItem = async (data) => {
  return await axios
    .delete(`${baseUrl}/${data.id}`)
    .then((resp) => console.log(resp))
    .catch((error) => {
      throw error;
    });
};
