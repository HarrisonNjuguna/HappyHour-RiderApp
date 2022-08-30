import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor:'red', 
        flex: 1,
    },
    handleIndicator: {
        backgroundColor: 'black',
        width: 50,
    },
    handleIndicatorContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    routeDetailsText: {
        fontSize: 25,
        letterSpacing: 1 
    },
    deliveryDetailsContainer: {
        paddingHorizontal: 20, 
    },
    shopName: {
        fontSize: 25, 
        letterSpacing: 1, 
        paddingVertical: 20
    },
    addressContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center'      
    },
    addressText: {
        fontSize: 20, 
        color: 'grey', 
        fontWeight: '500', 
        letterSpacing: 0.5,
        marginLeft: 15,
        textAlign: 'center'
    },
    orderDetailsContainer: {
        borderTopWidth: 1, 
        borderColor: 'lightgrey', 
        paddingTop: 10,
    },
    orderItemsText: {
        fontSize: 18, 
        color: 'grey', 
        fontWeight: '500', 
        letterSpacing: 0.5, 
        marginBottom:5
    },
    buttonContainer: {
        marginTop: 'auto', 
        marginVertical: 30, 
        marginHorizontal: 10, 
        borderRadius:10
    },
    buttonText: {
        color: 'white', 
        paddingVertical: 15, 
        fontSize: 25, 
        fontWeight: '500', 
        textAlign: 'center', 
        letterSpacing: 0.5
    },
})



