import { requestConfig } from "./base";
export function baseFun(request: any): any {
  return (data: requestConfig) => {
    return request(data);
  };
}
