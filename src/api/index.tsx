import axios from "./axios";

export function login(params: any) {
  return axios({
    method: "post",
    url: `login`,
    data: params,
  });
}
