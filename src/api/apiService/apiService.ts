import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getAuthToken } from "@dynamic-labs/sdk-react-core";

import ApiServiceAbstract from "./ApiServiceAbstract";

//TODO: update later
const URL_SIGNIN = "auth/signin";
const URL_SIGNUP = "auth/signup";

export interface RequestService extends AxiosInstance {}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const dynamicJwtToken = getAuthToken();

  const newConfig = {
    ...config,
    headers: {
      Authorization: `Bearer ${dynamicJwtToken || null}`,
    },
  };
  return config.url === URL_SIGNIN || config.url === URL_SIGNUP
    ? config
    : newConfig;
});

export class ApiService extends ApiServiceAbstract {
  constructor(private requestService: RequestService) {
    super();
  }

  get = async <R = void>(
    url: string,
    query?: Record<string, string | number | boolean>
  ): Promise<R> => {
    const res = await this.requestService.get<R>(url, { params: query });
    return res.data;
  };

  post = async <R = void, B = unknown>(
    url: string,
    body?: B,
    query?: Record<string, string | number | boolean>
  ): Promise<R> => {
    const res = await this.requestService.post<R>(url, body, { params: query });
    return res.data;
  };

  put = async <R = void, B = unknown>(
    url: string,
    body?: B,
    query?: Record<string, string | number | boolean>
  ): Promise<R> => {
    const res = await this.requestService.put<R>(url, body, { params: query });
    return res.data;
  };

  delete = async <R = void>(
    url: string,
    query?: Record<string, string | number | boolean>
  ): Promise<R> => {
    const res = await this.requestService.delete<R>(url, { params: query });
    return res.data;
  };
}

export default new ApiService(axiosInstance);
