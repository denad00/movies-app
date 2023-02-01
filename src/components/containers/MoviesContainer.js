import { Text, View } from "native-base"
import Movies from "../forms/Movies"

const MoviesContainer = () => {
    return(
    <View>
        <Movies />
        <Text>
            Movies!
        </Text>
    </View>
    )
}

export default MoviesContainer