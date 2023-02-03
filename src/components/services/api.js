import { BASE_URL, API_KEY } from '../config/api_config'

export const getMovies = async (category) => {
    const res = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`)

    const data = await res.json()

    console.log(data.results)

    return(data.results)

}

export const getTvShows = async ( category) => {
    const res = await fetch(`${BASE_URL}/tv/${category}?api_key=${API_KEY}`)

    const data = await res.json()

    console.log(data.results)

    return(data.results)

}

export const getSearch = async (category, search) => {
    const res = await fetch(`${BASE_URL}/search/${category}?api_key=${API_KEY}&query=${search}`)

    const data = await res.json()

    console.log(data.results)

    return(data.results)

}

export const getMovie = async (id) => {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)

    const data = await res.json()

    console.log(data.results)

    return(data.results)

}
