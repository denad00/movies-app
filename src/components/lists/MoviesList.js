import { FlatList } from "native-base"
import MovieCard from "../listItems/MovieCard"

const MoviesList = ({ navigation, movieResults }) => {
    const imageURL = "https://image.tmdb.org/t/p/w500"

    return(
        <FlatList 
            data={movieResults}
            renderItem={({ item }) => (
                <MovieCard 
                    image={imageURL+item.poster_path}
                    title={item.title}
                    popularity={item.popularity}
                    releaseDate={item.release_date}
                    overview={item.overview}
                    navigation={navigation}
                    id={item.id}
                />
            )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={true}
        />
    )

}

export default MoviesList