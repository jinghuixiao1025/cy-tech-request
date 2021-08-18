import { AxiosRequestConfig, AxiosPromise } from "axios";

export interface ConfigObj extends AxiosRequestConfig {
  q?: string;
  isFormData?: boolean;
}
export type Request = (configObj: ConfigObj) => AxiosPromise;
