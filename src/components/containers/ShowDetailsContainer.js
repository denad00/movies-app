import { Box, Center, Heading, VStack, Image, Text, View } from "native-base"

const ShowDetailsContainer = ({ navigation, route }) => {

    const {title, overview, image, popularity, releaseDate} = route.params
    return(
        <View>
            <Box width='100%'>
                <Center>
                    <VStack                     
                        alignItems='center'
                        justifyContent='center'
                        py={10}
                        px={10}
                    >
                        <Heading size='md' pb={10}>{title}</Heading>
                        <Image source={{ uri: image}} alt={title} size="2xl"/>
                        <Text py={5}>{overview}</Text>
                        <Text pt={2}>Popularity: {popularity} | Release Date: {releaseDate}</Text>
                    </VStack>
                </Center>
            </Box>
        </View>
    )
}

export default ShowDetailsContainer