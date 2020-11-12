export const regExpUser = (value) => (
    /^(?=[a-zA-Z0-9._]{5,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(value)
)

export const regExpEmail = (value) => (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
)   