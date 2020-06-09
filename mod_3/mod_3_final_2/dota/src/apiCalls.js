export const fetchInfo = () => {
    return fetch('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json')
    .then(res => res.json())
    .then(err => console.log(err))
}