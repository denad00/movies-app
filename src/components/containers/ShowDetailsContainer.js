import { Box, Center, Heading, VStack, Image, Text, View } from "native-base"

const ShowDetailsContainer = ({ navigation, route }) => {

    const {title, overview, image, popularity, releaseDate} = route.params
    return(
        <View>
            <Box width='100%'>
                <Center>
                    <VStack>
                        <Image source={{ uri: image}} alt={title} size="xl"/>
                        <Heading size='md'>{title}</Heading>
                        <Text>{overview}</Text>
                        <Text>Popularity: {popularity} | Release Date: {releaseDate}</Text>
                    </VStack>
                </Center>
            </Box>
        </View>
    )
}

export default ShowDetailsContainer