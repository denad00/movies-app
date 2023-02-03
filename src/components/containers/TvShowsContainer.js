import { View, Heading, Center } from "native-base"
import TvShows from "../forms/TvShows"
import { useState } from 'react'
import { getTvShows } from '../services/api'
import TvShowsList from '../lists/TvShowsList'
import Loading from '../layout/Loading'

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
        {isLoading ? <Loading /> :         <TvShowsList tvShowResults={tvShowResults} />}
    </View>
    )
}

export default TvShowsContainer