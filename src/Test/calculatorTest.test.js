import Calculator from "../Tools/calculator";

describe('calculo de una ganancia', () => {
    test('Si un producto vale 1000 y se desea ganarle el 50% el resultado debe dar 1500', ()=>{
        let myCalculator = new Calculator();
        const result = myCalculator.ganancia(1000,50)
        expect(result).toBe(1500)
    })
})