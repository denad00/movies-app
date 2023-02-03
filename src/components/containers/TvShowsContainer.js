import { View, Heading, Center } from "native-base"
import TvShows from "../forms/TvShows"
import { useState } from 'react'
import { getTvShows } from '../services/api'
import TvShowsList from '../lists/TvShowsList'

const TvShowsContainer = () => {
    const [category, setCategory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [tvShowResults, setTvShowResults] = useState([])

    const fetchShows = () => {
        setIsLoading(true)

        getTvShows(category).then(
            tvShowResults => {
                setTvShowResults(tvShowResults)
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

    console.log('tv show', category)

    return(
    <View>
        <TvShows onSelectChange={handleSelectChange} getTvShows={fetchShows}/>
        <TvShowsList tvShowResults={tvShowResults} />
        <Center>
            <Heading size='md'>
                Please select a category
            </Heading>
        </Center>
    </View>
    )
}

export default TvShowsContainer