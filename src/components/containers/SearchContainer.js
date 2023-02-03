import { Center, Container, Heading, View } from "native-base"
import { useState } from "react"
import Search from '../forms/Search'
import { getSearch } from "../services/api"
import SearchList from '../lists/SearchList'

const SearchContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState(null)
    const [category, setCategory] = useState(null)

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
        <Container>
            <Search onInputChange={handleInputChange} onSelectChange={handleSelectChange} getSearch={fetchSearch} />
            <SearchList searchResults={searchResults}/>
            <Center px={4}>
                <Heading>Please input Search Fields</Heading>
            </Center>
        </Container>
    )
}

export default SearchContainer