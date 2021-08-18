import { equal } from "assert";
import { request } from "../.tmp/index.js";

describe('Babel usage suite', () => {
  it('should add numbers correctly', () => {
    console.log(request)
    equal(5, 5);
  });
});