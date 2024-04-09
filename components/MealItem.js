import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function MealItem({ title, imageUrl, duration, complexity, affordability, onPress }) {
	return (
		<View style={styles.mealitem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				onPress={onPress}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image
							style={styles.image}
							source={{ uri: imageUrl }}
						/>
						<Text style={styles.title}>{title}</Text>
					</View>
					<View style={styles.details}>
						<Text style={styles.detailItem}>{duration}</Text>
						<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
						<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		margin: 8,
	},
	mealitem: {
		margin: 16,
		borderRadius: 8,
		overflow: 'hidden',
		backgroundColor: 'white',
		elevation: 5,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 8,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 8,
		justifyContent: 'center',
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});
