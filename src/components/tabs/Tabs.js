import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoviesContainer from "../containers/MoviesContainer";
import TvShowsContainer from "../containers/TvShowsContainer";
import SearchContainer from "../containers/SearchContainer";

const Tab = createMaterialTopTabNavigator();

const Tabs = ({ navigation }) => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 11}
            }}
        >
            <Tab.Screen name="Movies" component={MoviesContainer} navigation={navigation}/>
            <Tab.Screen name="Search Results" component={SearchContainer} navigation={navigation}/>
            <Tab.Screen name="TV" component={TvShowsContainer} navigation={navigation}/>
        </Tab.Navigator>
    )
}

export default Tabs