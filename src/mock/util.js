const responseBody = {
  result: null
};

export const builder = (data, code = 0, headers = {}) => {
  responseBody.result = data;
  if (code !== undefined && code !== 0) {
    responseBody._status = code;
  }
  if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
    responseBody._headers = headers;
  }
  return responseBody;
};

export const getQueryParameters = options => {
  const url = options.url;
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};

export const getBody = options => {
  return options.body && JSON.parse(options.body);
};
