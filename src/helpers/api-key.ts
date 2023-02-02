const API_KEY_NAME = 'weather-api-key-bb4ec273';

export const getAPIKey = () => {
  return localStorage.getItem(API_KEY_NAME);
};

export const setAPIKey = () => {
  const input = window.prompt('Pleasse add your API KEY:');
  if (input) {
    localStorage.setItem(API_KEY_NAME, String(input));
    location.reload();
  }
};
