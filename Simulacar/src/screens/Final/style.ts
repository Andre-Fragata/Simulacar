import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
    },    
    main: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 120,
        color: "white",
        marginTop: 50 
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    back: {
        backgroundColor: '#D9D9D9',
        marginTop: 16,
        width: 345,
        height: 48,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
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
        marginTop: 50,
    },
    textback: {
        color: "#1A254E",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 10
    }
})