import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#01633D',
        width: 340,
        borderRadius: 12,
        height: 48,
        alignItems: 'center',
        fontWeight: "bold",
        marginTop: 80

    },
    buttonText: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'white'
    },
    buttonText1: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#5987CC',
        marginTop: 70
    },
    main: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 20,
        color: "white",  
        marginTop: 50 
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginBottom: 120,
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20
    },
    inputContainer: {
        width: "80%",
    },
    input1: {
        backgroundColor: "white",
        borderRadius: 12,
        marginBottom: 20,
        height: 48,
        width: 340,
        alignItems: 'center',
        borderWidth: 2
    },
    input2: {
        backgroundColor: "white",
        borderRadius: 12,
        height: 48,
        width: 340,
        alignItems: 'center',
        borderWidth: 2
    },
    textButton: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    }
})