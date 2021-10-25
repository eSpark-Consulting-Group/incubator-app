import axios from 'axios';
// import {delete_user_booking_Api} from './WebServices';

const createResource = (api, data, token) => {
  console.log(data, 'responseresponseresponseresponse');
  return new Promise((resolve, reject) => {
    axios
      .post(`${api}`, data, {headers: {Authorization: token}})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getResource = (api, token) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api}`, {headers: {Authorization: token}})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getResourceById = (api, data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api}`, data, {headers: {Authorization: token}})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateResource = (api, data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${api}`, data, {headers: {Authorization: token}})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteResource = (api, token) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      url: `${api}`,
      headers: {Authorization: token},
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// const deleteAppointment = (data, token) => {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'delete',
//       url: `${delete_user_booking_Api}?bookingId=${data.bookingId}`,
//       // url: `${api}`,
//       // data,
//       headers: {Authorization: token},
//     })
//       .then((response) => {
//         console.log('deleteResource -> response', response);
//         resolve(response);
//       })
//       .catch((error) => {
//         console.log('deleteResource -> error', error);
//         reject(error);
//       });
//   });
// };

export {
  createResource,
  getResource,
  getResourceById,
  updateResource,
  deleteResource,
//   deleteAppointment,
};
