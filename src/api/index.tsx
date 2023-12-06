import axios from "./axios";

export function login(params: any) {
  return axios({
    method: "post",
    url: `login`,
    data: params,
  });
}

export function add(params: any) {
  return axios({
    method: "post",
    url: `division`,
    data: params,
  });
}

export function getData() {
  return axios({
    method: "get",
    url: `division`,
  });
}

export function edit(params: any, id: any) {
  return axios({
    method: "put",
    url: `division/${id}`,
    data: params,
  });
}

export function deleteData(id: any) {
  return axios({
    method: "delete",
    url: `division/${id}`,
  });
}
