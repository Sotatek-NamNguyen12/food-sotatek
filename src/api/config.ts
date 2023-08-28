import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 10000,
});

axiosConfig.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function request<TRequest, TResponse>(
  method: string,
  url: string,
  requestData?: TRequest
): Promise<TResponse> {
  const config: AxiosRequestConfig = {
    method,
    url,
    data: requestData,
  };

  const response: AxiosResponse<TResponse> = await axiosConfig(config);
  return response.data;
}
