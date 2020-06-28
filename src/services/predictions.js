import axios from 'axios'

const baseUrl = 'http://meal-delivery.herokuapp.com/'

const getAll = (label) => {
    return axios.get(`${baseUrl}${label}`)
}

export default {getAll}