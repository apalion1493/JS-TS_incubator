import {sum} from "./01";
import {mult} from "./01";

let a:number;
let b:number;
let c:number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
})

test.skip('sum should be correct', () => {
    //action
    let result1 = sum(a, b);
    let result2 = sum(a, c);
    let result3 = sum(b, c);

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(4)
    expect(result3).toBe(5)
})

test.skip('multiply should be correct', () => {

    //action
    let result1 = mult(a, b);
    let result2 = mult(a, c);
    let result3 = mult(b, c);

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(3)
    expect(result3).toBe(6)
})
