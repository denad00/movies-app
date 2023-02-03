import { View, Heading, Center } from "native-base"
import Movies from "../forms/Movies"
import { useEffect, useState } from 'react'
import { getMovies } from '../services/api'
import MoviesList from "../lists/MoviesList"
import Loading from "../layout/Loading"

const MoviesContainer = ({ navigation }) => {
    const [category, setCategory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [movieResults, setMovieResults] = useState([])

    // useEffect(() => {
    //     getMovies(category).then(
    //         movieResults => {
    //             setMovieResults(movieResults)
    //             setIsLoading(false)
    //         },
    //         error => {
    //             alert('Error', `something went wrong ${error}`)
    //         }
    //     )
    // }, [category])

    const fetchMovies = () => {
        setIsLoading(true)

        getMovies(category).then(
            movieResults => {
                setMovieResults(movieResults)
                setIsLoading(false)
            },
            error => {
                alert('Error', `something went wrong ${error}`)
            }
        )
    }

    const handleSelectChange = category => (
        setCategory(category)
    )

    console.log('movies', category)

    return(
    <View>
        <Movies onSelectChange={handleSelectChange} getMovies={fetchMovies} />
        {isLoading ? <Loading /> : <MoviesList movieResults={movieResults} navigation={navigation}/>}
    </View>
    )
}

export default MoviesContainer