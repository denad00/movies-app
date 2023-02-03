import { Box, VStack, Heading, HStack, Image, Text, Button } from "native-base"

const SearchCard = props => {
    const {image, title, popularity, releaseDate } = props
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
                    <Button>View Details</Button>
                </VStack>
            </HStack>
        </Box>
    )
}

export default SearchCard