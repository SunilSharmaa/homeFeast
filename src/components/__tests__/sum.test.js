import sum from "../sum";

test("sum of two numbers", ()=> {
    let result = sum(5,4);

    expect(result).toBe(9);
})