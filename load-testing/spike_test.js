import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
      { duration: '10s', target: 200 },
      { duration: '1m', target: 200 },
      { duration: '10s', target: 0 },
    ],
  };

  export default function () {
    let res = http.get('http://127.0.0.1:5500/index.html');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
  }