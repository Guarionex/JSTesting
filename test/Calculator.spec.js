import {add} from '../src/Calculator.js'

describe("Calculator", () => {
   it("Should add two numbers", () => {
       const result = add(2, 3);

       expect(result).toBe(5);
   }) ;
});
