import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { styles } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

function Home(){
    const navigation = useNavigation();
    const route = useRoute();

    const handleHomeToLogin = () => {
        navigation.navigate('login')
    }

    const handleHomeToDados = () => {
      if (idade){
        navigation.navigate('dadosvei', {usuario, idade})
      }else {
        Alert.alert('Aviso', 'Você precisa informar o Usuário e Senha.', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log("teste")},
        ])
      }
        
    }

    const [idade, setIdade] = useState();

    const {usuario} = route.params;


    return(
        <LinearGradient
        colors={['#5d79b5', '#dbc9cf']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.main}>SIMULACAR</Text>
          <Text style={styles.subtitulo}>Olá {usuario}, vamos realizar uma simulacão para um seguro.</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.textButton}>Qual a sua Idade ?</Text>
            <TextInput
            onChangeText={setIdade}
            value={idade}
            style={styles.input1}
            keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleHomeToDados}>
              <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHomeToLogin}>
              <Text style={styles.buttonText1}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      );
}

export default Home;