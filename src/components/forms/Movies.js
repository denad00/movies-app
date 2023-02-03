import { Select, VStack, CheckIcon } from "native-base"
import { useState } from "react"

const Movies = props => {
    const { getMovies, onSelectChange } = props
    const [movieType, setMovieType] = useState("")

    return (
        <VStack alignItems='center' space={2} py={5}>
            <Select 
                selectedValue={movieType} 
                minWidth={200} 
                accessibilityLabel="Select Type of Filter for Movies"
                placeholder="select a category"
                onValueChange={movieValue => {
                    onSelectChange(movieValue)
                    setMovieType(movieValue)
                    getMovies(movieValue)
                }}
                _selectedItem={{
                    bg: "#009999",
                    endIcon: <CheckIcon size={4} />
                }}
            >
                <Select.Item label="popular" value="popular"/>
                <Select.Item label="now_playing" value="now_playing"/>
                <Select.Item label="top_rated" value="top_rated"/>
                <Select.Item label="upcoming" value="upcoming"/>
            </Select>
        </VStack>
    )
}

export default Movies