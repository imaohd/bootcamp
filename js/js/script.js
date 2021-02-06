const sayMe = (num) => { num > 0 ? alert("Este numero es positivo", num) : alert("numero negativo", num)}

const hervirAgua = () => {
  for(let temperatura = 0; temperatura <= 100; temperatura++) temperatura === 100 ? alert('el agua esta hervida') : console.log(`la temperatura ${temperatura}`)
}