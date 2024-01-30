import { DECREASE, INCREASE, INCREASE_BY_VALUE, RESET } from "./constans";
console.log({ DECREASE, INCREASE, INCREASE_BY_VALUE, RESET })

const decrease = () => ({
    type: 'DECREASE'
})

const increase = () => ({
    type: 'INCREASE'
})

const reset = () => ({
    type: 'RESET'
})

const increaseByValue = (value) => ({
    type: 'INCREASE_BY_VALUE',
    payload: value,
})

export { decrease, increase, increaseByValue, reset };

