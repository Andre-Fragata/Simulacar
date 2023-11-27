import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function Login(){
    const navigation = useNavigation();

    const handleNavigateToHome = () => {
      if (usuario && senha){
        navigation.navigate('home', {usuario});
      }else {
        Alert.alert('Aviso', 'Você precisa informar o Usuário para prosseguir.', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => navigation.navigate('login')},
        ])
      }
    };

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <LinearGradient
        colors={['#5d79b5', '#dbc9cf']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.main}>SIMULACAR</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.textButton}>Usuário</Text>
            <TextInput
            onChangeText={setUsuario} 
            value={usuario}
            style={styles.input1}
            />
          </View>
          <View>
            <Text style={styles.textButton}>Senha</Text>
            <TextInput
            onChangeText={setSenha}
            value={senha}
            style={styles.input2}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleNavigateToHome}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText1}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      );
};


export default Login;
