import { Select, VStack, CheckIcon } from "native-base"
import { useState } from "react"

const TvShows = () => {
    const [tvShowType, setTvShowType] = useState("")

    return (
        <VStack alignItems='center' space={2} py={5}>
            <Select 
                selectedValue={tvShowType} 
                minWidth={200} 
                accessibilityLabel="Select Type of Filter for Movies"
                onValueChange={tvShowValue => setTvShowType(tvShowValue)}
                _selectedItem={{
                    bg: "#009999",
                    endIcon: <CheckIcon size={4} />,
                }}
                mt={1}
            >
                <Select.Item label="popular" value="popular"/>
                <Select.Item label="airing_today" value="airing_today"/>
                <Select.Item label="on_the_air" value="on_the_air"/>
            </Select>
        </VStack>
    )
}

export default TvShows