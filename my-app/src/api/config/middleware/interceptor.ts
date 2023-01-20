import { AxiosInstance, AxiosResponse } from "axios";
import chalk from "chalk";

function response(response: any): AxiosResponse {
  console.log(chalk.bold.green("[SUCCESS] "), response.data);
  return response;
}

function error(error: any): AxiosResponse {
  console.log(chalk.bold.red("[ERROR] "), error);
  return error;
}

export function interceptor(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.response.use(response, error);
  return axiosInstance;
}
