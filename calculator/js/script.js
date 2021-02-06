const getResult = () => document.getElementById('result').innerHTML

const setResult = value => document.getElementById('result').innerHTML = value

const add = key => getResult() != '0' || isNaN(key) ? setResult(getResult() + key) : setResult(key)

const calculate = () => setResult(eval(getResult()))

const  clean = () => setResult(0)
