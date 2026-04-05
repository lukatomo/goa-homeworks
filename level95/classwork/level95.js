const generateName = () => {
    return <p>Luka</p>
}

const generateSurname = () => {
    return <p>Tomoshevski</p>
}

const generateBoolean  = () => {
    return Math.random() > 0.5 ? generateName : generateSurname
}
