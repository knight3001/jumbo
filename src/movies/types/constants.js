// @flow

export const postInit = (data: ?FormData): * => ({
  method: "POST",
  mode: "cors",
  body: data
});

export const putInit = (form_data: ?FormData): * => ({
  method: "PUT",
  mode: "cors",
  body: form_data
});

export const getInit = {
  method: "GET",
  mode: "cors",
};

export const deleteInit = (form_data: ?FormData): * => ({
  method: "DELETE",
  mode: "cors",
  body: form_data
});
