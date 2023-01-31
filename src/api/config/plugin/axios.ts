import _axios, { Axios } from "axios";
import { interceptor } from "../middleware/interceptor";
import { endpoint } from "../env/env";

function axiosBuilder(): Axios {
  const axios = interceptor(
    _axios.create({
      baseURL: endpoint.baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  return axios;
}

export default axiosBuilder();
