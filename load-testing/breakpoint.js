import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
      { duration: '1m', target: 50 },
      { duration: '1m', target: 100 },
      { duration: '1m', target: 200 },
      { duration: '1m', target: 400 },
      { duration: '1m', target: 800 },
    ],
  };

  export default function () {
    let res = http.get('http://127.0.0.1:5500/index.html');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
  }