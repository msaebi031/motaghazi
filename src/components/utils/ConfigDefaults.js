import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    // console.log(error);
    // toast.error("Error Server!", {
    //     position: "top-right",
    //     closeOnClick: true
    // });
    console.log("Error Server!");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
