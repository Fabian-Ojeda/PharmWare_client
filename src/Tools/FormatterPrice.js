const FormatterPrice = (price) => {
    let aux = 0
    let cadTemp = ''
    for (let i = (price.length-1); i >= 0; i--) {
        if (aux === 3){
            cadTemp='.'+cadTemp
            aux=0
        }
            cadTemp=price.charAt(i)+cadTemp
            aux++
    }
    return cadTemp
}

export default FormatterPrice