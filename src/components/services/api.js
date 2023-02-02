import { BASE_URL, API_KEY } from '../config/api_config'

// const getMovies =  async () => {
//     const res = await fetch(`http://`)
//       const data = res.json()
//   console.log(data)
//   }

export const getInformation = async (searchType, category) => {
    const res = await fetch(`${BASE_URL}/${searchType}/${category}?api_key=${API_KEY}`)

    const data = res.json()

    return(data)
    console.log(data)
}
