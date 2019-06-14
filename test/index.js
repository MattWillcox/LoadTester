import http from 'k6/http';

export const options = {
  discardResponseBodies: true,
};

export default function() {
  const params = {
    headers: {
      Authorization: `Bearer ${__ENV.OAUTH_TOKEN}`,
    },
  };
  http.get(__ENV.URL, params);
}
