import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MoviesContainer from "../containers/MoviesContainer";
import Search from "../forms/Search";
import TvShowsContainer from "../containers/TvShowsContainer";

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Movies" component={MoviesContainer}/>
            <Tab.Screen name="Search Results" component={Search}/>
            <Tab.Screen name="TV" component={TvShowsContainer}/>
        </Tab.Navigator>
    )
}

export default Tabs