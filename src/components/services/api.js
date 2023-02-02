import axios from 'axios'
import { BASE_URL_MOVIE, API_KEY } from '../config/api_config'

export const getMovies = async movieType => {
    const url = BASE_URL_MOVIE
    const api = API_KEY
       
    axios.get(`${url}/${movieType}/${api}`).then(res => { console.log(res)}).catch(err => {console.log(err)
    })

}