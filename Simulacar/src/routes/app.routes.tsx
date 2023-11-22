import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login";
import Home from "../screens/Home";


function AppRoutes(){
    const {Screen, Navigator} = createStackNavigator()

    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="login" component={Login}/>
            <Screen name="home" component={Home}/>
        </Navigator>
    )
}

export default AppRoutes;