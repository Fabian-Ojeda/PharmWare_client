import FormatterPrice from "../Tools/FormatterPrice";

describe('Formateo de un valor', () => {
    test('1548965 debe quedar como 1.548.965', ()=>{
        const result = FormatterPrice('1548965')
        expect(result).toBe('1.548.965')
    })
})
