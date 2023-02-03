import { useState } from 'react'
import { VStack, FormControl, HStack, Icon, Input, Select, CheckIcon, Button, Container } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

const Search = props => {
    const { getSearch, onInputChange, onSelectChange } = props
    const [searchData, setSearchData] = useState({})
    const [searchType, setSearchType] = useState("")

    const onSubmit = () => {
        console.log('form submitted', searchType,searchData )
        getSearch(searchType, searchData)
    }

    return (
        <VStack space={2} width='100%' py={2} px={8}>
            <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                <Input
                    placeholder='i.e. James Bond'
                    variant='filled'
                    bg='gray.200'
                    pc={3}
                    width='125%'
                    InputLeftElement={
                        <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search'/>}/>
                    }
                    onChangeText={value => {
                        onInputChange(value)
                        setSearchData(value)
                    }}
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
                        placeholder="select a category"
                        onValueChange={searchValue => {
                            onSelectChange(searchValue)
                            setSearchType(searchValue)
                            
                        }}
                        _selectedItem={{
                            bg: "#009999",
                            endIcon: <CheckIcon size={4} />,
                        }}
                    >
                        <Select.Item label="multi" value="multi"/>
                        <Select.Item label="movie" value="movie"/>
                        <Select.Item label="tv" value="tv"/>
                    </Select>
                    <Button
                        onPress={onSubmit}
                        startIcon={<Icon as={Ionicons} name='ios-search' />}
                        >
                    Search
                    </Button>
                </HStack>
            </FormControl>
        </VStack>
    )
}

export default Search