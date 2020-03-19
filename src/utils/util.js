
const fetchRequest = (api, method) => {
  return fetch(api, {
    method: method,
  })
    .then((response) => {
      return response.json().then( (res) => {
        return JSON.stringify(res);
      });
    });
};

module.exports = { fetchRequest };
