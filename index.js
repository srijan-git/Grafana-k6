import http from "k6/http";
import { check, sleep } from "k6";

export default function () {
  http.get("http://test.k6.io");
  sleep(1);
}
