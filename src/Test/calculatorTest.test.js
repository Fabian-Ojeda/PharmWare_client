import Calculator from "../Tools/calculator";

describe('Suma de numeros', () => {
    test('4+5 debe dar 9', ()=>{
        let myCalculator = new Calculator();
        const result = myCalculator.suma(8,5)
        expect(result).toBe(13)
    })
})