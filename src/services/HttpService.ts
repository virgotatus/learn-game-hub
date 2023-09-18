import { AxiosRequestConfig } from "axios"
import apiClient from "./api-client"

export interface Response<T> {
  results: T[]
}

class Service {
  endpoint: string
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  get<T>(params?: AxiosRequestConfig) {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {signal: controller.signal, ...params})
    return {request, cancel: () => controller.abort()};
  }
}

export default Service;