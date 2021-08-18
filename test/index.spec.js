import { equal } from "assert";
import { a } from "../dist/index.js";
import { add } from "../dist/utils/a";

describe('Babel usage suite', () => {
  it('should add numbers correctly', () => {
    console.log(a)
    console.log(add())
    equal(5, 5);
  });
});