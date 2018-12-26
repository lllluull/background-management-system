import axios from 'axios'
const baseUrl = `https://easy-mock.com/mock/5c222ed14e21841210a7011d/mockapi`
export const get = (rout) => {
    let url = `${baseUrl}/${rout}`
    return axios.get(url)
}
