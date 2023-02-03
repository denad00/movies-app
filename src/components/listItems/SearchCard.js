import { Box, VStack, Heading, HStack, Image, Text, Button } from "native-base"

const SearchCard = props => {
    const {image, title, popularity, releaseDate, overview, navigation } = props
    return(
        <Box>
            <HStack px={4} py={3}>
                <Box>
                    <Image source={{ uri: image}} alt={title} size="xl" maxWidth='100%'/>
                </Box>
                <VStack px={3} width='60%'>
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

export default SearchCard