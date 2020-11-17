export const fetchResturants = () => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
        headers: {
            Authorization: 'Api-Key q3MNxtfep8Gt',
        },
    })
    .then(res => {
        if(!res.ok) {
            throw Error('Something is not right, try again later')
        }
        return res.json()
    })
    .then(res => console.log(res,'hello'))
}
