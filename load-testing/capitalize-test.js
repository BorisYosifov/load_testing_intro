import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    quickBurst: {
      executor: 'constant-vus',
      vus: 20,
      duration: '15s',
    },
    steadyLoad: {
      executor: 'ramping-vus',
      startVUs: 5,
      stages: [
        { duration: '10s', target: 20 },
        { duration: '20s', target: 20 },
        { duration: '10s', target: 0 },
      ],
    },
  },
};

export default function () {
  const url = 'http://localhost:8080/capitalize';
  const payload = JSON.stringify({ text: 'hello' });
  const params = { headers: { 'Content-Type': 'application/json' } };

  http.post(url, payload, params);
  sleep(1);
}
