import { Text, View } from "native-base"
import Movies from "../forms/Movies"
import { useState } from 'react'
import { getInformation } from '../services/api'

const MoviesContainer = () => {
    const [category, setCategory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [movieResults, setMovieResults] = useState([])
    const [searchType, setSearchType] = useState('movie')

    const fetchMovies = () => {
        setIsLoading(true)

        getInformation(searchType, category).then(
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

        <Text>
            Movies!
        </Text>
    </View>
    )
}

export default MoviesContainer