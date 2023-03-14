import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Platform } from 'react-native';
import { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import { TabNavigator } from './Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <TabNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
