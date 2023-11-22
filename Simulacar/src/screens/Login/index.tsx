import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import LinearGradient from "react-native-linear-gradient";

function Login(){
    return (
        <LinearGradient
        colors={['purple', 'white']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text>Home Screen</Text>
      </LinearGradient>
      );
};


export default Login;
