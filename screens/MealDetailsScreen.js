import React, { useLayoutEffect } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';

export default function MealDetailsScreen({ route, navigation }) {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	console.log(selectedMeal.steps);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return <Button title='hey' />;
			},
		});
	}, [navigation]);

	return (
		<ScrollView>
			<View>
				<Image
					style={styles.image}
					source={{ uri: selectedMeal.imageUrl }}
				/>
				<Text style={styles.title}>{selectedMeal.title}</Text>
				<View style={styles.details}>
					<Text style={styles.detailItem}>{selectedMeal.duration}</Text>
					<Text style={styles.detailItem}>{selectedMeal.complexity.toUpperCase()}</Text>
					<Text style={styles.detailItem}>{selectedMeal.affordability.toUpperCase()}</Text>
				</View>

				<View>
					<Text style={styles.subtitle}>Indegredients</Text>
					{selectedMeal.ingredients.map((i) => (
						<Text
							style={styles.steps}
							key={i.id}
						>
							{i}
						</Text>
					))}
					<Text style={styles.subtitle}>Steps</Text>
					{selectedMeal.steps.map((i) => (
						<Text
							style={styles.steps}
							key={i.id}
						>
							{i}
						</Text>
					))}
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'center',
		margin: 8,
		color: 'white',
	},
	subtitle: {
		color: 'white',
		fontSize: 24,
		textAlign: 'center',
		margin: 12,
		padding: 8,
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		marginHorizontal: 28,
	},
	steps: {
		color: 'white',
		marginHorizontal: 30,
		backgroundColor: 'brown',
		textAlign: 'center',
		marginVertical: 6,
		paddingVertical: 4,
		borderRadius: 8,
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 8,
		justifyContent: 'center',
	},
	detailItem: {
		color: 'white',
		marginHorizontal: 4,
		fontSize: 12,
	},
});
