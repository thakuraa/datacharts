import axios from 'axios'

const baseUrl = 'http://meal-delivery.herokuapp.com/'

const getAll = (label) => {
    return axios.get(`${baseUrl}${label}`)
}

const postAll = (data) => {
    return axios.post(`${baseUrl}predict/test`,data)
}

export default {getAll, postAll,baseUrl}