/** @format */

import { ActivityIndicator, StatusBar } from 'react-native';
import { HomeScreen } from './src/screens';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import Router from './src/router/Router';

export default function App() {
	let [fontLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	});

	if (!fontLoaded) {
		return <ActivityIndicator />;
	} else {
		return (
			<>
				<StatusBar hidden />
				<Router />
			</>
		);
	}
}
