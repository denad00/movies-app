import { useState } from 'react'
import { VStack, FormControl, HStack, Icon, Input, Select, CheckIcon, Button } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

import { Text, View } from "native-base"

const Search = () => {
    const [searchData, setSearchData] = useState({})
    const [errors, setErrors] = useState({})
    const [searchType, setSearchType] = useState("")

    return (
        <VStack space={2} width='100%' py={5}>
            <FormControl isRequired px={10}>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                <Input
                    placeholder='i.e. James Bond'
                    variant='filled'
                    bg='gray.200'
                    pc={3}
                    width='100%'
                    InputLeftElement={
                        <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search'/>}/>
                    }
                />
                <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
                <HStack
                    alignItems='center'
                    justifyItems='center'
                >
                    <Select
                        selectedValue={searchType} 
                        minWidth={200} 
                        mr={5}
                        accessibilityLabel="Select Search Type"
                        onValueChange={searchValue => setSearchType(searchValue)}
                        _selectedItem={{
                            bg: "#009999",
                            endIcon: <CheckIcon size={4} />,
                        }}
                    >
                        <Select.Item label="multi" value="multi"/>
                        <Select.Item label="movie" value="movie"/>
                    </Select>
                    <Button
                        startIcon={<Icon as={Ionicons} name='ios-search' />}
                        >
                    Search
                    </Button>
                </HStack>
            </FormControl>
        </VStack>
        // <View>
        //     <Text>Search Results</Text>
        // </View>
        // <VStack space={2} width='100%' py={1}>
        //     <FormControl isRequired>

        //     </FormControl>
             
        // </VStack>
    )
}

export default Search