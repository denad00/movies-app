import { FlatList } from "native-base"
import SearchCard from "../listItems/SearchCard"

const SearchList = ({ searchResults }) => {
    const imageURL = "https://image.tmdb.org/t/p/w500"

    return(
        <FlatList 
            data={searchResults}
            renderItem={({ item }) => (
                <SearchCard 
                    image={imageURL+item.poster_path}
                    title={item.title}
                    popularity={item.popularity}
                    releaseDate={item.release_date}

                />
            )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={true}
        />
    )

}

export default SearchList