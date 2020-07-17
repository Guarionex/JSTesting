import {add, subtract, convertToText, addObject, getLastArrayElement} from '../src/Calculator.js'

describe("Calculator", () => {
   it("Should add two numbers", () => {
       const result = add(2, 3);

       expect(result).toBe(5);
   });

   it('Should subtract two numbers', () => {
       //Arrange
       const x = 5;
       const y = 3;

       //Act
       const result = subtract(x, y);

       //Assert
       expect(result).toBe(2);
   });

   it("Should add three numbers", () => {
       const x = 7;
       const y = 2;
       const z = 9;

       const result = add(x, y, z);

       expect(result).toBe(18);
   });

   it("Should convert 4 to four", () => {
      const number = 4;

      const result = convertToText(number);

      expect(result).toBe("four");
   });

   it("Should convert 6 to six", () => {
      const number = 6;

      const result = convertToText(number);

      expect(result).toBe("six");
   });

   it("should add all numbers in object", () => {
       const setOfNumbers = {
           x: 3,
           y: 6,
           z: 10
       };

       const result = addObject(setOfNumbers);

       expect(result).toBe(19);
   });

   it('should return last number of array', () => {
       const setOfNumbers = [2, 5, 2, 4];

       const result = getLastArrayElement(setOfNumbers);

       expect(result).toBe(4);
   });
});
