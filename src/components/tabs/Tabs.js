import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoviesContainer from "../containers/MoviesContainer";
import TvShowsContainer from "../containers/TvShowsContainer";
import SearchContainer from "../containers/SearchContainer";

const Tab = createMaterialTopTabNavigator();

const Tabs = ({ navigation }) => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Movies" component={MoviesContainer} navigation={navigation}/>
            <Tab.Screen name="Search Results" component={SearchContainer}/>
            <Tab.Screen name="TV" component={TvShowsContainer}/>
        </Tab.Navigator>
    )
}

export default Tabs