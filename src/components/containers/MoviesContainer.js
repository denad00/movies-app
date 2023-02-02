import { Text, View } from "native-base"
import Movies from "../forms/Movies"
import { useState } from 'react'
import { getMovies } from '../services/api'

const MoviesContainer = () => {
    const [moviesResults, setMoviesResults] = useState([])
    const [movies, setMovies] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovies = () => {
        setIsLoading(true)

        getMovies(moviesResults).then(
            movies => {
                setMoviesResults(movies)
                setIsLoading(false)
            },
            error => {
                alert('Error', `something went wrong ${error}`)
            }
        )
    }

    const handleSelectChange = movies => (
        setMovies(movies)
    )

    console.log('movies', movies)

    return(
    <View>
        <Movies onSelectChange={handleSelectChange} fetchMovies={fetchMovies}/>
        <Text>
            Movies!
        </Text>
    </View>
    )
}

export default MoviesContainer