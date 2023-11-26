import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation, useRoute } from "@react-navigation/native";

function Final(){
    const navigation = useNavigation();
    const route = useRoute();

    const {usuario, idade, anoCarro, modeloCarro} = route.params;

    const handleFinalToDados = () => {
        navigation.navigate('dadosvei', {usuario});
    };

    const handleFinalizar = () =>
    Alert.alert('Finalizar', 'Você finalizou seu calculo de seguro. Será redirecionado para a tela inicial.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('login')},
    ]);

    

    const calcularSeguro = (idade, anoCarro) => {
        let valorBase = 1000;
        let ajusteIdade = 0; // Inicializado com 0
        let ajusteAnoCarro = 0; // Inicializado com 0
      
        // Ajuste com base na idade
        if (idade < 22) {
          ajusteIdade = 0.2 * valorBase; // Acréscimo de 20%
        } else if (idade >= 22 && idade <= 28) {
          ajusteIdade = 0.18 * valorBase; // Acréscimo de 18%
        } else {
          ajusteIdade = -0.15 * valorBase; // Redução de 15%
        }
      
        // Ajuste com base no ano do carro
        if (anoCarro < 2000) {
          ajusteAnoCarro = 0.3 * valorBase; // Acréscimo de 30%
        } else if (anoCarro >= 2000 && anoCarro <= 2009) {
          ajusteAnoCarro = 0.15 * valorBase; // Acréscimo de 15%
        } else if (anoCarro >= 2016) {
          ajusteAnoCarro = -0.1 * valorBase; // Redução de 10%
        }
      
        const valorSeguro = valorBase + ajusteIdade + ajusteAnoCarro;
      
        return {
          valorBase,
          ajusteIdade,
          ajusteAnoCarro,
          valorSeguro,
        };
      };
      

    const {valorBase, ajusteIdade, ajusteAnoCarro, valorSeguro} = calcularSeguro(idade, anoCarro);


    return (
        <LinearGradient
        colors={['#5d79b5', '#dbc9cf']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
        <View style={styles.container}>
            <Text style={styles.main}>SIMULACAR</Text>
            <Text style={styles.subtitulo}>Olá {usuario}, fizemos um orcamento para seu veiculo ferrari.</Text>
            <View>
                <View style={styles.back}>
                    <Text style={styles.textback}>Base </Text>
                    <Text style={styles.textback}>R$ {valorBase}</Text>
                </View>
                <View style={styles.back}>
                    <Text style={styles.textback}>por idade </Text>
                    <Text style={styles.textback}>R$ {ajusteIdade}</Text>
                </View>
                <View style={styles.back}>
                    <Text style={styles.textback}>por ano </Text> 
                    <Text style={styles.textback}>R$ {ajusteAnoCarro}</Text>
                </View>
                <View style={styles.back}>
                    <Text style={styles.textback}>Total </Text>
                    <Text style={styles.textback}>R$ {valorSeguro.toFixed(2)}</Text>
                </View>
            </View>
            <View >
                <TouchableOpacity style={styles.button} onPress={handleFinalizar}>
                    <Text style={styles.buttonText}>Finalizar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleFinalToDados}>
                    <Text style={[styles.buttonText1, { alignSelf: 'center' }]}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </LinearGradient>
      );
};


export default Final;
