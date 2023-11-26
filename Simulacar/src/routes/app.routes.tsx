import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login";
import Home from "../screens/Home";
import DadosVeiculo from "../screens/DadosVeiculo";
import Final from "../screens/Final";


function AppRoutes(){
    const {Screen, Navigator} = createStackNavigator()

    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="login" component={Login}/>
            <Screen name="home" component={Home}/>
            <Screen name="dadosvei" component={DadosVeiculo}/>
            <Screen name="final" component={Final}/>
        </Navigator>
    )
}

export default AppRoutes;