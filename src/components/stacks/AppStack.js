import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from '../screens/IndexScreen'
import Tabs from "../tabs/Tabs";

const Stack = createNativeStackNavigator ()

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Movies App'
                component={Tabs}
                options={{
                    title: 'Movies App',
                    headerStyle: {
                        backgroundColor: '#2c3e50'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    }
                    }}

            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack