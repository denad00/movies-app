import { Center, Container } from "native-base"
import { useState } from "react"
import Search from '../forms/Search'

const SearchContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState(null)

    const handleInputChange = search => (
        setSearch(search)
    )

    console.log('search', search)

    return(
        <Container>
            <Center px={4}>
                <Search onInputChange={handleInputChange}/>
            </Center>
        </Container>
    )
}

export default SearchContainer