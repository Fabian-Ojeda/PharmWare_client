import consumeAPI from "../Tools/consumeAPI";

describe('Prueba de funcionamiento del consumo de recursos externos', () => {
    test('El valor de nombre en la posición cero del array consultado debe ser Leanne Graham', async () => {
        const dataIn = await consumeAPI('http://jsonplaceholder.typicode.com/users')
        const result = dataIn[0].name
        expect(result).toBe('Leanne Graham')
    })
})