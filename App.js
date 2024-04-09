import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { Button, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<NavigationContainer>
				<Drawer.Navigator initialRouteName='Categories'>
					<Drawer.Screen
						name='Categories'
						component={CategoryScreen}
						options={{ title: 'All Categories' }}
					/>
				</Drawer.Navigator>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: '#351401',
						},
						headerTintColor: 'white',
						contentStyle: {
							backgroundColor: '#3f2f25',
						},
					}}
				>
					<Stack.Screen
						name='Overview'
						component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						// 	const catId = route.params.categoryId;
						// 	return { title: catId };
						// }}
					/>
					<Stack.Screen
						name='MealDetails'
						component={MealDetailsScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
