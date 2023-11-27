import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

function DadosVeiculo(){
    const navigation = useNavigation();
    const route = useRoute();

    const [modeloCarro, setModeloCarro] = useState();
    const [anoCarro, setAnoCarro] = useState();
    const [carValue, setCarValue] = useState();

    const handleDadosToFinal = () => {
      if (modeloCarro && anoCarro){
        navigation.navigate('final', {usuario, idade, modeloCarro, anoCarro, carValue})
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

    const handleDadosToHome = () => {
        navigation.navigate('home', {usuario})
    }

    const {usuario, idade, setUsuario} = route.params;

    return (
        <LinearGradient
        colors={['#5d79b5', '#dbc9cf']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.main}>SIMULACAR</Text>
          <Text style={styles.subtitulo}>Olá {usuario}, Agora vamos solicitar os dados do seu veiculo</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.textInput}>Qual seu carro ?</Text>
              <TextInput
              onChangeText={setModeloCarro}
              value={modeloCarro}
              style={styles.input1}
              />
            </View>
            <View >
              <Text style={styles.textInput}>Qual o ano do seu carro ?</Text>
              <TextInput
              onChangeText={setAnoCarro}
              value={anoCarro}
              keyboardType="numeric"
              style={styles.input2}
              />
            </View>
            <View>
              <Text style={styles.textInput}>Qual o valor do seu veiculo ?</Text>
              <TextInput
              onChangeText={setCarValue}
              value={carValue}
              keyboardType="numeric"
              style={styles.input3}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleDadosToFinal}>
              <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDadosToHome}>
              <Text style={styles.buttonText1}>Voltar</Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
      );
};


export default DadosVeiculo;
