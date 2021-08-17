import { requestConfig } from "./base";
// eslint-disable-next-line
export function baseFun(request: any): any {
  return (data: requestConfig) => {
    return request(data);
  };
}
