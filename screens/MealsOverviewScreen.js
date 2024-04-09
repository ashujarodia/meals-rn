import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route, navigation }) {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter((item) => {
		return item.categoryIds.indexOf(catId) >= 0;
	});

	useEffect(() => {
		const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	function renderMealItems(itemData) {
		function onPress() {
			navigation.navigate('MealDetails', {
				mealId: itemData.item.id,
			});
		}

		return (
			<MealItem
				title={itemData.item.title}
				imageUrl={itemData.item.imageUrl}
				affordability={itemData.item.affordability}
				complexity={itemData.item.complexity}
				duration={itemData.item.duration}
				onPress={onPress}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItems}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
