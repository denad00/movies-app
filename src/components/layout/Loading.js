import { Center, HStack, Heading, Spinner } from 'native-base'

const Loading = () => (
    <Center>
        <HStack>
            <Spinner accessibilityLabel='Loading results'/>
            <Heading px={2}>Loading</Heading>
        </HStack>
    </Center>
)

export default Loading