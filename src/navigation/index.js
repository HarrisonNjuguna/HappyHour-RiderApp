import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from '../screens/OrdersScreen';
import OrdersDeliveryScreen from "../screens/orderDelivery";

const stack = createNativeStackNavigator();

const Navigation = () => {
    return (
    <stack.Navigator>
        <stack.Screen name="Delivery" component={OrdersScreen} />
        <stack.Screen name="Delivery Details" component={OrdersDeliveryScreen} />
    </stack.Navigator>
    )
}

export default Navigation;