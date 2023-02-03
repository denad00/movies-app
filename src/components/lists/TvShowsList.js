import { FlatList } from "native-base"
import TvShowCard from "../listItems/TvShowCard"

const TvShowsList = ({tvShowResults }) => {
    const imageURL = "https://image.tmdb.org/t/p/w500"

    return(
        <FlatList 
            data={tvShowResults}
            renderItem={({ item }) => (
                <TvShowCard 
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

export default TvShowsList