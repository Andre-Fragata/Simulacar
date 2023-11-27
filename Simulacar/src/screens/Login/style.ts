import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    main: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 20,
        color: "white",  
        marginTop: 50 
    },
    inputContainer: {
        width: "80%",
        marginTop: 260
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
        borderWidth: 2
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
    textButton: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    }
})