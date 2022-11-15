const Calculator=require('./calculator');

describe('Test Addition ',() => {
  test('should add 1 + 2 res 3', () => { 
   expect( Calculator.add(1,2)).toEqual(3);
   });
});

describe('Test Subtraction ',() => {
  test('should subtract 2 -1  res 1', () => { 
   expect( Calculator.subtract(2,1)).toEqual(1);
   });

})
describe('Test Division',() => {
  test('should divide 4 by 2 res 2', () => { 
   expect( Calculator.divide(4,2)).toEqual(2);
   });
  test('should result division by zero', () => { 
   expect( () => Calculator.divide(4,0)).toThrow();
   });
})
describe('Test Multiplication',() => {
  test('should multiply 4 by 2 res 8', () => { 
   expect( Calculator.multiply(4,2)).toEqual(8);
   });
})