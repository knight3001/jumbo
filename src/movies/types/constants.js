// @flow

export const postInit = (data: ?FormData): * => ({
  method: "POST",
  mode: "cors",
  credentials: "include",
  body: data
});

export const putInit = (form_data: ?FormData): * => ({
  method: "PUT",
  mode: "cors",
  credentials: "include",
  body: form_data
});

export const getInit = {
  method: "GET",
  mode: "cors",
  credentials: "include"
};

export const deleteInit = (form_data: ?FormData): * => ({
  method: "DELETE",
  mode: "cors",
  credentials: "include",
  body: form_data
});
