import FormatterPrice from "../Tools/FormatterPrice";

describe('Formateo de un valor', () => {
    test('7984651321564878 debe quedar como 7.984.651.321.564.878', ()=>{
        const result = FormatterPrice('7984651321564878')
        expect(result).toBe('7.984.651.321.564.878')
    })
})
