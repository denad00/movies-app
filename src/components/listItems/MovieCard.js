import { Box, VStack, Heading, HStack, Image, Text, Button } from "native-base"

const MovieCard = props => {
    const {image, title, popularity, releaseDate, overview, navigation } = props
    return(
        <Box>
            <HStack >
                <Box>
                    <Image source={{ uri: image}} alt={title} size="xl"/>
                </Box>
                <VStack >
                    <Heading size='xs'>{title}</Heading>
                    <Text>Popularity: {popularity}</Text>
                    <Text>Release Date: {releaseDate}</Text>
                    <Button onPress={() => {
                        navigation.navigate('View Details',{
                            title,
                            popularity,
                            overview,
                            image,
                            releaseDate
                        } )
                    }}>View Details</Button>
                </VStack>
            </HStack>
        </Box>
    )
}

export default MovieCard