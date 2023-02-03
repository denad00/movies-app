import { Center, Container, Heading, View } from "native-base"
import { useState, useEffect } from "react"
import Search from '../forms/Search'
import { getSearch } from "../services/api"
import SearchList from '../lists/SearchList'
import Loading from "../layout/Loading"

const SearchContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState(null)
    const [category, setCategory] = useState(null)

    useEffect(() => {
        fetchSearch()
    }, [category])

    const fetchSearch = () => {
        setIsLoading(true)

        getSearch(category, search).then(
            searchResults => {
                setSearchResults(searchResults)
                setIsLoading(false)
            },
            error => {
                alert('Error', `something went wrong ${error}`)
            }
        )
    }

    const handleInputChange = search => (
        setSearch(search)
    )

    const handleSelectChange = category => {
        setCategory(category)
    }

    console.log('input', search)
    console.log('category', category)

    return(
        <Container maxWidth='100%'>
            <Search onInputChange={handleInputChange} onSelectChange={handleSelectChange} getSearch={fetchSearch} />
            {isLoading ? <Loading /> : <SearchList searchResults={searchResults} navigation={navigation}/>}
            <Center>
                <Heading px={10}>Please input search fields</Heading>
            </Center>
        </Container>
    )
}

export default SearchContainer